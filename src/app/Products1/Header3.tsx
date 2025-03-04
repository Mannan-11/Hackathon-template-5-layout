import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';

export default function Header3() {

    return (
        <div className="w-[1535px] h-[58px] font-Montserat bg-[#23856D]">
            <div className="flex w-[1128px] h-[46px] mx-[203.5px]">
                <div className="flex w-[1020px] h-[46px] mx-[50px]">
                    <div className="flex w-[421px] h-[46px] gap-[10px] my-1.5">
                        <div className="flex w-[145px] h-[44px] gap-[5px] px-[10px] py-[10px]">
                            <p className="text-white w-4 h-4 text-[10px]"><Phone /></p>
                            <p className="text-white w-[104px] h-6 text-[13px] leading-[24px] tracking-[0.2px] ms-1 font-bold">(225) 555-0118</p>
                        </div>
                        <div className="flex w-[260px] h-[44px] gap-[5px] px-[10px] py-[10px]">
                            <div className="text-white w-4 h-4"><Mail /></div>
                            <div className="text-white w-[227px] ms-1 h-6 text-[14px] leading-[24px] tracking-[0.2px] font-bold">michelle.rivera@example.com</div>
                        </div>
                    </div>
                    <div className="flex w-[343px] h-[44px] text-white gap-[10px] px-[10px] py-[10px] my-1.5">
                        <p className="w-[323px] h-6 text-[14px] leading-[24px] tracking-[0.2px] font-bold">Follow Us and get a chance to win 80% off</p>
                    </div>
                    <div className="flex w-[233px] h-[46px] px-[10px] py-[10px] gap-[10px] my-1.5">
                        <div className="w-[83px] h-6 text-white text-[14px] leading-[24px] tracking-[0.2px] font-bold">Follow Us :</div>
                        <div className="flex w-[120px] h-[26px] gap-[5px]">
                            <p className="w-[26px] h-[26px] text-white text-lg"><Instagram /></p>
                            <p className="w-[26px] h-[26px] text-white text-lg"><Youtube /></p>
                            <p className="w-[26px] h-[26px] text-white text-lg"><Facebook /></p>
                            <p className="w-[26px] h-[26px] text-white text-lg"><Twitter /></p>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    )
}