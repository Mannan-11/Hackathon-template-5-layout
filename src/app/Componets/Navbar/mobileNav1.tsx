import Link from "next/link"
export default function MobileNav1 (){
    return(
        <div className="flex flex-col w-[414px] h-[532px]">
            <div className="w-ful h-[58px] flex flex-row items-center border">
                <h1 className="ms-[35px] text-2xl font-bold text-[#252B42]">Bandage</h1>
                <h1 className="ms-[105px]"><img src="nav1.png" alt="img" /></h1>
                <h1 className="ms-[24px]"><img src="nav2.png" alt="img" /></h1>
                <h1 className="ms-[32px]"><img src="nav3.png" alt="img" /></h1>
            </div>
            <ul className="flex flex-col text-[#737373] text-[30px] text-center mt-[83px] gap-[30px]">
            <li className="hover:cursor-pointer hover:text-gray-600"><Link href="TeamPage">Home</Link></li>
                    <li className="hover:cursor-pointer hover:text-gray-600"><Link href="ProductPage">Product</Link></li>
                    <li className="hover:cursor-pointer hover:text-gray-600"><Link href="PricePage">Pricing</Link></li>
                    <li className="hover:cursor-pointer hover:text-gray-600"><Link href="ContactPage">Contact</Link></li>
            </ul>

        </div>
    )
}