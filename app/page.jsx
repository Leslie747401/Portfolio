import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex">

      <Sidebar/>
      <MobileNav/>
      
      <div className='w-full bg-[#f9f9f9] dark:bg-[#141414] h-screen p-2 pl-0 max-mini-tablet:pl-2 max-mini-tablet:mt-16'>

        <div className='bg-white dark:bg-[#1a1a1a] h-full rounded-xl border flex justify-center laptop:px-16 laptop:pr-24 laptop:py-20 max-laptop:px-10 max-laptop:py-20 max-mini-tablet:px-6 max-mini-tablet:py-10'>
          
            <div className="w-[720px] max-tablet:w-full flex flex-col gap-6">

              <div>
                
                <p className="tablet:text-[42px] max-tablet:text-[32px] font-[600] tracking-tight text-[#303236] dark:text-[#FFFFFF]">Hello! I&rsquo;m Leslie</p>

                <div className="flex gap-4 items-center flex-wrap">

                  <p className="tablet:text-[42px] max-tablet:text-[32px] font-[600] text-[#6551E9] dark:text-[#ACA1FB] tracking-tight">Fullstack Developer</p>

                  <div className="flex px-4 py-2 rounded-xl bg-[#F7F7F8] dark:bg-[#282828] items-center gap-2">
                    <MapPin className="text-[#6F727A] dark:text-[#8F8F8F]"/>
                    <p className="font-medium laptop:text-[20px] max-tablet:text-[18px] text-[#6F727A] dark:text-[#8F8F8F]">India</p>
                  </div>

                </div>

              </div>

              <p className="text-[#60646C] text-[18px] dark:text-[#ffffff99]">Product designer and design system specialist with over 9 years of experience focusing on user experience and design systems to creating a user-centered design in SaaS products.</p>
            
            </div>

        </div>

      </div>

    </div>
  );
}
