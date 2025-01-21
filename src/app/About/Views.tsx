import Images from "next/image"

export default function Views() {

    return (
        <main>
            <div className="flex w-[1535px] h-[236px] py-6">
                <div className="flex w-[1018px] h-[188px] mx-[258.5px] gap-[60px]">
                    <div className="flex flex-col w-[394px] h-[188px] gap-[24px] py-6 ml-[17.5px]">
                        <p className="flex w-[116px] h-[20px] text-[14px] text-[#E74040] leading-[20px] tracking-[0.2px]">Problems trying</p>
                        <p className="flex w-[394px] h-[96px] font-bold text-[24px] text-[#252B42] leading-[32px] tracking-[0.1px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
                    </div>
                    <p className="flex w-[545px] h-[40px] text-[14px] text-[#737373] leading-[20px] tracking-[0.2px] my-[74px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>

            </div>
            <div className="flex w-[1535px] h-[264px]">
                <div className="flex w-[1050px] h-[264px] mx-[242.5px] gap-[50px] py-[80px]">
                    <div className="flex w-[1049px] h-[104px] gap-[30px]">
                        <div className="flex flex-col w-[238px] h-[104px]">
                            <p className="flex w-[100px] h-[80px] mx-[69px] font-bold text-[58px] text-[#252B42] leading-[80px] tracking-[0.2px]">15K</p>
                            <p className="flex w-[146px] h-[24px] mx-[46px] font-bold text-[16px] text-[#737373] leading-[24px] tracking-[0.1px]">Happy Customers</p>
                        </div>
                        <div className="flex flex-col w-[238px] h-[104px]">
                            <p className="flex w-[140px] h-[80px] mx-[50px] font-bold text-[58px] text-[#252B42] leading-[80px] tracking-[0.2px]">150K</p>
                            <p className="flex w-[134px] h-[24px] mx-[53.5px] font-bold text-[16px] text-[#737373] leading-[24px] tracking-[0.1px]">Monthly Visitors</p>
                        </div>
                        <div className="flex flex-col w-[238px] h-[104px]">
                            <p className="flex w-[59px] h-[80px] mx-[90.5px] font-bold text-[58px] text-[#252B42] leading-[80px] tracking-[0.2px]">15</p>
                            <p className="flex w-[177px] h-[24px] mx-[31.5px] font-bold text-[16px] text-[#737373] leading-[24px] tracking-[0.1px]">Countries  Worldwide</p>
                        </div>
                        <div className="flex flex-col w-[238px] h-[104px]">
                            <p className="flex w-[138px] h-[80px] mx-[51px] font-bold text-[58px] text-[#252B42] leading-[80px] tracking-[0.2px]">100+</p>
                            <p className="flex w-[104px] h-[24px] mx-[68px] font-bold text-[16px] text-[#737373] leading-[24px] tracking-[0.1px]">Top Partners</p>
                        </div>

                    </div>

                </div>

            </div>
            <div className="border w-[1535px] h-[764px]">
                <Images src="/Video-card.png" alt="Video Image" width={989} height={540} className="border w-[989px] h-[540px] mx-[273px] my-[112px]"/>
            </div>
        </main>
    )

}