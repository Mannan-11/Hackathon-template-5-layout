import Image from "next/image"
import Link from "next/link";
import { ArrowRight } from 'lucide-react';



export default function Herosection5() {

    return (
        <div className="flex flex-col w-[1535px] h-[882px] bg-white">
            <div className="flex w-[1322px] h-[91px] ml-[106.5px] pt-[16.5px] gap-7">
                <div className="flex w-[187px] h-[58px] ml-[136px] gap-[40px]">
                    <h1 className="flex w-[187px] h-[58px] my-3 text-[#252B42] font-bold text-[24px] leading-[32px] tracking-[0.1]">Bandage</h1>
                </div>
                <div className="flex w-[815px] h-[58px] ml-[41px] gap-36">
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
                        <h1 className="w-[58px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Contact</h1>
                    </div>
                    <div className="flex w-[300px] h-[52px] ml-[95px]">
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
            <div className="relative w-full h-auto">
                <h1 className=" absolute"><Image src="/CU1D.png" alt="img" width={1440} height={882}/></h1>
                <div className="absolute w-[378px] mt-[112px] ms-[195px] h-auto">
                    <h1 className="Phone ; +451 215 215 ">Contact us</h1>
                    <h1 className="font-bold text-[#252B42] text-[58px] mt-[35px]">Get in touch today!</h1>
                    <h1 className="text-[20px] text-[#737373] mt-[35px]">We know how large objects will act, but things on a small scale</h1>
                    <h1 className="font-bold text-[#252B42] text-[24px] mt-[35px]">Phone ; +451 215 215 </h1>
                    <h1 className="font-bold text-[#252B42] text-[24px] mt-[20px]">Fax : +451 215 215</h1>
                    <h1 className="mt-[35px]"><Image src="/sm2.png" alt="img" width={242} height={50}/></h1>
                </div>
            </div>
        </div>

    )

}