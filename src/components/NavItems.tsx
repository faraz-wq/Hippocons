"use client"
import { PRODUCT_CATEGORIES } from "@/config"
import { useState,useRef, useEffect } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/use-on-click-outside"

const NavItems = () => {
    const [ActiveIndex, setActiveIndex] = useState<
    null | number
    >(null)

    const isAnyOpen = ActiveIndex !== null
    useEffect(()=>{
        const handler = (e: KeyboardEvent) => {
            if(e.key === "Escape"){
                setActiveIndex(null)
            }
        }
        document.addEventListener("keydown",handler)

        return () => {
            document.removeEventListener("keydown", handler)
        }
    })
    const navRef = useRef<HTMLDivElement| null>(null)

    useOnClickOutside(navRef, ()=> setActiveIndex(null))
  return (
    <div className="flex gap-4 h-full" ref={navRef}>
        {PRODUCT_CATEGORIES.map((category,i) => {

            const handleOpen = () => {
                if(ActiveIndex === i ) {
                    setActiveIndex(null)
                } else {
                    setActiveIndex(i)
                }
            }
            const isOpen = i === ActiveIndex

            return (
                <NavItem
                    category={category}
                    handleOpen={handleOpen}
                    isOpen={isOpen}
                    key={category.value}
                    isAnyOpen={isAnyOpen}
                />
            )
        })}
    </div>
  )
}

export default NavItems