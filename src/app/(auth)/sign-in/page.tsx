"use client"
import { Icons } from "@/components/ui/Icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { trpc } from "@/trpc/client"
import { TAuthCredentialsValidator,AuthCredentialsValidator } from "@/lib/validators/account-credentials-validator"
import { toast } from 'sonner'
import { ZodError } from "zod"
import { useRouter, useSearchParams } from "next/navigation"

const Page = () => {    
    
    const searchParams = useSearchParams()
    const router = useRouter()
    const isSeller = searchParams.get('as') === 'seller'
    const origin = searchParams.get('origin')
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm<TAuthCredentialsValidator>({
        resolver:zodResolver(AuthCredentialsValidator),
    }) 

    const continueAsSeller = () =>{
        router.push("?as=seller")
    }
    const continueAsBuyer = () =>{
        router.push("/sign-in",undefined)
    }

    const { mutate: signIn,isLoading } = 
    trpc.auth.createPayloadUser.useMutation({
        onError: (err) => {
            if(err.data?.code === "UNAUTHORIZED") {
                toast.error("Invalid email or password.")
                return
            }            
            toast.error('Something went wrong. Please try again.')
        },
        onSuccess: ({sentToEmail})=>{
            toast.success(`Signed in successfully.`)
            router.refresh()
            if(origin) {
                router.push(`/${origin}`)
                return
            }
            if(isSeller) {
                router.push('/sell')
                return
            }
            router.push('/')
        }
        
    })

    const onSubmit = ({email,password}:TAuthCredentialsValidator) => {
        signIn({email,password})
    }

    return ( 
    <>
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-0 sm:w-[350px]">
            <div className="flex flex-col items-center space-y-2 text-center">
                <Icons.logo className="h-20 w-20"/>
                <h1 className="text-2xl font-bold">
                    Sign in to your {isSeller? 'seller' : ''}{' '}
                    Account                  
                </h1>
                <Link className={buttonVariants({
                    variant:'link',
                })}
                href='/sign-up'>
                    Don&apos;t have an account? Sign-up
                    <ArrowRight className="h-4 w-4"/>
                </Link>
            </div>
            
            <div className="grid gap-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <div className="grid gap-1 py-2">
                            <Label htmlFor='email'>Email</Label>
                            <Input 
                            {...register("email")} 
                            className={cn({
                                "focus-visible:ring-red-500":errors.email,
                            })}
                            placeholder="you@example.com"                            
                            />
                            {errors?.email && (
                                <p className="text-sm text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className="grid gap-1 py-2">
                            <Label htmlFor='email'>Password</Label>
                            <Input
                            {...register("password")} 
                            type="password"
                            className={cn({
                                "focus-visible:ring-red-500":errors.password,
                            })}
                            placeholder="Password"
                            />
                            {errors?.password && (
                                <p className="text-sm text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        <Button>Sign in</Button>
                    </div>
                </form>
                <div className='relative'>
                    <div className='absolute inset-0 flex items-center'>
                        <span className='w-full border-t'/>
                    </div>
                    <div className='relative flex justify-center text-xs uppercase'>
                        <span className="bg-background px-2 text-muted-foreground"></span>
                    </div>
                </div>
                {isSeller? (
                    <Button onClick={continueAsBuyer} 
                    variant='secondary'
                    disabled={isLoading}>
                        Cotinue as Buyer
                    </Button>
                ):
                    <Button
                        onClick={continueAsSeller} 
                        variant='secondary'
                        disabled={isLoading}>
                        Continue as Seller
                    </Button>}
            </div>
        </div>
    </div>
    </>)
}

export default Page