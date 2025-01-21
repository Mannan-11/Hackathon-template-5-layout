import Images from "next/image"

export default function Vitaclassic() {

    return (
        <div className="w-[1535px] h-[709px] bg-[#23856D]">
            <div className=" w-[1036px] h-[711px] py-[112px] mx-[240px] gap-[80px]">
                <div className="flex w-[1049px] h-[599px] gap-[30px]">
                    <div className="flex flex-col w-[509px] h-[432px] gap-[30px] pt-[60px]">
                        <h1 className="w-[154px] h-[30px] text-[20px] text-white leading-[30px] tracking-[0.2px]">SUMMER 2020</h1>
                        <p className="w-[509px] h-[160px] text-[58px] font-bold text-white  eading-[80px] tracking-[0.2px]">VITA CLASSIC PRODUCT</p>
                        <p className="w-[340px] h-[41px] text-[14px] text-white leading-[20px] tracking-[0.2px]">We know how large objects will act, We know how are objects will act, We know</p>
                        <div className="flex w-[298px] h-[52px] gap-[34px]">
                            <div className="w-[80px] h-[32px] text-[24px] text-white leading-[32px] tracking-[0.1px] my-2.5">$16.48</div>
                            <button className="w-[184px] h-[52px] rounded-[5px] text-[14px] font-bold bg-[#2DC071] text-white leading-[32px] tracking-[0.1px]">ADD TO CART</button>
                        </div>
                    </div>

                    <div className="w-[510px] h-[685px]">
                        <Images src="/VCG.png" alt="Men Image" width={443} height={685} 
                               className="w-[490px] h-[599px] mx-[33.5px]"/>
                    </div>

                </div>

            </div>


        </div>

    )
}
