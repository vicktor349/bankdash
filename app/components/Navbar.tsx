import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { IoSettings } from 'react-icons/io5'
import { LuBellDot } from 'react-icons/lu'
import { Inter } from 'next/font/google'
import { RiCloseFill } from 'react-icons/ri'

interface NavbarProps {
    title: string
}

const inter = Inter({ subsets: ['latin'] })

const Navbar = ({ title }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const mobileRef = useRef<HTMLDivElement | null>(null)
    const toggleButtonRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                mobileRef.current &&
                !mobileRef.current.contains(e.target as Node) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className={`bg-white w-full px-3 sssm:px-6 sm:px-10 lg:border-b-2 py-6 xl:py-[33px] shadow-lg lg:shadow-none ${inter.className}`}>
            <div className=' flex items-center justify-between border-[#E6EFF5]'>
                <div className="relative lg:hidden w-6 h-6 overflow-hidden hover:cursor-pointer" onClick={toggleMenu} ref={toggleButtonRef}>
                    <div className={`absolute inset-0 transition-transform duration-300 ${isOpen ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}>
                        <BiMenuAltLeft size={24} className="w-full h-full" />
                    </div>
                    <div className={`absolute inset-0 transition-transform duration-300 ${isOpen ? 'rotate-0 scale-100' : '-rotate-180 scale-0'}`}>
                        <RiCloseFill className="w-full h-full" />
                    </div>
                </div>
                <div className='text-logoColor text-2xl font-semibold'>
                    {title}
                </div>
                <div className='flex items-center lg:space-x-[30px]'>
                    <div className='bg-inputBackground rounded-full hidden lg:flex items-center py-[16px]'>
                        <BsSearch className='ml-[25px] mr-4' size={20} color='#8BA3CB' />
                        <input type='text' className='outline-none bg-transparent pr-[43px] placeholder:text-inputColor'
                            placeholder='Search for something'
                        />
                    </div>
                    <div className='bg-inputBackground rounded-full hidden lg:flex justify-center items-center p-[13px]'>
                        <IoSettings size={24} color='#8BA3CB' />
                    </div>
                    <div className='bg-inputBackground rounded-full hidden lg:flex justify-center items-center p-[13px]'>
                        <LuBellDot size={24} color='red' />
                    </div>
                    <div className='flex justify-center items-center h-10 w-10'>
                        <Image src={"/Images/avatar.png"} alt='Image of profile owner' width={1500} height={1500} className='h-full w-full rounded-full' />
                    </div>
                </div>
            </div>
            <div className='mt-5 block lg:hidden'>
                <div className='bg-inputBackground rounded-full flex items-center py-[16px]'>
                    <BsSearch className='ml-[25px] mr-4' size={20} color='#8BA3CB' />
                    <input type='text' className='outline-none bg-transparent pr-[43px] placeholder:text-inputColor text-[#8BA3CB]'
                        placeholder='Search for something'
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar