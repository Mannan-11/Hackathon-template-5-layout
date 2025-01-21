import Images from "next/image"


export default function Neuraluniverse() {

    return (

        <div className="flex w-full h-[682px] bg-white gap-[30px]">
            <div className="w-[632px] h-[491.99px] mx-[132px]">
                <div className="relative w-full lg:w-[707px] h-[400px] lg:h-[682px] flex justify-center">
                    <Images
                        src="/AWW.png"
                        alt="couple"
                        width={725}
                        height={774}
                        className="object-contain"/>                    
                </div>
            </div>

            <div className="flex flex-col w-[573px] h-[326px]  gap-[30px] my-[178px]">
                <p className="flex text-[16px] leading-[24px] font-bold text-[#BDBDBD] w-[122px] h-[24px] tracking-[0.1px]">SUMMER 2020</p>
                <p className="flex text-[40px] leading-[50px] font-bold text-[#B252B42] w-[375px] h-[100px] tracking-[0.2px]">Part of the Neural 
                Universe</p>
                <p className="flex text-[20px] leading-[30px] text-[#737373] w-[376px] h-[60px] tracking-[0.2px]">We know how large objects will act, 
                but things on a small scale.</p>
                <div className="flex w-[339px] h-[52px] gap-[10px]">
                    <button className="text-[14px] leading-[22px] bg-[#2DC071] text-white w-[156px] h-[52px] rounded-[5px] tracking-[0.2px]">BUY NOW</button>
                    <button className="border border-[#2DC071] font-bold text-[14px] leading-[22px] text-[#2DC071] w-[173px] h-[52px] rounded-[5px] tracking-[0.2px]">READ MORE</button>
                </div>
            </div>
        </div>

    )

}