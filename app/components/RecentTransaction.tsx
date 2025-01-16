import React from 'react'
import { Inter } from 'next/font/google'
import { LiaCreditCard, LiaPaypal } from 'react-icons/lia'
import { IconType } from 'react-icons'
import { CiDollar } from 'react-icons/ci'

const inter = Inter({ subsets: ['latin'], weight: ['400', '900'] })

interface RecentProps {
    className?: string,
    icon: IconType,
    title: string,
    date: string,
    amount: string,
    color: string
    amountClassName: string,
    transactionSign: string
}

const Recent = (
    { className,
        icon: Icon,
        title,
        date,
        amount,
        color,
        amountClassName,
        transactionSign
    }: RecentProps) => {
    return (
        <div className="flex items-center w-full space-x-6">
            <div className={`${className} rounded-full w-[65px] h-[65px] flex items-center justify-center`}>
                <Icon size={28} color={color} className="w-[28px] h-[28px]" />
            </div>
            <div className="flex-1">
                <p className="text-[#232323] font-[500] truncate">{title}</p>
                <p className="text-placeholderColor truncate">{date}</p>
            </div>
            <div className="text-right">
                <p className={`text-[#232323] font-[500] ${amountClassName}`}>{transactionSign}${amount}</p>
            </div>
        </div>

    )
}


const RecentTransaction = () => {
    return (
        <div className={`${inter.className} bg-white rounded-3xl w-[450px] h-[270px] 2xl:h-[235px] 2xl:w-[350px] 3xl:w-[450px] 3xl:h-[270px] flex flex-col justify-between relative`}>
            <div className='flex flex-col space-y-4 p-[25px]'>
                <Recent className='bg-[#FFF5D9]'
                    icon={LiaCreditCard}
                    title='Deposit from my Card'
                    date='28 January 2021'
                    amount='850'
                    color='#FFBB38'
                    amountClassName='text-red-500'
                    transactionSign='-'
                />
                <Recent className='bg-[#E7EDFF]'
                    icon={LiaPaypal}
                    title='Deposit Paypal'
                    date='25 January 2021'
                    amount='2,500'
                    color='#396AFF'
                    amountClassName='text-green-500'
                    transactionSign='+'
                />
                <Recent className='bg-[#DCFAF8]'
                    icon={CiDollar}
                    title='Jemi Wilson'
                    date='21 January 2021'
                    amount='850'
                    color='#16DBCC'
                    amountClassName='text-red-500'
                    transactionSign='-'
                />
            </div>
        </div>
    )
}

export default RecentTransaction