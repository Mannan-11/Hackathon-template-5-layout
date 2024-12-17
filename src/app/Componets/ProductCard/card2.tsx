import Link from "next/link"
const Card2 = (props: any) => {
    return(
    
        <div className="mb-10 flex flex-row w-[1049px] gap-[30px] mt-16">
            <div className="flex flex-col items-center">
                <h1><Link href="ProductPage">{props.img}</Link></h1>
                <h3 className="mt-5 font-bold text-[16px] text-[#252B42]">{props.h}</h3>
                <h2 className="mt-2 font-bold text-sm text-[#737373]">{props.p}</h2>
                <div className="flex flex-row gap-2 mt-3">
                    <h1 className="font-bold text-[16px] text-[#BDBDBD]">{props.price}</h1>
                    <h2 className="font-bold text-[16px] text-[#23856D]">{props.price}</h2>
                </div>
                <div className="mt-3">
                     <h1 className="text-[#23A6F0]">{props.circle}</h1>
                </div>
            </div>
        </div>
    )
}
export default Card2