import Images from "next/image"
import Link from "next/link";
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';

export default function Team() {

    return (
        <div className="flex w-[1535px] h-[826px]">
            <div className="flex flex-col w-[1050px] h-[819px] mx-[242.5px] py-[112px] gap-[112px]">
                <div className="flex flex-col w-[607px] h-[100px] mx-[221.5px] gap-[10px]">
                    <h1 className="flex flex-col w-[316px] h-[50px] mx-[145.5px] text-[40px] text-[#252B42] leading-[50px] tracking-[0.2px]">Meet Our Team</h1>
                    <p className="flex flex-col w-[469px] h-[40px] mx-[72px] text-center text-[14px] text-[#737373] leading-[20px] tracking-[0.2px]">Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="flex w-[1034px] h-[383px] mx-2 gap-[30px]">
                    <div className="flex flex-col w-[316px] h-[383px]">
                        <Link href="/Team" className="hover:text-gray-900">
                        <Images src="/T1.png" alt="Team1" width={316} height={231} />
                        </Link>
                        <div className="flex flex-col w-[316px] h-[152px] gap-[10px] px-[30px] py-[30px]">
                            <p className="flex flex-col w-[83px] h-[24px] mx-[86.5px] text-center text-[16px] text-[#252B42] leading-[24px] tracking-[0.1px]">Username</p>
                            <p className="flex flex-col w-[77px] h-[24px] mx-[89.5px] text-center text-[14px] text-[#737373] leading-[24px] tracking-[0.2px]">Profession</p>
                            <div className="flex w-[112px] h-[24px] gap-6 mx-[72px] justify-center">
                                <p className="w-6 h-6 text-[#23A6F0]"><Facebook /></p>
                                <p className="w-6 h-6 text-[#23A6F0]"><Instagram /></p>
                                <p className="w-6 h-6 text-[#23A6F0]"><Twitter /></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[316px] h-[383px]">
                        <Link href="/Team" className="hover:text-gray-900">
                        <Images src="/T2.png" alt="Team1" width={316} height={231} />
                        </Link>
                        <div className="flex flex-col w-[316px] h-[152px] gap-[10px] px-[30px] py-[30px]">
                            <p className="flex flex-col w-[83px] h-[24px] mx-[86.5px] text-center text-[16px] text-[#252B42] leading-[24px] tracking-[0.1px]">Username</p>
                            <p className="flex flex-col w-[77px] h-[24px] mx-[89.5px] text-center text-[14px] text-[#737373] leading-[24px] tracking-[0.2px]">Profession</p>
                            <div className="flex w-[112px] h-[24px] gap-6 mx-[72px] justify-center">
                                <p className="w-6 h-6 text-[#23A6F0]"><Facebook /></p>
                                <p className="w-6 h-6 text-[#23A6F0]"><Instagram /></p>
                                <p className="w-6 h-6 text-[#23A6F0]"><Twitter /></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[316px] h-[383px]">
                        <Link href="/Team" className="hover:text-gray-900">
                        <Images src="/T3.png" alt="Team1" width={316} height={231} />
                        </Link>
                        <div className="flex flex-col w-[316px] h-[152px] gap-[10px] px-[30px] py-[30px]">
                            <p className="flex flex-col w-[83px] h-[24px] mx-[86.5px] text-center text-[16px] text-[#252B42] leading-[24px] tracking-[0.1px]">Username</p>
                            <p className="flex flex-col w-[77px] h-[24px] mx-[89.5px] text-center text-[14px] text-[#737373] leading-[24px] tracking-[0.2px]">Profession</p>
                            <div className="flex w-[112px] h-[24px] gap-6 mx-[72px] justify-center">
                                <p className="w-6 h-6 text-[#23A6F0]"><Facebook /></p>
                                <p className="w-6 h-6 text-[#23A6F0]"><Instagram /></p>
                                <p className="w-6 h-6 text-[#23A6F0]"><Twitter /></p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    )
}