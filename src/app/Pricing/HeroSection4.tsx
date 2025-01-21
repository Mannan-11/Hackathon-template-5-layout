
import Image  from "next/image";
import { Switch } from "@/components/ui/switch"
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { ChevronRight } from 'lucide-react';



export default function HeroSection4() {

    return (
        <div className="flex flex-col w-[1535px] h-[1162px] bg-[#FAFAFA]">
            <div className="flex flex-col w-[1050px] h-[1600px] py-[112px] gap-12 mx-[242.5px]">
                <div className="flex w-[1050px] h-[91px] pt-[16.5px] gap-7 bg-white">
                    <div className="flex w-[187px] h-[58px] gap-[40px]">
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
                            <Link href="/Contact" className="hover:text-gray-900">
                            <h1 className="w-[58px] h-6 text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Contact</h1>
                            </Link>
                        </div>
                        <div className="flex w-[300px] h-[52px] ml-[72px] my-[3px]">
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
                <div className="flex flex-col  w-[1050px] h-[280px] px-[90px] bg-white">
                    <div className="flex flex-col w-[870px] h-[280px] bg-white py-[50px] gap-4 text-center">
                        <h1 className="flex w-[71px] h-[24px] text-[16px] mx-[399.5px] text-[#737373] leading-[24px] tracking-[0.1px]">PRICING</h1>
                        <h2 className="flex w-[427px] h-[80px] text-[58px] mx-[221.5px] text-[#737373] leading-[80px] tracking-[0.2px]">Simple Pricing</h2>
                        <div className="flex w-[134px] h-[44px] mx-[368px] gap-[15px] py-[10px]">
                            <p className="flex w-[43px] h-[24px] text-[14px] font-bold text-[#252B42] leading-[24px] tracking-[0.2px]">Home</p>
                            <p className="flex w-[9px] h-[16px] text-[#BDBDBD]"><ChevronRight /></p>
                            <p className="flex w-[52px] h-[24px] text-[14px] font-bold text-[#737373] leading-[24px] tracking-[0.2px]">Pricing</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[633px] h-[100px] mx-[212.5px] gap-[10px]">
                    <h1 className="flex w-[144px] h-[50px] text-[40px] font-bold text-[#252B42] leading-[50px] mx-[240.5px] tracking-[0.2px]">pricing</h1>
                    <p className="flex w-[469px] h-[40px] text-[14px] mx-[78px] text-center font-bold text-[#737373] leading-[20px] tracking-[0.2px]">Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="flex w-[311px] h-[44px] mx-[369.5px] gap-[16px]">
                    <div className="flex w-[186px] h-[28px] gap-[16px] my-[8px] text-center">
                        <p className="flex w-[68px] h-[24px] text-[16px] font-bold text-[#252B42] leading-[24px] tracking-[0.1px]">Monthly</p>
                        <Switch />
                        <p className="flex w-[51px] h-[24px] text-[16px] font-bold text-[#252B42] -ml-3 leading-[24px] tracking-[0.1px]">Yearly</p>
                    </div>
                    <div className="flex w-[109px] h-[44px] text-[13px] rounded-[37px] font-bold text-[#23A6F0] bg-[#B2E3FF] px-[20px] py-[10px] leading-[24px] tracking-[0.2px]">Save 25%
                    </div>
                </div>
                <div className="w-[958px] h-[704px] flex flex-row self-center mt-[48px]">
                    <div className="text-center flex flex-col w-[327px] mt-[40px] h-[664px] bg-white rounded-lg border border-[#23A6F0]">
                        <h1 className="font-bold text-2xl text-[#252B42] mt-[50px]">FREE</h1>
                        <h1 className="font-bold text-[16px] mt-[35px] w-[160px] self-center text-[#737373]">Organize across all apps by hand</h1>
                        <div className="self-center flex flex-row mt-[38px]">
                            <h1 className="text-[#23A6F0] text-[40px] font-bold">0</h1>
                            <div className="flex flex-col ms-[10px]">
                                <h1 className="font-bold text-[#23A6F0] -ml-14 text-2xl">$</h1>
                                <h1 className="font-bold text-sm text-[#8EC2F2]">Per Month</h1>
                            </div>
                        </div>
                        <div className="gap-[15px] mt-[35px] self-center flex flex-col w-[274px]">
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark2.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">1GB  Cloud storage</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark2.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] w-[168px] text-left text-[#252B42]">Email and community support</h2>
                            </div>

                        </div>
                        <button className="py-[15px] px-[40px] w-[246px] self-center hover:bg-sky-400 mt-[35px] text-white font-bold text-sm bg-[#23A6F0] rounded">Try for free</button>
                    </div>
                    <div className="text-center flex flex-col w-[327px] bg-[#252B42] h-[664px] rounded-lg border border-[#23A6F0]">
                        <h1 className="font-bold text-2xl text-white mt-[50px]">STANDART</h1>
                        <h1 className="font-bold text-[16px] mt-[35px] w-[160px] self-center text-white">Organize across all apps by hand</h1>
                        <div className="self-center flex flex-row mt-[38px]">
                            <h1 className="text-[#23A6F0] text-[40px] font-bold">9.99</h1>
                            <div className="flex flex-col ms-[10px]">
                                <h1 className="font-bold text-[#23A6F0] -ml-14 text-2xl">$</h1>
                                <h1 className="font-bold text-sm text-[#8EC2F2]">Per Month</h1>
                            </div>
                        </div>
                        <div className="gap-[15px] mt-[35px] self-center flex flex-col w-[274px]">
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-white">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-white">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-white">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark2.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-white">1GB  Cloud storage</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark2.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] w-[168px] text-left text-white">Email and community support</h2>
                            </div>

                        </div>
                        <button className="py-[15px] px-[40px] w-[246px] self-center hover:bg-sky-400 mt-[35px] text-white font-bold text-sm bg-[#23A6F0] rounded">Try for free</button>
                    </div>
                    <div className="text-center flex flex-col w-[327px] h-[664px] mt-[40px] bg-white rounded-lg border border-[#23A6F0]">
                        <h1 className="font-bold text-2xl text-[#252B42] mt-[50px]">PREMIUM</h1>
                        <h1 className="font-bold text-[16px] mt-[35px] w-[160px] self-center text-[#737373]">Organize across all apps by hand</h1>
                        <div className="self-center flex flex-row mt-[38px]">
                            <h1 className="text-[#23A6F0] text-[40px] font-bold">19.99</h1>
                            <div className="flex flex-col ms-[10px]">
                                <h1 className="font-bold text-[#23A6F0] -ml-14 text-2xl">$</h1>
                                <h1 className="font-bold text-sm text-[#8EC2F2]">Per Month</h1>
                            </div>
                        </div>
                        <div className="gap-[15px] mt-[35px] self-center flex flex-col w-[274px]">
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark2.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">1GB  Cloud storage</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark2.png" alt="img" width={32} height={32} /></h1>
                                <h2 className="font-bold text-sm ms-[10px] w-[168px] text-left text-[#252B42]">Email and community support</h2>
                            </div>
                        </div>
                        <button className="py-[15px] px-[40px] w-[246px] self-center hover:bg-sky-400 mt-[35px] text-white font-bold text-sm bg-[#23A6F0] rounded">Try for free</button>
                    </div>
                </div>
               
            </div>
        </div>

    )
}

