import Images from "next/image"
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Eye } from 'lucide-react';

export default function Herosection2() {

    return (
        <div className="flex flex-col border font-Montserat w-[1535px] h-[690px] bg-[#FAFAFA]">
            <div className="flex w-[1535px] h-[92px]">
                <div className="flex w-[1033px] h-[44px] ml-[251px] my-6 gap-[30px]">
                    <div className="flex w-[119px] h-[44px] gap-[15px]">
                        <p className="flex w-[43px] h-[24px] text-[#252B42] my-[10px] font-bold text-[14px] leading-[24px] tracking-[0.2px]">Home</p>
                        <p className="flex w-[9px] h-[16px] text-[#BDBDBD] my-[10px] text-[36px]"><ChevronRight /></p>
                        <p className="flex w-[37px] h-[24px] text-[#BDBDBD] my-[10px] font-bold text-[14px] leading-[24px] tracking-[0.2px]">Shop</p>
                    </div>
                </div>
            </div>
            <div className="flex w-[1535px] h-[598px]">
                <div className="flex w-[1050px] h-[598px] mx-[242.5px] pb-12 gap-[30px]">
                    <div className="flex flex-col w-[506px] h-[546px] gap-[21px]">
                        <div className="relative">
                            <Images src="/P1L.png" alt="Sofa Image" width={506} height={450} className="object-cover" />
                            <span className="absolute top-[258.53px] left-[40px] w-[24px] h-[44.7px] text-white text-center"><ChevronLeft /></span>
                            <span className="absolute top-[258.53px] left-[444px] w-[24px] h-[44.7px] text-white text-center"><ChevronRight /></span>
                        </div>
                        <div className="flex w-[219px] h-[75px] gap-[19px]">
                            <Images src="/P1S.jpg" alt="Small Wooden Chair" width={100} height={75} />
                            <Images src="/P2S.jpg" alt="Small Yellow Sofa" width={100} height={75} />
                        </div>
                    </div>
                    <div className="relative flex flex-col w-[510px] h-[471px] gap-[21px]">
                        <h1 className="absolute flex flex-col w-[170px] h-[30px] ml-6 mt-[11px] text-[#252B42] font-bold text-[20px] leading-[30px] tracking-[0.2px]">Floating Phone</h1>
                        <div className="absolute flex w-[221px] h-[24px] ml-6 mt-[53px] gap-[10px]">
                            <Images src="/stars.png" alt="Reviews" width={130} height={22} />
                            <div className="w-[82px] h-[24px] text-[#737373] font-bold text-[13px] leading-[24px] tracking-[0.2px]">10 Reviews</div>
                        </div>
                        <h2 className="absolute w-[108px] h-[32px] ml-[26px] mt-[97px] text-[#252B42] font-bold text-[24px] leading-[32px] tracking-[0.1px]">$1,139.33</h2>
                        <div className="absolute flex w-[159px] h-[24px] ml-6 mt-[134px] gap-[5px]">
                            <p className="w-{94px] h-[24px] text-[#737373] font-bold text-[14px] leading-[24px] tracking-[0.2px]">Availablity :</p>
                            <p className="w-{60px] h-[24px] text-[#23A6F0] font-bold text-[14px] leading-[24px] tracking-[0.2px]">In Stock</p>
                        </div>
                        <p className="absolute flex w-[464px] h-[60px] ml-6 mt-[190px] text-[#858585] text-[14px] leading-[20px] tracking-[0.2px]">Met minim Mollie non desert Alamo est sit cliquey dolor
                            do met sent. RELIT official consequent door ENIM RELIT Mollie.
                            Excitation venial consequent sent nostrum met.</p>
                        <line className="absolute border-b-[1px] border-[#BDBDBD] w-[445px] ml-[25px] mt-[277px] drop-shadow-md"></line>
                        <Images src="/product-colors-L.png" alt="" width={150} height={30} className="absolute ml-6 mt-[306px]" />
                        <div className="absolute flex w-[298px] h-[44px] ml-6 mt-[403px] gap-[10px]">
                            <button className="flex w-[148px] h-[44px] px-[20px] py-[10px] bg-[#23A6F0] rounded-[5px] text-white text-[14px] leading-[24px] tracking-[0.2px]">Select Options</button>
                            <p className="flex w-[40px] h-[40px] rounded-full bg-[#FFFFFF] text-[#252B42] px-[10px] py-[10px]"><Heart /></p>
                            <p className="flex w-[40px] h-[40px] rounded-full bg-[#FFFFFF] text-[#252B42] px-[10px] py-[10px]"><ShoppingCart /></p>
                            <p className="flex w-[40px] h-[40px] rounded-full bg-[#FFFFFF] text-[#252B42] px-[10px] py-[10px]"><Eye /></p>                            
                        </div>
                    </div>
                </div>


            </div>



        </div>


    )
}