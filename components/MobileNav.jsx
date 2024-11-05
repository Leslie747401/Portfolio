import React from 'react'
import { Ghost, Menu } from 'lucide-react'

export default function MobileNav() {
  return (
    <div className='w-full mini-tablet:hidden fixed top-0 px-4 py-3 border-b bg-white dark:bg-[#1a1a1a]'>

        <div className='flex justify-between items-center'>
            
            <div className='flex gap-3 items-center'>
                <div className='w-[40px] h-[40px] bg-[#9bb8fb] flex justify-center items-center rounded-xl'>
                    <Ghost/>
                </div>
                <p className='text-[16px] font-medium'>Leslie Dsilva</p>
            </div>

            <Menu width={32} height={32} className='text-[#60646c] dark:text-[#ffffff99]'/>

        </div>
    
    </div>
  )
}
