import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";

export default function Contact() {
  return (
    <div className="flex">

      <Sidebar/>
      <MobileNav/>

      <div className='w-full bg-[#f9f9f9] dark:bg-[#141414] h-screen p-3 pl-0 max-mini-tablet:pl-2 max-mini-tablet:mt-16'>

        <div className='bg-white dark:bg-[#1a1a1a] h-full rounded-xl border flex justify-center items-center px-16 py-20'>
            <p>Contact</p>
        </div>

      </div>

    </div>
  );
}
