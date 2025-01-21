import Images from "next/image"

export default function WorkWithUs() {

    return (
        <div className="relative flex w-[1535px] h-[636px] bg-[#2A7CC7]">
            <div className="absolute flex w-[945px] h-[412px] py-[112px] my-[112px]">
                <div className="flex flex-col w-[438px] h-[238px] mx-[242.5px] gap-6">
                    <p className="flex w-[128px] h-[24px] font-bold text-[16px] text-white leading-[24px] tracking-[0.1px]">WORK WITH US</p>
                    <h1 className="w-[456px] h-[50px] text-[40px] text-white leading-[50px] tracking-[0.2px]">Now Lets grow Yours</h1>
                    <p className="flex w-[440px] h-[40px] text-[14px] text-white leading-[20px] tracking-[0.2px]">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                    <button className="flex w-[132px] h-[52px] px-[40px] py-[15px] border border-white rounded-[5px] text-[14px] text-white leading-[22px] tracking-[0.2px]">Button</button>
                </div>
            </div>
            <div className="absolute w-[590px] h-[640px] mx-[945px]">
            <Images src="/DP.png" alt="Display Women" width={590} height={640} className="absoulte h-[640px]"/>
            </div>

        </div>
    )
}