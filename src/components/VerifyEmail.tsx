"use client"
import { trpc } from "@/trpc/client"
import { Circle } from "lucide-react"
import Image from "next/image"

interface VerifyEmailProps {
  token: string
}
const VerifyEmail = ({token}: VerifyEmailProps) => {

  const {data, isLoading, isError} = trpc.auth.verifyEmail.useQuery({
    token,
  })
  if(isError){
    return <div className="flex flex-col items-center gap-2">
      <Circle className="h-8 w-8 text-red-600"/>
      <h3 className="font-semibold text-xl">There was a problem</h3>
      <p className="text-muted-foreground text-sm">
        This token is not valid or might be expired. Please try again.
      </p>
    </div>
  }
  if(data?.success)
    return 
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative mb-4 h-60 w-60 text-muted-foreground">
        <Image 
          src='/hippo-email-sent.png'
          fill
          alt='the email was sent'
        />
      </div>
    </div>

}

export default VerifyEmail