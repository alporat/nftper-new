'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { ArrowLeft, MessageSquare, Twitter, FileText, User } from 'lucide-react'
import { useStore } from '@/app/hooks/path'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { TabsDemo } from './animated tabs'
import { Separator } from '../ui/separator'

export default function TabbedNav() {
  const [activeTab, setActiveTab] = useState<'bidding' | 'listing' | 'extreme'>('bidding')
  const Ishome = useStore((state) => state.ishome)
  const setIshome = useStore((state)=> state.setIshome)
  const pathname = usePathname();  // Gets the current path

  if (pathname === "/") return null;  // Don't render the nav if on home page

  return (
    <>
    <div className="flex items-center justify-center px-4 py-2  w-[500px] rounded-lg motion-preset-pop motion-duration-500
">
      <div className="flex items-center gap-2">

        <Link className="text-white hover:bg-zinc-800 p-1 rounded-md transition-colors" href={'/'}>
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="flex items-center gap-0 relative">
          <Link
            onClick={() => setActiveTab('bidding')}
            className={cn(
              "px-3 py-1 rounded-md text-sm font-medium relative transition-all duration-200 ease-in-out",
              activeTab === 'bidding'
                ? "bg-emerald-500 text-white scale-105"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
            )} href={'/bidding'}          >
            Bidding
          </Link>
          <Link
            onClick={() => setActiveTab('listing')}
            className={cn(
              "px-3 py-1 rounded-md text-sm font-medium relative transition-all duration-200 ease-in-out",
              activeTab === 'listing'
                ? "bg-emerald-500 text-white scale-105"
                : "text-zinc-400 hover:text-white "
            )}href={"/listing"}
          >
            Listing
          </Link>
          <Link
            onClick={() => setActiveTab('extreme')}
            className={cn(
              "px-3 py-1 rounded-md text-sm font-medium relative transition-all duration-200 ease-in-out",
              activeTab === 'extreme'
                ? "bg-emerald-500 text-white scale-105"
                : "text-zinc-400 hover:text-white "
            )}href={"/extremebidding"}
          >
            Extreme
          </Link>
          <Separator orientation='vertical' className='bg-zinc-700   h-8 mx-2'/>
        </div>

        <TabsDemo/>


      </div>

      <div className="flex items-center gap-2">
        <button className="text-zinc-400 hover:text-white  p-1 rounded-md transition-colors">
          <MessageSquare className="h-5 w-5" />
        </button>
        <button className="text-zinc-400 hover:text-white  p-1 rounded-md transition-colors">
          <Twitter className="h-5 w-5" />
        </button>
        <button className="text-zinc-400 hover:text-white p-1 rounded-md transition-colors">
          <FileText className="h-5 w-5" />
        </button>
        <button className="text-zinc-400 hover:text-white  p-1 rounded-md transition-colors">
          <User className="h-5 w-5" />
        </button>
      </div>
    </div>
    </>
  )
}

