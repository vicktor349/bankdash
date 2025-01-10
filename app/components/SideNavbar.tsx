import Image from 'next/image';
import React from 'react'
import { BsFillCreditCardFill, BsFillPiggyBankFill, BsTools } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { GoHomeFill } from 'react-icons/go';
import { GrTransaction } from 'react-icons/gr';
import { IoSettings } from 'react-icons/io5';
import { PiLightbulbFill } from 'react-icons/pi';

interface SideNavbarProps {
    activeComponent: string,
    setActiveComponent: (component: string) => void
}

const SideNavbar = ({ activeComponent, setActiveComponent }: SideNavbarProps) => {
    const menuItems = [
        { location: "Dashboard", icon: <GoHomeFill size={24} />, name: "Dashboard" },
        { location: "Transactions", icon: <GrTransaction size={24} />, name: "Transactions" },
        { location: "Accounts", icon: <FaUser size={24} />, name: "Accounts" },
        { location: "Investments", icon: <BsFillPiggyBankFill size={24} />, name: "Investments" },
        { location: "Credit Cards", icon: <BsFillCreditCardFill size={24} />, name: "Credit Cards" },
        { location: "Loans", icon: <FaHandHoldingDollar size={24} />, name: "Loans" },
        { location: "Services", icon: <BsTools size={24} />, name: "Services" },
        { location: "My Privileges", icon: <PiLightbulbFill size={24} />, name: "My Privileges" },
        { location: "Setting", icon: <IoSettings size={24} />, name: "Setting" },
    ];
    return (
        <div className='bg-white flex justify-center border-r-2 border-[#E6EFF5]'>
            <ul className='space-y-2'>
                <div className='flex items-center space-x-4 pl-[27px] pt-10 pb-8 xl:pl-8'>
                    <Image className='w-[36px] h-[36px]' src={"/Images/logo.png"} alt='Imgae for bankdash' height={500} width={500} />
                    <p className='text-[20px] xl:text-[25px] font-extrabold text-logoColor'>BankDash</p>
                </div>
                {menuItems.map((item) => (
                    <li
                        key={item.location}
                        onClick={() => setActiveComponent(item.location)}
                        className={`flex items-center select-none pl-5 font-semibold space-x-4 hover:cursor-pointer lg:w-48 xl:w-56 2xl:w-64 py-5 text-[#666] hover:rounded-md text-sm 
                            ${activeComponent === item.location ? 'text-primary rounded-md duration-300 ease-in' : 'hover:text-primary'}`}>
                        <p className={`${activeComponent === item.location ? 'absolute rounded-tr-md rounded-br-md w-[6px] bg-primary h-[60px] -ml-5' : ''}`}></p>
                        <p className={`ml-5 ${activeComponent === item.location ? 'text-primary rounded-md duration-300 ease-in' : ''}`}>{item.icon}</p>
                        <p className={`${activeComponent === item.location ? 'text-primary rounded-md duration-300 ease-in' : ''}`}>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SideNavbar