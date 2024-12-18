import Image from "next/image"
import Nav5 from "../Componets/Navbar/nav5"
export default function TeamPage (){
    return(
        <div className="flex flex-col font-Montserat">
            <div className="hidden lg:block"><Nav5 /></div>
            <div className="text-center w-[870px] h-[280px] self-center">
                <h1 className="text-[#737373] uppercase font-bold text-[16px]">what we do</h1>
                <h1 className="font-bold text-[#252B42] text-[58px] mt-[16px]">Innovation tailored for you</h1>
                <div className="mt-[16px] flex flex-row items-center justify-center">
                    <h1 className="text-[#252B42] font-bold text-sm">Home</h1>
                    <h1 className="ms-[15px]"><Image src="/i7.png" alt="img" width={8.6} height={16}/></h1>
                    <h1 className="text-[#737373] font-bold ms-[15px] text-sm">Team</h1>
                </div>
            </div>
            <div className="flex flex-row justify-between h-[530px] self-center w-[1440px]">
                    <h1><Image src="/disp1.png" alt="img" width={700} height={530}/></h1>
                    <div className="flex justify-between flex-col">
                        <h1><Image src="/disp2.png" alt="img" width={361} height={260}/></h1>
                        <h1><Image src="/disp4.png" alt="img" width={361} height={260}/></h1>
                    </div>
                    <div className="flex justify-between flex-col">
                        <h1><Image src="/disp3.png" alt="img" width={361} height={260}/></h1>
                        <h1><Image src="/disp5.png" alt="img" width={361} height={260}/></h1>
                    </div>
                </div>
                <div className="flex flex-col w-[1050px] self-center h-[1759px]">
                <div className="text-center mt-[112px] self-center flex flex-col w-[607px] h-[50px]">
                    <h1 className="text-[40px] font-bold text-[#252B42]">Meet Our Team</h1>
                </div>
                <div className="flex flex-row self-center gap-[30px] mt-[112px]">
                    <div className="flex flex-col text-center">
                        <h1><Image src="/team4.png" alt="img" width={329} height={231}/></h1>
                        <h1 className="font-bold text-[#252B42] mt-[30px] text-[16px]">Username</h1>
                        <h2 className="font-bold text-sm mt-[10px] text-[#737373]">Profession</h2>
                        <h2 className="self-center mt-[10px]"><Image src="/media.png" alt="img" width={112} height={24}/></h2>
                    </div>
                    <div className="flex flex-col text-center">
                        <h1><Image src="/team5.jpg" alt="img" width={329} height={231}/></h1>
                        <h1 className="font-bold text-[#252B42] mt-[30px] text-[16px]">Username</h1>
                        <h2 className="font-bold text-sm mt-[10px] text-[#737373]">Profession</h2>
                        <h2 className="self-center mt-[10px]"><Image src="/media.png" alt="img" width={112} height={24}/></h2>
                    </div>
                    <div className="flex flex-col text-center">
                        <h1><Image src="/team6.jpg" alt="img" width={329} height={231}/></h1>
                        <h1 className="font-bold text-[#252B42] mt-[30px] text-[16px]">Username</h1>
                        <h2 className="font-bold text-sm mt-[10px] text-[#737373]">Profession</h2>
                        <h2 className="self-center mt-[10px]"><Image src="/media.png" alt="img" width={112} height={24}/></h2>
                    </div>
                </div>
                <div className="flex flex-row self-center gap-[30px] mt-[112px]">
                    <div className="flex flex-col text-center">
                        <h1><Image src="/team3.jpg" alt="img" width={329} height={231}/></h1>
                        <h1 className="font-bold text-[#252B42] mt-[30px] text-[16px]">Username</h1>
                        <h2 className="font-bold text-sm mt-[10px] text-[#737373]">Profession</h2>
                        <h2 className="self-center mt-[10px]"><Image src="/media.png" alt="img" width={112} height={24}/></h2>
                    </div>
                    <div className="flex flex-col text-center">
                        <h1><Image src="/team7.jpg" alt="img" width={329} height={231}/></h1>
                        <h1 className="font-bold text-[#252B42] mt-[30px] text-[16px]">Username</h1>
                        <h2 className="font-bold text-sm mt-[10px] text-[#737373]">Profession</h2>
                        <h2 className="self-center mt-[10px]"><Image src="/media.png" alt="img" width={112} height={24}/></h2>
                    </div>
                    <div className="flex flex-col text-center">
                        <h1><Image src="/team1.png" alt="img" width={329} height={231}/></h1>
                        <h1 className="font-bold text-[#252B42] mt-[30px] text-[16px]">Username</h1>
                        <h2 className="font-bold text-sm mt-[10px] text-[#737373]">Profession</h2>
                        <h2 className="self-center mt-[10px]"><Image src="/media.png" alt="img" width={112} height={24}/></h2>
                    </div>
                </div>
                <div className="flex flex-row self-center gap-[30px] mt-[112px]">
                    <div className="flex flex-col text-center">
                        <h1><Image src="/team2.jpg" alt="img" width={329} height={231}/></h1>
                        <h1 className="font-bold text-[#252B42] mt-[30px] text-[16px]">Username</h1>
                        <h2 className="font-bold text-sm mt-[10px] text-[#737373]">Profession</h2>
                        <h2 className="self-center mt-[10px]"><Image src="/media.png" alt="img" width={112} height={24}/></h2>
                    </div>
                    <div className="flex flex-col text-center">
                        <h1><Image src="/team8.jpg" alt="img" width={329} height={231}/></h1>
                        <h1 className="font-bold text-[#252B42] mt-[30px] text-[16px]">Username</h1>
                        <h2 className="font-bold text-sm mt-[10px] text-[#737373]">Profession</h2>
                        <h2 className="self-center mt-[10px]"><Image src="/media.png" alt="img" width={112} height={24}/></h2>
                    </div>
                    <div className="flex flex-col text-center">
                        <h1><Image src="/team9.jpg" alt="img" width={329} height={231}/></h1>
                        <h1 className="font-bold text-[#252B42] mt-[30px] text-[16px]">Username</h1>
                        <h2 className="font-bold text-sm mt-[10px] text-[#737373]">Profession</h2>
                        <h2 className="self-center mt-[10px]"><Image src="/media.png" alt="img" width={112} height={24}/></h2>
                    </div>
                </div>
            </div>
            <div className="w-full text-center pb-[80px]">
                <h1 className="font-bold text-[40px] text-[#252B42]">Start your 14 days free trial</h1>
                <h1 className="w-[411px] text-sm text-[#737373] justify-self-center mt-[30px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</h1>
                <button className="py-[15px] px-[40px] bg-[#23A6F0] text-white font-bold text-sm mt-[30px] hover:bg-sky-400 rounded">Try it free now</button>
                <h1 className="justify-self-center mt-[30px]"><Image src="/sm.png" alt="img" width={112} height={24}/></h1>
            </div>

        </div>
    )
}