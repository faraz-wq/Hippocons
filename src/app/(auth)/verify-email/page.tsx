import Image from "next/image"

interface PageProps {
    searchParams: {
        [key: string]: string| string[] | undefined
    }
}
const VerifyEmailPage = ({searchParams}: PageProps) => {
    const token = searchParams.token
    return (
    <div className="container relative flex flex-col justify-center items-center pt-20 lg:pd-x-0">
        <div className="mx-auto flex flex-w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {token && typeof token === "string" ? (
                <div className="">

                </div>
            ):(
                <div className="flex h-full flex-col items-center justify-center space-y-1">
                    <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                        <Image src="hippo-sent-email.png" alt="hippo sent image" />  
                    </div>
                </div>
            )}
        </div>
    </div>
    )
}

export default VerifyEmailPage