import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';

export default function Trial2() {

    return (
            <div className="w-[1535px] h-[582px]">
                <div className="w-[1050px] h-[602px] mx-[242.5px] gap-[95px] py-[160px]">
                    <div className="flex flex-col w-[607px] h-[282px] mx-[221.5px] px-[30px] gap-[30px]">
                        <h1 className="w-[547px] h-[50px] text-[#252B42] font-bold text-[40px] leading-[50px] tracking-[0.2px]">Start your 14 days free trial</h1>
                        <p className="w-[411px] h-[40px] text-[#737373] text-[14px] mx-[68px] leading-[20px] text-center tracking-[0.2px]">Met minim Mollie non desert Alamo est sit cliquey dolor 
                        do met sent. RELIT official consequent.</p>
                        <button className="w-[186px] h-[52px] rounded-[5px] mx-[180.5px] text-white bg-[#23A6F0] text-[14px] leading-[22px] tracking-[0.2px]">Try it free now</button>
                        <div className="flex w-[242px] h-[50px] mx-[152.5px] px-[10px] py-[10px] gap-[34px]">
                            <h1 className="w-[30px] h-[24.5px] text-[#55ACEE]"><Twitter /></h1>
                            <h1 className="w-[30px] h-[30px] bg-[#395185] text-white px-[5px] py-[3px]"><Facebook /></h1>
                            <h1 className="w-[30px] h-[30px] text-[#000000]"><Instagram /></h1>
                            <h1 className="w-[30px] h-[30px] bg-[#0A66C2] text-white px-[3px] py-[3px]"><Linkedin /></h1>
                        </div>
                    </div>
                </div>
            </div>
    )
}
