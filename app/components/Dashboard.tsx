import React from 'react'
import Navbar from './Navbar';
import Cards from './Cards';
import { Inter } from 'next/font/google';
import RecentTransaction from './RecentTransaction';

interface DashboardProps {
    handleSetActiveComponent: (component: string) => void;
}

const inter = Inter({ subsets: ['latin'] })

const Dashboard = ({ handleSetActiveComponent }: DashboardProps) => {
    return (
        <div>
            <Navbar title='Overview' />
            <div className='px-10'>
                <div className="grid 2xl:grid-cols-3 gap-8">
                    {/* Left Section */}
                    <div className="col-span-2 w-fit">
                        <div className={`flex items-center justify-between my-6 ${inter.className}`}>
                            <p className="text-[#343C6A] text-[18px] font-semibold">My Cards</p>
                            <p className="text-[#343C6A] text-[16px] font-semibold hover:underline hover:cursor-pointer">See All</p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-8">
                            <Cards
                                className="text-white bg-cardBackground"
                                classHolderStyle="text-cardText"
                                validMonth={12}
                                validYear={22}
                                cardNumber="3778 **** **** 1234"
                                balance="5,756"
                                holdersName="Eddy Cusuma"
                                imageSrc="/Images/chip.png"
                                cardStyling="border-t-2 border-primary -mx-6"
                                masterCardImage="/Images/mastercard.svg"
                            />
                            <Cards
                                className="text-black bg-white border-2 border-primaryBorder"
                                classHolderStyle="text-[#718EBF]"
                                validMonth={12}
                                validYear={22}
                                cardNumber="3778 **** **** 1234"
                                balance="5,756"
                                holdersName="Eddy Cusuma"
                                imageSrc="/Images/Chip_Card.png"
                                cardStyling="border-t-2 border-primaryBorder -mx-6"
                                masterCardImage="/Images/mastercard_2.svg"
                                balanceClass="text-[#718EBF]"
                            />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className='2xl:ml-auto'>
                        <p className={`text-[#343C6A] text-[18px] font-semibold my-6 ${inter.className}`}>Recent Transactions</p>
                        <RecentTransaction />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard