import Image from "next/image"
import Link from "next/link"
export default function Nav5 (){
    return(
        <div className="flex flex-col font-Montserat">
            <nav className="w-full h-[91px] flex flex-row items-center">
                <h1 className="font-bold text-2xl text-[#252B42] ms-[136px]"><Link href="./">Bandage</Link></h1>
                <ul className="flex flex-row text-sm font-bold ms-[82px] gap-[21px] text-[#737373]">
                    <li className="hover:cursor-pointer hover:text-gray-600"><Link href="TeamPage">Home</Link></li>
                    <li className="hover:cursor-pointer hover:text-gray-600"><Link href="ProductPage">Product</Link></li>
                    <li className="hover:cursor-pointer hover:text-gray-600"><Link href="PricePage">Pricing</Link></li>
                    <li className="hover:cursor-pointer hover:text-gray-600"><Link href="ContactPage">Contact</Link></li>
                </ul>
                 <h1 className="text-sm font-bold text-[#23A6F0] hover:text-sky-400 ms-[240px]">Login</h1>
                 <button className="text-white rounded bg-[#23A6F0] text-sm font-bold flex ms-[45px] hover:bg-sky-400 items-center py-[10px] px-[25px]">Become a Member<Image className="ms-[15px]" src="/vector.png" alt="img" width={12} height={10} /></button>
            </nav>
        </div>
    )
}