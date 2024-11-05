'use client'

import { Ghost, Home, BriefcaseBusiness, User, Mail, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import lightInstagram from '@/public/lightInstagram.svg'
import darkInstagram from '@/public/darkInstagram.svg'
import lightGithub from '@/public/lightGithub.svg'
import darkGithub from '@/public/darkGithub.svg'
import lightLinkedin from '@/public/lightLinkedin.svg'
import darkLinkedin from '@/public/darkLinkedin.svg'
import Image from 'next/image'
import { SwitchTheme } from './SwitchTheme'
import { useTheme } from 'next-themes'

export default function Sidebar() {

    const route = usePathname();
    const { theme } = useTheme();
    
    return (

        <div className='max-mini-tablet:hidden max-laptop:w-[80px] laptop:w-[340px] bg-[#f9f9f9] dark:bg-[#141414] px-4 py-6 flex flex-col justify-between'>

            <div>

                {/* Name and Role */}
                <div className='flex gap-4 max-laptop:mb-4 laptop:mb-8 laptop:pl-2'>

                    <div className='w-[48px] h-[48px] bg-[#9bb8fb] rounded-lg flex justify-center items-center max-laptop:rounded-xl'>
                        <Ghost/>
                    </div>

                    <div className='flex flex-col max-laptop:hidden'>
                        <p className='text-[16px] font-medium leading-[1.6em] tracking-[-0.01em]'>Leslie Dsilva</p>
                        <p className='text-[#60646c] dark:text-[#ffffff99] text-[14px] leading-[1.6em] tracking-[-0.01em]'>Fullstack Developer</p>
                    </div>

                </div>

                {/* Different Routes */}

                <div className='flex flex-col gap-1 mb-4'>

                    <Link href={'/'}>

                        <div className={`${route == '/' && 'bg-[#efeeee] dark:bg-[#474747]'} flex items-center px-[12px] py-[8px] rounded-lg cursor-pointer dark:hover:text-white dark:hover:bg-[#474747] transition-all duration-500 max-laptop:justify-center max-laptop:py-[12px] max-laptop:rounded-xl laptop:gap-4 laptop:pl-2.5`} >

                            <Home width={20} height={20} className={`${route == '/' ? 'text-black dark:text-white' : 'text-[#60646c] dark:text-[#ffffff99]'}`}/>
                            
                            <p className={`text-[16px] font-medium ${route == '/' ? 'text-black dark:text-white' : 'text-[#60646c] dark:text-[#ffffff99]'} max-laptop:hidden`}>Home</p>
                       
                        </div>

                    </Link>

                    <Link href={'/projects'}>

                        <div className={`${route == '/projects' && 'bg-[#efeeee] dark:bg-[#474747] dark:text-white'} flex items-center hover:bg-[#efeeee] px-[12px] py-[8px] rounded-lg cursor-pointer text-[#ffffff99] hover:text-black transition-all duration-500 dark:hover:text-white dark:hover:bg-[#474747] max-laptop:justify-center max-laptop:py-[12px] max-laptop:rounded-xl laptop:gap-4 laptop:pl-2.5`}>
                            
                            <BriefcaseBusiness  width={20} height={20} className={`${route == '/projects' ? 'text-black dark:text-white' : 'text-[#60646c] dark:text-[#ffffff99]'}`}/>
                            
                            <p className={`text-[16px] font-medium ${route == '/projects' ? 'text-black dark:text-white' : 'text-[#60646c] dark:text-[#ffffff99]'} max-laptop:hidden`}>Projects</p>
                        
                        </div>
                    
                    </Link>

                    <Link href={'/about'}>
                        
                        <div className={`${route == '/about' && 'bg-[#efeeee] dark:bg-[#474747] dark:text-white'} flex items-center hover:bg-[#efeeee] px-[12px] py-[8px] rounded-lg cursor-pointer text-[#ffffff99] hover:text-black transition-all duration-500 dark:hover:text-white dark:hover:bg-[#474747] max-laptop:justify-center max-laptop:py-[12px] max-laptop:rounded-xl laptop:gap-4 laptop:pl-2.5`}>
                            
                            <User width={20} height={20} className={`${route == '/about' ? 'text-black dark:text-white' : 'text-[#60646c] dark:text-[#ffffff99]'}`}/>
                            
                            <p className={`text-[16px] font-medium ${route == '/about' ? 'text-black dark:text-white' : 'text-[#60646c] dark:text-[#ffffff99]'} max-laptop:hidden`}>About</p>
                        
                        </div>

                    </Link>

                    <Link href={'/contact'}>
                        
                        <div className={`${route == '/contact' && 'bg-[#efeeee] dark:bg-[#474747] dark:text-white'} flex items-center hover:bg-[#efeeee] px-[12px] py-[8px] rounded-lg cursor-pointer text-[#ffffff99] hover:text-black transition-all duration-500 dark:hover:text-white dark:hover:bg-[#474747] max-laptop:justify-center max-laptop:py-[12px] max-laptop:rounded-xl laptop:gap-4 laptop:pl-2.5`}>
                            
                            <Mail width={20} height={20} className={`${route == '/contact' ? 'text-black dark:text-white' : 'text-[#60646c] dark:text-[#ffffff99]'}`}/>
                            
                            <p className={`text-[16px] font-medium ${route == '/contact' ? 'text-black dark:text-white' : 'text-[#60646c] dark:text-[#ffffff99]'} max-laptop:hidden`}>Contact</p>
                        
                        </div>
                    
                    </Link>

                </div>

                <p className='pl-2 text-[12px] text-gray-500 mb-4 max-laptop:hidden'>Socials</p>

                {/* Social Media */}

                <div className='flex flex-col gap-0.5 max-laptop:gap-1'>

                    <Link href={'https://www.linkedin.com/in/lesliedsilva74/'} target="_blank" rel="noopener noreferrer">
                        
                        <div className='flex justify-between items-center px-[12px] py-[6px] hover:bg-[#efeeee] dark:hover:bg-[#474747] text-[#60646c] dark:text-[#ffffff99] hover:text-black transition-all duration-450 rounded-lg cursor-pointer group dark:hover:text-white max-laptop:py-[12px] max-laptop:rounded-xl laptop:pl-2.5'>
                            
                            <div className='flex gap-4 items-center'>

                                <Image
                                    src={lightLinkedin}
                                    width={32}
                                    height={32}
                                    alt='instagram-logo'
                                    className='dark:hidden block'
                                />

                                <Image
                                    src={darkLinkedin}
                                    width={28}
                                    height={28}
                                    alt='instagram-logo'
                                    className='hidden dark:block'
                                />

                                <p className='text-[16px] font-medium text-inherit max-laptop:hidden'>LinkedIn</p>
                            
                            </div>
                            
                            <ArrowUpRight className='hidden group-hover:block text-inherit max-laptop:hidden max-laptop:group-hover:hidden'/>
                        
                        </div>
                    
                    </Link>

                    <Link href={'https://github.com/Leslie747401/'} target="_blank" rel="noopener noreferrer">
                        
                        <div className='flex items-center justify-between px-[12px] py-[6px] hover:bg-[#efeeee] dark:hover:bg-[#474747] text-[#60646c] dark:text-[#ffffff99] hover:text-black transition-all duration-450 rounded-lg cursor-pointer group dark:hover:text-white max-laptop:py-[12px] max-laptop:rounded-xl laptop:pl-2.5'>
                            
                            <div className='flex gap-4 items-center'>

                                <Image
                                    src={lightGithub}
                                    width={28}
                                    height={28}
                                    alt='instagram-logo'
                                    className='block dark:hidden'
                                />

                                <Image
                                    src={darkGithub}
                                    width={28}
                                    height={28}
                                    alt='instagram-logo'
                                    className='hidden dark:block'
                                />

                                <p className='text-[16px] font-medium text-inherit max-laptop:hidden'>Github</p>
                            
                            </div>
                            
                            <ArrowUpRight className='hidden group-hover:block text-inherit max-laptop:hidden max-laptop:group-hover:hidden'/>
                        
                        </div>
                    
                    </Link>

                    <Link href={'https://www.instagram.com/lesliedsilva7744/'} target="_blank" rel="noopener noreferrer">
                        
                        <div className='flex items-center justify-between px-[12px] py-[6px] hover:bg-[#efeeee] dark:hover:bg-[#474747] text-[#60646c] dark:text-[#ffffff99] hover:text-black transition-all duration-450 rounded-lg cursor-pointer group dark:hover:text-white max-laptop:py-[12px] max-laptop:rounded-xl laptop:pl-2.5'>
                            
                            <div className='flex gap-4 items-center'>

                                <Image
                                    src={lightInstagram}
                                    width={28}
                                    height={28}
                                    alt='instagram-logo'
                                    className='block dark:hidden'
                                />

                                <Image
                                    src={darkInstagram}
                                    width={28}
                                    height={28}
                                    alt='instagram-logo'
                                    className='hidden dark:block'
                                />

                                <p className='text-[16px] font-medium text-inherit max-laptop:hidden'>Instagram</p>
                            
                            </div>
                            
                            <ArrowUpRight className='hidden group-hover:block text-inherit max-laptop::hidden max-laptop:group-hover:hidden'/>
                        
                        </div>
                    
                    </Link>

                </div>

            </div>

            {/* Switch Theme */}

            <SwitchTheme/>

        </div>
    )
}
