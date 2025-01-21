
import Images from "next/image"


export default function EditorsPick() {
    return (
        <div>
            <div className="flex sm:flex-col lg:flex w-[1535px] h-[770px] bg-[#FAFAFA]">

                <div className="flex flex-col w-[1050px] h-[770px] mx-[250px] gap-[48px] py-[80px]">
                    <div className="flex flex-col w-[607px] h-[62px] mx-[221.5px] gap-[10px]">
                        <h1 className="text-[#252B42] text-[24px] leading-8 font-bold w-[181px] h-[32px] mx-[213px]">EDITOR’S PICK</h1>
                        <h1 className="text-[#737373] text-[14px] leading-5 w-[347px] h-[20px] mx-[130px]">Problems trying to resolve the conflict between</h1>
                    </div>
                    <div className="flex sm:flex-col lg:flex-row w-[1050px] h-[500px] gap-[30px]">
                        <div className="relative w-[510px] h-[500px]">
                            <Images src="/Men.png" alt="picture" height={500} width={509} />
                            <button className="absolute top-[426px] left-[31px] px-[65px] py-3 bg-white font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">MEN
                            </button>
                            </div>
                            <div className=" flex relative w-[240px] h-[500px]">
                            <Images src="/Women.png" alt="picture" height={500} width={509} />
                            <button className="absolute top-[434px] left-[21px] px-[48px] py-3 bg-white font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">WOMEN
                            </button>
                            </div>
                            <div className=" flex flex-col relative w-[240px] h-[500px] gap-[16px]">
                            <div className="flex">
                            <Images src="/Accessories.png" alt="picture" height={242} width={240} />
                            <button className="absolute top-[171px] left-[14px] px-[26px] py-3 bg-white font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">ACCESSORIES
                            </button>
                            </div>
                            <div className="flex">
                            <Images src="/Kids.png" alt="picture" height={242} width={240} />
                            <button className="absolute top-[434px] left-[18px] px-[40px] py-3 bg-white font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">KIDS
                            </button>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}