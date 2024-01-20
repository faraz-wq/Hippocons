"use client"
import { useCart } from "@/hooks/use-cart"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { Product } from "@/payload-types"

const AddToCartButton = ({ product }: {product: Product}) => {
  const { addItem } = useCart()
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    useEffect(()=>{
        const timeout = setTimeout(()=> {
            setIsSuccess(true)
        }, 2000)

        return () => clearTimeout(timeout)
    }, [isSuccess])

  return (
    <Button 
    onClick = {()=>{
      addItem(product)
      setIsSuccess(true)
    }}
    size='lg' 
    className='w-full'>
        { isSuccess ? 'Added!' : 'Add to cart' }
    </Button>
  )
}

export default AddToCartButton