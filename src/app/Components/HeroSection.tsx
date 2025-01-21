import Images from "next/image"


export default function Herosecetion() {


    return (
        <div className="flex w-full h-[716px] relative">
            <div className="relative w-full h-[716px]">
                <Images src="/HD1.png" alt="picture" height={716} width={1525} />
            </div>
            <div className="absolute flex flex-col sm:w-[414px] lg:w-[1044px] sm:h-[753px] lg:h-[651px] mx-[245.5px] py-[112px] top-[48px] gap-[80px]">
                <div className="absolute flex flex-col w-[1044px] h-[427px] gap-[30px] py-12">
                    <div className="absolute flex flex-col w-[599px] h-[331px] gap-[35px]">                        
                            <h1 className="text-white text-[16px] font-bold leading-[24px] tracking-[0.1px] w-[122px] h-[24px]">SUMMER 2020</h1>
                            <p className="text-white text-[58px] leading-[80px] tracking-[0.2px] font-bold w-[565px] h-[80px]">NEW COLLECTION</p>
                            <p className="text-white text-[20px] leading-[30px] tracking-[0.2px] w-[369px] h-[60px]">We know how large objects will act,
                                but things on a small scale.</p>
                            <div className="flex w-[228px] h-[62px] gap-[10px] px-[40px] py-[15px] bg-[#2DC071] rounded-[5px]">
                                <button className="flex w-[148px] h-[32px] text-white font-bold text-[24px]">SHOP NOW </button>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}