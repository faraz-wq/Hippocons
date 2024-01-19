import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: 'Instant Delivery',
    icon: ArrowDownToLine,
    description: "Get your assets delivered to your email in seconds and download them right away."
  },
  {
    name: 'Guaranteed Quality',
    icon: CheckCircle,
    description: "Every asset on our platform is verified by our team to ensure it is of highest quality standards. Not happy? We offer a 30-day refund guarantee."
  },
  {
    name: 'For the Planet',
    icon: Leaf,
    description: "1% of our procedings go towards preserving the planet!"
  }
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality {' '}
            <span className="text-green-600">
              digital assets
            </span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to Hippocons. Every asset on our platform is verified by our team to ensure highest quality standards</p> 
          <div className="flex felx-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>Browse Trending</Link>
            <Button variant='ghost'>Our quality promise &rarr;</Button>
          </div>
        </div>

        <ProductReel 
          query={{sort: 'desc', limit: 4}}
          href="/products/"
          title="Brand new" 
          subtitle="" 
        />
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div 
              key = {perk.name} 
              className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                    {<perk.icon className="w-1/3 h-1/3"/>}
                  </div>                  
                </div>
                <div className="mt-6 md:mt-0 md:ml-4 lg:ml-0 lg:mt-6">
                  <h3 className='text-base font:medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
