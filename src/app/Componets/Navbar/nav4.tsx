import Image from "next/image"
import Link from "next/link"
export default function Nav4 (){
    return(
        <div>
            <nav>
                    <div className="w-[1042px] h-[58px] items-center my-[10px] ms-[199px] flex flex-row">
                        <h1 className="text-2xl font-bold text-[#252B42]"><Link href="./">Bandage</Link></h1>
                        <ul className="ms-[100px] flex flex-row gap-[15px] text-[#737373] font-bold text-sm">
                            <li className="hover:cursor-pointer hover:text-gray-600"><Link href="./">Home</Link></li>
                            <li className="hover:cursor-pointer hover:text-gray-600"><Link href="ProductListPage">Shop</Link></li>
                            <li className="hover:cursor-pointer hover:text-gray-600"><Link href="AboutPage">About</Link></li>
                            <li className="hover:cursor-pointer hover:text-gray-600"><Link href="ProductPage">Blog</Link></li>
                            <li className="hover:cursor-pointer hover:text-gray-600"><Link href="ContactPage">Contact</Link></li>
                            <li className="hover:cursor-pointer hover:text-gray-600"><Link href="TeamPage">Pages</Link></li>
                        </ul>
                      <h2 className="ms-[140px]"><Image src="/icn7.png" alt="img" width={16} height={16}/></h2>
                      <h2 className="ms-[5px] hover:cursor-pointer hover:text-sky-400 text-sm font-bold text-[#23A6F0]">Login / Register</h2>
                      <h2 className="ms-[30px]"><Image src="/icn8.png" alt="img"width={16} height={16}/></h2>
                      <h2 className="ms-[30px]"><Image src="/icn9.png" alt="img"width={16} height={16}/></h2>
                      <h1 className="ms-[5px] text-[#23A6F0] font-normal text-xs">1</h1>
                      <h2 className="ms-[30px]"><Image src="/icn10.png" alt="img"width={16} height={16}/></h2>
                      <h1 className="ms-[5px] text-[#23A6F0] font-normal text-xs">1</h1>
                        
                    </div>
                </nav>
        </div>
    )
}