'use client'

import { useState } from 'react'
import { Check, X, Sparkles, ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { usePathname } from 'next/navigation'

export default function Pricing({ plans, addons, buttonText }: PricingProps) {
  const [showAddon, setShowAddon] = useState(false)
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const pathname = usePathname();  // Gets the current path

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons(current =>
      current.includes(addonId)
        ? current.filter(id => id !== addonId)
        : [...current, addonId]
    )
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white bg-clip-text">
            Choose Your Plan
          </h2>
          <p className="text-xl mb-8 text-gray-400">
            Unlock the power of automated NFT bidding
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan: PricingProps['plans'][number], index: number) => (
            <motion.div
              key={plan.name}
              className={`relative group rounded-2xl backdrop-blur-sm ${
                plan.popular 
                  ? 'bg-gradient-to-b from-green-500/10 to-green-900/10 border border-green-500/20' 
                  : 'bg-gray-800/50 border border-gray-700/50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <span className="bg-green-500 text-white text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
                <div className="mb-6 h-[80px] flex items-end">
                  <span className={`font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent ${plan.name  === 'Ultra Access' || pathname ==="/listing"  ? 'text-3xl' : 'text-5xl'}`}>
                    {plan.price}
                  </span>
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.popular
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  } transition-all duration-200 group-hover:scale-105`}
                >
                  {buttonText}
                </Button>
              </div>

              <div className="border-t border-gray-700/50">
                <ul className="p-8 space-y-4">
                  {plan.features.map((feature: { included: boolean; name: string }, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className="rounded-full p-1 bg-green-500/10">
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                      ) : (
                        <div className="rounded-full p-1 bg-gray-700/50">
                          <X className="h-4 w-4 text-gray-500" />
                        </div>
                      )}
                      <span className={feature.included ? "text-gray-300" : "text-gray-500"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-on Toggle Button */}
          <div className="flex justify-center mb-8">
            <Button
              variant="outline"
              onClick={() => setShowAddon(!showAddon)}
              className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
            >
              {showAddon ? 'Hide' : 'Show'} Add-ons
              {showAddon ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </Button>
          </div>

        {/* Add-ons Section */}
        <AnimatePresence>
          {showAddon && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-4">
                {addons.map((addon: { id: string; name: string; description: string; price: string | number }) => (
                  <motion.div
                    key={addon.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{addon.name}</h3>
                        <p className="text-gray-400">{addon.description}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <span className="text-2xl font-bold text-green-500">{typeof addon.price === 'number' ? addon.price.toFixed(3) : addon.price}</span>
                        {pathname ==="/listing" ? (

                        null
                        ) :                         <Button 
                        variant="outline"
                        className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-600"
                        onClick={() => handleAddonToggle(addon.id)}
                      >
                        PURCHASE
                      </Button>
}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export interface PricingProps {
  plans: Array<{
    name: string;
    price: string;
    features: Array<{ name: string; included: boolean }>;
    popular?: boolean;
  }>;
  addons: Array<{
    id: string;
    name: string;
    description: string;
    price: string | number;
  }>;
  buttonText: string;
}

