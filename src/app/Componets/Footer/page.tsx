import Image from "next/image"
export default function Footer (){
    return(
        <div>
            <div className="w-full  h-[488px] flex flex-col font-Montserat text-[#252B42]">
                <div className="self-center border-b-4 w-[1049px] h-[142px]">
                    <div className="items-center flex-row w-[1049px] h-[142px] justify-self-center">
                        <h1 className="mt-[53px] font-bold text-[#252B42] text-2xl">Bandage</h1>
                        <div className="-mt-[30px] items-center ms-[770px] flex flex-row">
                            <h1><Image src="/i4.png" alt="img" width={24} height={24} /></h1>
                            <h1 className="ms-5"><Image src="/i5.png" alt="img" width={24} height={24}/></h1>
                            <h1 className="ms-5"><Image src="/i6.png" alt="img" width={24} height={24}/></h1>
                        </div>
                    </div>
                </div>
               <div className="w-[1050px] gap-x-[30px] h-[270px] mt-16 self-center flex flex-row">
                    <div className="w-[148px] flex flex-col">
                        <h1 className="font-bold text-[16px] ">Company Info</h1>
                        <div className="gap-y-4 font-bold mt-6 w-[148px] text-sm text-[#737373] flex flex-col ">
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">About Us</h1>
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">Carrier</h1>
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">We are hiring</h1>
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">Blog</h1>
                        </div>

                    </div>
                    <div className="w-[148px] flex flex-col">
                        <h1 className="font-bold text-[16px] ">Legal</h1>
                        <div className="gap-y-4 font-bold mt-6 w-[148px] text-sm text-[#737373] flex flex-col ">
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">About Us</h1>
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">Carrier</h1>
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">We are hiring</h1>
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">Blog</h1>
                        </div>

                    </div>
                    <div className="w-[148px] flex flex-col">
                        <h1 className="font-bold text-[16px] ">Features</h1>
                        <div className="gap-y-4 font-bold mt-6 w-[148px] text-sm text-[#737373] flex flex-col ">
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">Business Marketing</h1>
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">User Analytic</h1>
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">Live Chat</h1>
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">Unlimited Support</h1>
                        </div>

                    </div>
                    <div className="w-[148px] flex flex-col">
                        <h1 className="font-bold text-[16px] ">Resources</h1>
                        <div className="gap-y-4 font-bold mt-6 w-[148px] text-sm text-[#737373] flex flex-col">
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">IOS & Android</h1>
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">Watch a Demo</h1>
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">Customers</h1>
                            <h1 className="hover:text-slate-600 hover:cursor-pointer">API</h1>
                        </div>
                    </div>
                    <div className="flex flex-col">
                    <h1 className="font-bold text-[16px] relative">Get In Touch</h1>
                    <div className="w-[321px] mt-6">
                        <h1><input type="Email" className="absolute rounded-[5px] bg-[#FAFAFA] w-[321px] h-[58px] font-normal text-sm px-5" placeholder="Your Email" /></h1>
                        <button className="absolute font-normal text-sm text-white hover:bg-sky-400 ms-[220px] py-[19px] px-4 rounded-[5px] bg-[#23A6F0]">Subscribe</button> 
                    </div>
                    <h1 className=" absolute mt-28 ms-2 font-normal text-[12px] text-[#737373]">Lore imp sum dolor Amit</h1>
                    </div>
                   
               </div>
               <div className="w-full h-[74px] bg-[#FAFAFA]">
                <h1 className="w-[1050px] font-bold justify-self-center mt-6 text-[#737373] text-sm">Made With Love By Abdul Mannan</h1>
               </div>
            </div>
        </div>
    )
}