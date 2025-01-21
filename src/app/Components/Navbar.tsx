import Link from "next/link";
import { ChevronDown } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';

export default function Navbar() {

    return (

        <div className="flex w-full sm:h-[532px] lg:h-[58px] my-2">
            <div className="flex w-[187px] h-[58px] gap-[40px] mx-[38px]">
                <h1 className="flex w-[108px] h-8 my-3 text-[#252B42] font-bold text-[24px] leading-[32px] tracking-[0.1]">Bandage</h1>
            </div>
            <div className="lg:flex sm:flex-col w-[1155px] h-[58px] gap-[530px]">
                <div className="flex w-[361px] h-[24.5px] gap-[15px] my-[16.75px]">
                    <Link href="/">
                        <h1 className="w-[43px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Home</h1>
                    </Link>
                    <Link href="/Products1" className="flex hover:text-gray-900">
                        <h1 className="flex w-[63px] h-[25px] text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Shop <ChevronDown /></h1>
                    </Link>
                    <Link href="/About" className="hover:text-gray-900">
                        <h1 className="w-[45px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]"> About</h1>
                    </Link>
                    <h1 className="w-[33px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Blog</h1>
                    <Link href="/Contact" className="hover:text-gray-900">
                        <h1 className="w-[58px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Contact</h1>
                    </Link>
                    <Link href="/ListPage" className="hover:text-gray-900">
                        <h1 className="w-[44px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Pages</h1>
                    </Link>
                </div>
                <div className="flex w-[324px] h-[54px]">
                    <div className="flex w-[166px] h-[54px] px-[15px] py-[15px]">
                        <p className="flex w-3 h-3 text-[#23A6F0]"><UserRound /></p>
                        <p className="flex w-[119px] h-6 text-[#23A6F0] text-[14px] leading-[24px] tracking-[0.2px]">Login / Register</p>
                    </div>
                    <div className="flex w-[46px] h-[46px] my-1">
                        <p className="w-4 h-4 text-[#23A6F0] my-[10px] mx-[10px]"><Search /></p>
                    </div>
                    <div className="flex w-[56px] h-[46px] my-1 gap-[5px] px-[15px] py-[15px]">
                        <div className="w-4 h-4 text-[#23A6F0] -mx-1 -my-[3px]"><ShoppingCart /></div>
                        <p className="w-[5px] h-4 text-[12px] leading-[16px] tracking-[0.2px] text-[#23A6F0] mx-2.5">1</p>
                    </div>
                    <div className="flex w-[56px] h-[46px] my-1 gap-[5px] px-[15px] py-[15px]">
                        <p className="w-4 h-4 text-[#23A6F0] -mx-1 -my-[3px]"><Heart /></p>
                        <p className="w-[5px] h-4 text-[12px] leading-[16px] tracking-[0.2px] text-[#23A6F0] mx-2.5">1</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

