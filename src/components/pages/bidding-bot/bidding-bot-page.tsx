'use client'

import { PageContainer } from '@/components/shared/page-container'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { biddingBotFeatures } from '@/config/features'
import { usePathname } from 'next/navigation'
import { useStore } from '@/app/hooks/path'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Pricing from '@/components/ui/pricing'
import Image from 'next/image'
import { ArrowRight, Bot, Sparkles } from 'lucide-react'
import img from "@/images/mo.png"
import { FAQ } from '@/components/ui/faq'
export function BiddingBotPage() {
  const pathname = usePathname()
  const setIshome = useStore((state) => state.setIshome)

  useEffect(() => {
    pathname === "/bidding" ? setIshome(true) : setIshome(true)
  }, [pathname])

  const addonsplans = [ 
    {
      id :"0",
      name:"Remove Prefix",
      description : "Remove NFTPER prefix from your username",
      price : "Ξ0.05"

    
    },
    {
      id :"1",
      name:"Bot Count Increase",
      description : " Increases your bot count by one (for Standard and Pro subscription)",
      price : "Ξ0.05"

    
    },
    {
      id :"2",
      name:"Ultra Bot Count Increase",
      description : "Increases your bot count by one (for Ultra subscription)",
      price : "Coming Soon"

    
    }
  ]
  const biddingplans = [
    
    {
      name: 'Standard Access',
      price: "Ξ0.07",
      features: [
        { name: 'Up to 180 offers / minute', included: true },
        { name: '60 token offers / min', included: true },
        { name: '120 collection offers / min', included: true },
        { name: '1 bot count', included: true },
        { name: 'Add up to 5 wallets to bid from', included: true },
        { name: 'Instant Counter Offer (coming soon)', included: false },
        { name: 'Whitelist on future Lifetime NFT', included: true },
      ],
    },
    {
      name: 'Pro Access',
      popular: true,
      price: "Ξ0.10",
      features: [
        { name: 'Up to total of 540 offers / minute', included: true },
        { name: '180 offers / min per wallet', included: true },
        { name: '60 token offers / min', included: true },
        { name: '120 collection offers / min', included: true },
        { name: 'Bid with 3 wallets concurrently', included: true },
        { name: 'Instant Counter Offer (coming soon)', included: false },
        { name: 'Whitelist on future Lifetime NFT', included: true },
      ],
    },
    {
      name: 'Ultra Access',
      price: "Coming Soon",
      features: [
        { name: 'Up to 960 offers / minute', included: true },
        { name: '60 token offers / min', included: true },
        { name: '900 collection offers / min', included: true },
        { name: '1 ultra speed bot count', included: true },
        { name: 'Add up to 10 wallets to bid from', included: true },
        { name: 'Instant Counter Offer (coming soon)', included: false },
        { name: 'Whitelist on future Lifetime NFT', included: true },
      ],
    },
  ]
  
  const biddingfaq = [
    {question:"What does NFTPER offer? ", answer:"We are a new service provider, and we offer autonomous bots that can send offers on NFTs for you. "},
    {question:"Who is the NFTPER team?", answer: (
        <>I'm <a href='https://alporat.com/' className='hover:underline hover:text-green-400'>alporat</a>, and I'm currently the sole developer and creator of NFTPER.</>
    )},
    {question:"Will there be Founder NFTs in the future ?", answer:"We plan to launch Lifetime Access NFTs on OpenSea in the near future."},
    {question:"Do you have an affiliate program ?", answer:"Contact us via Discord to join our affiliate program, where you can get a cut from your referrals' first month subscription."},
    {question:"There is a bug, what should I do ? ", answer: (
      <>Contact us via  <a href='https://discord.gg/hsa6VKbjzw' className='hover:underline hover:text-green-400'>Discord</a>, to join our affiliate program, where you can get a cut from your referrals' first month subscription..</>
  )}, 


    {question:"I have more questions.",answer: (
      <>You can join our <a href='https://discord.gg/hsa6VKbjzw' className='hover:underline hover:text-green-400'>Discord</a>, and ask them there, or you can email us directly at <a href='mailto:contact@nftper.com' className='hover:underline hover:text-green-400'>contact@nftper.com</a>.</>
  )},

  ]

  return (
    <PageContainer title={''} description={''}>
      <section className="relative py-20 px-4 min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
        {/* Animated background elements */}
        <div className="absolute inset-0 w-full h-full">
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <div className="inline-block px-4 py-2 bg-green-500/10 rounded-full relative ">

                <div className="flex items-center gap-2 text-green-500 ">
                  <Bot className="w-4 h-4" />

                  <span className="text-sm font-medium">

                    Automated NFT Bidding</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Maximize Your NFT Game with{' '}
                
                <span className="relative">
                  <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    NFTPER
                  </span>
                </span>
                {' '}Bidding Bot
                
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                Automate and dominate NFT auctions with precision mass bidding. Stay ahead of the competition with advanced bidding strategies.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-green-500/20 hover:bg-green-500/10">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-background bg-green-500/20"
                    />
                  ))}
                </div>
                <p>Join 1000+ traders using NFTPER</p>
              </div>
            </div>

            <div className="relative lg:block">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent backdrop-blur-sm">
                <div className="absolute inset-0 bg-grid-white/5" />
                <div className="relative z-10 ">
                  {/* Add your NFT preview or bot interface mockup here */}
                  <Image src={img} alt={''} />

                  <div className="w-full h-full rounded-lg bg-background/40 backdrop-blur-md border border-green-500/20 t flex items-center justify-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .bg-grid-white\/5 {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>

      <FeatureGrid features={biddingBotFeatures} />
      <Pricing plans={biddingplans} addons={addonsplans} buttonText={'PURCHASE'} />
      <FAQ title={''} faqs={biddingfaq}/>
    </PageContainer>
  )
}

