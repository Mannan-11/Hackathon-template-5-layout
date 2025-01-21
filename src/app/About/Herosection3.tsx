import Images from "next/image"
import { ArrowRight } from 'lucide-react';
import Link from "next/link";


export default function Herosection3() {

    return (
        <div className="flex flex-col border w-[1535px] h-[729px] bg-[#FAFAFA]">
            <div className="flex w-[1322px] h-[91px] ml-[106.5px] pt-[16.5px] gap-7">
                <div className="flex w-[187px] h-[58px] ml-[136px] gap-[40px]">
                    <h1 className="flex w-[187px] h-[58px] my-3 text-[#252B42] font-bold text-[24px] leading-[32px] tracking-[0.1]">Bandage</h1>
                </div>
                <div className="flex w-[815px] h-[58px] ml-[80px] gap-36">
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
                    <div className="flex w-[300px] h-[52px]">
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
            <div className="flex w-[1535px] h-[638px]">
                <div className="flex flex-col w-[1050px] h-[545px] ml-[242.5px] gap-[80px] mt-[13px] py-[112px]">
                    <div className="flex w-[1044px] h-[321px] gap-[30px]">
                        <div className="flex flex-col w-[599px] h-[321px] gap-[35px]">
                            <h1 className="flex w-[154px] h-[24px] gap-[35px] font-bold text-[#252B42] text-[16px] leading-[24px] tracking-[0.1px]">ABOUT COMPANY</h1>
                            <h1 className="flex w-[542px] h-[80px] gap-[35px] font-bold text-[#252B42] text-[58px] leading-[80px] tracking-[0.2px]">ABOUT US</h1>
                            <p className="flex w-[542px] h-[80px] gap-[35px] text-[#737373] text-[20px] leading-[30px] tracking-[0.2px]">We know how large objects will act, 
                            but things on a small scale</p>
                            <button className="w-[195px] h-[52px] gap-[35px] bg-[#23A6F0] text-white text-[14px] leading-[22px] tracking-[0.2px]">Get Quote Now</button>
                        </div>
                        <div className="flex  w-[415px] h-[280px] my-[20.5px]">
                            <Images src="/HS3B.png" alt="Women with shoping" width={1050} height={668} className="absolute -ml-[681px] -py-[350px] top-[61px] w-[1250px] h-[668px]" />
                        </div>
                    </div>
                </div>            
            </div>
        </div>

    )
    
}