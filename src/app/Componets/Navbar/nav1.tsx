import Image from "next/image"
export default function Nav1 (){
    return(
        <div>
             <nav className="flex flex-row w-full h-[58px] bg-[#252B42]">
                    <div className="w-full h-[46px] self-center flex flex-row items-center">
                        <h1 className="ms-[64px]"><Image src="/icn1.png" alt="img" width={16} height={16} /></h1>
                        <h1 className="ms-[5px] font-normal text-xs text-[#FFFFFF]">(225) 555-0118</h1>
                        <h1 className="ms-[40px]"><Image src="/icn2.png" alt="img" width={16} height={16}/></h1>
                        <h1 className="ms-[5px] font-normal text-xs text-[#FFFFFF]">michelle.rivera@example.com</h1>
                        <h1 className="ms-[210px] font-bold text-sm text-[#FFFFFF]">Follow Us  and get a chance to win 80% off</h1>
                        <h1 className="ms-[210px] font-bold text-sm text-[#FFFFFF]">Follow Us  :</h1>
                        <h1 className="ms-[15px]"><Image src="/icn3.png" alt="img" width={16} height={16} /></h1>
                        <h1 className="ms-[10px]"><Image src="/icn4.png" alt="img" width={16} height={16}/></h1>
                        <h1 className="ms-[10px]"><Image src="/icn5.png" alt="img" width={16} height={16}/></h1>
                        <h1 className="ms-[10px]"><Image src="/icn6.png" alt="img" width={16} height={16}/></h1>
                    </div>
                </nav>
        </div>
    )
}