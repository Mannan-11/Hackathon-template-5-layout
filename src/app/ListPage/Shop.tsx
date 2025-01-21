import Images from "next/image"
import { ChevronRight } from 'lucide-react';
import { LayoutGrid } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { ListChecks } from 'lucide-react';


export default function Shop() {

    return (
        <main>
            <div className="flex w-[1535px] h-[92px] bg-[#FAFAFA]">
                <div className="flex w-[1049px] h-[44px] mx-[243px] my-5 gap-[30px]">
                    <p className="flex w-[510px] h-[32px] my-[5px] text-[#252B42] font-bold text-[24px] leading-[32px] tracking-[0.1px]">Shop</p>
                    <div className="flex w-[509px] h-[44px]">
                        <div className="flex w-[119px] h-[44px] ml-[390px] py-[10px] gap-[15px]">
                            <p className="flex w-[43px] h-[24px] text-[#252B42] font-bold text-[14px] leading-[24px] tracking-[0.2px]">Home</p>
                            <p className="flex w-[9px] h-[16px] text-[#BDBDBD] text-[36px] my-0.5 "><ChevronRight /></p>
                            <p className="flex w-[37px] h-[24px] text-[#BDBDBD] font-bold text-[14px] leading-[24px] tracking-[0.2px]">Shop</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-[1535px] h-[271px] bg-[#FAFAFA]">
                <div className="flex w-[1077px] h-[271px] pb-12 mx-[229px]">
                    <div className="flex w-[1088px] h-[223px] gap-[15px]">
                        <Images src="/SL1.png" alt="SL1 Image" width={205} height={223} />
                        <Images src="/SL2.png" alt="SL1 Image" width={205} height={223} />
                        <Images src="/SL3.png" alt="SL1 Image" width={206} height={223} />
                        <Images src="/SL4.png" alt="SL1 Image" width={206} height={223} />
                        <Images src="/SL5.png" alt="SL1 Image" width={206} height={223} />
                    </div>
                </div>
            </div>
            <div className="flex w-[1535px] h-[98px]">
                <div className="flex w-[1050px] h-[98px] mx-[242.5px] py-6 gap-[80px]">
                    <div className="flex w-[1049px] h-[50px] gap-[226px]">
                        <p className="flex w-[168px] h-[24px] my-[13px] text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Showing all 12 results</p>
                        <div className="flex w-[177px] h-[46px] my-[2px] gap-[15px]">
                            <p className="flex w-[53px] h-[24px] my-[11px] text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Views :</p>
                            <p className="flex border-[1px] rounded-[5px] w-[46px] h-[46px] py-2.5 px-2.5"><LayoutGrid /></p>
                            <p className="flex border rounded-[5px] w-[46px] h-[46px] text-[#737373] py-2.5 px-2"><ListChecks /></p>
                        </div>
                        <div className="flex w-[252px] h-[50px] gap-[15px]">
                            <p className="flex border w-[141px] h-[50px] py-2.5 px-6 text-[#737373] bg-[#F9F9F9] rounded-[5px] text-[14px] leading-[28px] tracking-[0.2px]">Popularity   <ChevronDown /></p>
                            <button className="flex border w-[94px] h-[50px] py-2.5 px-6 text-white bg-[#23A6F0] rounded-[5px] text-[14px] leading-[28px] tracking-[0.2px]">Filter</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-[1535px] h-[175px] bg-[#FAFAFA]">
                <div className="flex w-[1050px] h-[175px] mx-[242.5px] gap-[30px] py-[50px]">
                    <div className="flex w-[153px] h-[34px] my-[20.5px]">
                        <Images src="/B1.png" alt="Hooli" width={153} height={34} />
                    </div>
                    <div className="flex w-[146px] h-[59px] my-[8px] px-7">
                        <Images src="/B2.png" alt="Lyft" width={83} height={59} />
                    </div>
                    <div className="flex w-[152px] h-[75px] px-[25px]">
                        <Images src="/B3.png" alt="Cap" width={102} height={75} />
                    </div>
                    <div className="flex w-[151px] h-[42px] my-[16.5px] px-6">
                        <Images src="/B4.png" alt="Stripe" width={103} height={42} />
                    </div>
                    <div className="flex w-[151px] h-[62px] my-[6.5px] px-6">
                        <Images src="/B5.png" alt="aws" width={104} height={62} />
                    </div>
                    <div className="flex w-[151px] h-[72px] my-[1.5px] px-8">
                        <Images src="/B6.png" alt="Flick" width={76} height={72} />
                    </div>

                </div>

            </div>
        </main>
    )
}