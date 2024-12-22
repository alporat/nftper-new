"use client";

import Image from "next/image";
import { Tabs } from "@/components/Navigation/tabs";

export function TabsDemo() {
  const tabs = [
    
   
    {
      title: "Features",
      value: "playground",
      content: (
        <></>
      ),
    },
    {
      title: "Pricing",
      value: "content",
      content: (
        <></>
      ),
    },
    {
      title: "Faq",
      value: "random",
      content: (
        <></>
      ),
    },
  ];

  return (
    <div className=" [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full ">
      <Tabs tabs={tabs} />
    </div>
  );
}

