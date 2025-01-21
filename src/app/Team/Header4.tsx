import Images from "next/image"
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { ChevronRight } from 'lucide-react';



export default function Header4() {

    return (
        <div className="flex flex-col w-[1535px] h-[385px]">
            <div className="flex w-[1322px] mx-[106.5px] h-[91px]">
                <h1 className="flex w-[187px] h-[58px] mt-[17px] py-[13px] mx-[136px] text-[#252B42] font-bold text-[24px] leading-[32px] tracking-[0.1]">Bandage</h1>
                <div className="flex w-[815px] h-[58px] -ml-[61px] mt-[17px]">
                    <div className="flex w-[275px] h-[24px] gap-[21px] my-[16.75px]">
                        <Link href="/" className="hover:text-gray-900">
                        <h1 className="w-[43px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Home</h1>
                        </Link>
                        <Link href="/Team">
                        <h1 className="w-[59px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Team</h1>
                        </Link>
                        <Link href="/Pricing" className="hover:text-gray-900">
                        <h1 className="w-[52px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Pricing</h1>
                        </Link>
                        <Link href="/Contact" className="hover:text-gray-900">
                        <h1 className="w-[58px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Contact</h1>
                        </Link>
                    </div>
                    <div className="flex w-[300px] h-[52px] ml-[240px] my-[3px]">
                        <div className="flex w-[86px] h-[52px] py-[14px]">

                            <p className="flex w-[119px] h-[22px] text-[#23A6F0] font-bold text-[14px] leading-[24px] tracking-[0.2px]">Login</p>
                        </div>
                        <button className="flex w-[214px] h-[52px] px-[25px] py-[15px] gap-[15px] bg-[#23A6F0] rounded-[5px]">
                            <p className="flex w-[143px] h-[22px] text-white text-[14px] leading-[22px] tracking-[0.2px]">Become a member</p>
                            <p className="flex w-[12px] h-[10px] text-white"><ArrowRight /></p>
                        </button>
                    </div>
                </div>

            </div>
            <div className="flex flex-col w-[870px] mx-[332.5px] h-[280px] mt-[13px] py-[50px] px-[28px] gap-[16px]">
                <h1 className="flex flex-col w-[111px] mx-[338.5px] h-[24px] text-[#737373] font-bold text-[16px] leading-[24px] tracking-[0.1px]">WHAT WE DO</h1>
                <h1 className="flex flex-col w-[814px] h-[80px] text-[#252B42] px-[30px] font-bold text-[58px] leading-[80px] tracking-[0.2px]">Innovation tailored for you</h1>
                <div className="flex w-[122px] h-[44px] mx-[346px] gap-[15px] py-[10px]">
                    <p className="flex w-[43px] h-[24px] text-[14px] font-bold text-[#252B42] leading-[24px] tracking-[0.2px]">Home</p>
                    <p className="flex w-[9px] h-[16px] text-[#BDBDBD]"><ChevronRight /></p>
                    <p className="flex w-[40px] h-[24px] text-[14px] font-bold text-[#737373] leading-[24px] tracking-[0.2px]">Team</p>
                </div>
            </div>
            <div className="flex w-[1535px] h-[530px] gap-[9px]">
                <div className="w-[731.6px] h-[530px]">
                    <Images src="/D1.png" alt="Display Women 1" width={731.6} height={530} className="w-[731.6px] h-[530px]" />
                </div >
                <div className="flex flex-col w-[392.6px] h-[510px] gap-[10px]">
                    <Images src="/D2.png" alt="Display Women 2" width={392.6} height={260} className="w-[392.6px] h-[260px]" />
                    <Images src="/D4.png" alt="Display Women 4" width={392.6} height={260} className="w-[731.6px] h-[260px]"/>
                </div>
                <div className="flex flex-col w-[392.6px] h-[510px] gap-[10px]">
                    <Images src="/D3.png" alt="Display Women 2" width={392.6} height={260} className="w-[731.6px] h-[260px]" />
                    <Images src="/D5.png" alt="Display Women 4" width={392.6} height={260} className="w-[731.6px] h-[260px]"/>
                </div>

            </div>
        </div>


    )
}