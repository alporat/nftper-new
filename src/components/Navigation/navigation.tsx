// "use client"
// import React, { useState } from "react";
// import { FloatingDock } from "@/components/ui/floating-dock";
// import {
//   IconBrandGithub,
//   IconBrandX,
//   IconExchange,
//   IconHome,
//   IconNewSection,
//   IconTerminal2,
  
// } from "@tabler/icons-react";
// import {Bot, ListChecks, Zap} from "lucide-react"
// import Image from "next/image";
// import { useStore } from "@/app/hooks/path";
// import { usePathname } from "next/navigation";

// export function Navigation() {


  


//   const links = [
//     {
//       title: "Home",
//       icon: (
//         <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "/",
//     },

//     {
//       title: "Bidding",
//       icon: (
//         <Bot className={`h-full w-full    ${pathname === "/bidding" ? "text-blue-500" :"text-neutral-500"}`} />
//       ),
//       href: "/bidding",
//     },
//     {
//       title: "Listing",
//       icon: (
//         <ListChecks className={`h-full w-full    ${pathname === "/listing" ? "text-green-500" :"text-neutral-500"}`} />
//       ),
//       href: "listing",
//     },
    
//     {
//       title: "Extreme Bidding",
//       icon: (
//         <Zap className={`h-full w-full    ${pathname === "/extremebidding" ? "text-yellow-500" :"text-neutral-500"}`}/>
//       ),
//       href: "extremebidding",
//     },

//   ];
//   return (
//     <>
//       {Ishome && (
//         <div className="flex items-center justify-center w-full p-3  ">
//           <FloatingDock
//             mobileClassName="translate-y-20" // only for demo, remove for production
//             items={links}
//             desktopClassName="motion-preset-pop motion-duration-1000"
//           />
//         </div>
//       )}
//     </>
//   );
// }
