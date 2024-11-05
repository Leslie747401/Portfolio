import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Copy, MapPin } from "lucide-react";
import Link from "next/link";

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

                <div className="flex px-4 pl-2.5 py-2 rounded-xl bg-[#F7F7F8] dark:bg-[#282828] items-center gap-2">
                  <MapPin className="text-[#6F727A] dark:text-[#8F8F8F]"/>
                  <p className="font-medium laptop:text-[20px] max-tablet:text-[18px] max-mini-tablet:text-[16px] text-[#6F727A] dark:text-[#8F8F8F]">India</p>
                </div>

              </div>

            </div>

            <p className="text-[#60646C] text-[18px] dark:text-[#ffffff99]">Fullstack developer with a strong foundation in front-end and back-end technologies, dedicated to creating responsive, efficient web applications and seamless user experiences. Passionate about building scalable solutions across diverse projects.</p>

            <div className="flex gap-5 pt-3 items-center max-mini-tablet:flex-col max-mini-tablet:gap-4">

              
                <Link href={'/about'} className="px-5 py-3 rounded-xl flex items-center justify-center bg-[#303236] dark:bg-[#434343] hover:bg-[#6551E9] dark:hover:bg-[#4f4f4f] transition-all dur ation-300 max-mini-tablet:w-full dark:border dark:border-[#ffffff14] shadow-[inset_0_4px_12px_-2px_rgb(255,255,255,0.05)]">
                  <p className="text-[14px] text-white font-medium">About</p>
                </Link>

              <button variant='outline' className="flex gap-3 items-center justify-center rounded-xl px-5 py-3 max-mini-tablet:w-full border dark:border dark:border-[#ffffff14] dark:bg-[#1A1A1A] shadow-[inset_0_4px_12px_-2px_rgb(255,255,255,0.05)] dark:hover:border-[#575757] transition-all duration-300">
                <Copy width={20} height={20} className="text-[#7d828c]"/>
                <p className="text-[14px] text-[#303236] dark:text-white">Copy Email</p>
              </button>

            </div>
            
          </div>

        </div>

      </div>

    </div>
  );
}
