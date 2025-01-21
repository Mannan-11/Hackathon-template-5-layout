import Images from "next/image"


export default function BigCompany() {

    return (
        <div className="flex flex-col w-[1535px] h-[479px] bg-[#FAFAFA]">
            <div className="flex flex-col w-[1050px] h-[479px] mx-[242.5px] gap-6 py-[80px]">
                <div className="flex flex-col w-[864px] h-[120px] mx-[93px] gap-[30px]">
                    <h1 className="w-[496px] h-[50px] mx-[184px] text-center text-[40px] text-[#252B42] leading-[50px] tracking-[0.2px]">Big Companies Are Here</h1>
                    <p className="w-[496px] h-[50px] mx-[184px] text-center text-[14px] text-[#737373] leading-[20px] tracking-[0.2px]">Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>
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

    )


}