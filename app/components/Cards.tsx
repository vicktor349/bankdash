import Image from 'next/image'
import React from 'react'
import { Lato } from 'next/font/google'

interface CardsProps {
    className?: string,
    validMonth: number,
    validYear: number
    cardNumber: string
    balance: string,
    balanceClassName?: string,
    holdersName: string,
    classHolderStyle?: string,
    imageSrc: string,
    cardStyling?: string,
    masterCardImage: string
    balanceClass?: string
}

const lato = Lato({ subsets: ['latin-ext'], weight: ['400', '900'] })

const Cards = (
    {
        className,
        validMonth,
        validYear,
        cardNumber,
        balance,
        balanceClassName,
        holdersName,
        classHolderStyle,
        imageSrc,
        cardStyling,
        masterCardImage,
        balanceClass
    }: CardsProps
) => {
    return (
        <div className={`${className} ${lato.className}  pt-6 px-6 rounded-3xl w-[450px] h-[270px] 2xl:h-[235px] 2xl:w-[350px] 3xl:w-[450px] 3xl:h-[270px] flex flex-col justify-between relative`}>
            {/* CREDIT CARD BALANCE */}
            <div className='flex items-center justify-between'>
                <div className={`${balanceClassName} text-sm`}>
                    <p className={`${balanceClass} font-normal`}>Balance</p>
                    <p className='text-[20px] pt-2'>${balance}</p>
                </div>
                <div>
                    <Image src={imageSrc} alt='Card chip Image' height={500} width={500} className='w-[36px] h-[36px]' />
                </div>
            </div>
            {/* CARD HOLDER DETAILS & EXPIRY DATE */}
            <div className='flex items-center space-x-16 mt-8 mb-4'>
                <div>
                    <p className={`${classHolderStyle}`}>CARD HOLDER</p>
                    <p>{holdersName}</p>
                </div>
                <div>
                    <p className={`${classHolderStyle}`}>VALID THRU</p>
                    <p>{validMonth}/{validYear}</p>
                </div>
            </div>
            {/* CARD NUMBER */}
            <div className={`relative`}>
                <p className={`${cardStyling} -px-6`}></p>
                <div className='flex items-center justify-between py-4'>
                    <p className='text-[22px]'>{cardNumber}</p>
                    <Image src={masterCardImage} alt="Master card image" width={44} height={30} />
                </div>
            </div>
        </div>
    )
}

export default Cards