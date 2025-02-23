import Image from "next/image"


export default function VisitOurOffice() {

    return (
        <main className="flex flex-col font-Montserat mt-20">
         <div className="w-[625px] h-auto self-center text-center">
                <h1 className="font-bold text-sm uppercase text-[#252B42]">visit our office</h1>
                <h1 className="font-bold text-[40px] text-[#252B42]">We help small businesses with big ideas</h1>
            </div>
            <div className="flex flex-row w-[985px] mt-[80px] self-center h-[405px]">
                <div className="w-[327px] text-center mt-[80px] h-auto">
                    <h1 className="justify-self-center"><Image src="/CI.png" alt="img" width={72} height={72}/></h1>
                    <h1 className="font-bold text-sm text-[#252B42] mt-[15px]">georgia.young@example.com</h1>
                    <h1 className="font-bold text-sm text-[#252B42]">georgia.young@ple.com</h1>
                    <h1 className="font-bold text-sm text-[#252B42] mt-[15px]">Get Support</h1>
                    <button className="text-[#23A6F0] hover:bg-[#252B42] hover:text-white mt-[15px] rounded-full text-sm font-bold border border-[#23A6F0] py-[15px] px-[36px]">Submit Request</button>
                </div>
                <div className="w-[327px] text-center h-[403px] bg-[#252B42]">
                    <h1 className="justify-self-center mt-[80px]"><Image src="/LI.png" alt="img" width={72} height={72}/></h1>
                    <h1 className="font-bold text-sm text-white mt-[15px]">georgia.young@example.com</h1>
                    <h1 className="font-bold text-sm text-white">georgia.young@ple.com</h1>
                    <h1 className="font-bold text-sm text-white mt-[15px]">Get Support</h1>
                    <button className="text-[#23A6F0] mt-[15px] hover:bg-white hover:text-[#252B42] rounded-full text-sm font-bold border border-[#23A6F0] py-[15px] px-[36px]">Submit Request</button>
                </div>
                <div className="w-[327px] text-center mt-[80px] h-auto">
                    <h1 className="justify-self-center"><Image src="/MI.png" alt="img" width={72} height={72}/></h1>
                    <h1 className="font-bold text-sm text-[#252B42] mt-[15px]">georgia.young@example.com</h1>
                    <h1 className="font-bold text-sm text-[#252B42]">georgia.young@ple.com</h1>
                    <h1 className="font-bold text-sm text-[#252B42] mt-[15px]">Get Support</h1>
                    <button className="text-[#23A6F0] hover:bg-[#252B42] hover:text-white mt-[15px] rounded-full text-sm font-bold border border-[#23A6F0] py-[15px] px-[36px]">Submit Request</button>
                </div>
            </div>
            <div className="w-[607px] mb-[80px] h-auto mt-[60px] text-center self-center">
                <Image className="justify-self-center" src="/arrow.png" alt="img" width={72.5} height={22}/>
                <h1 className="font-bold text-[16px] text-[#252B42] mt-[19px]">WE Can&apos;t WAIT TO MEET YOU</h1>
                <h1 className="font-bold text-[58px] text-[#252B42] mt-[16px]">Let&apos;s Talk</h1>
                <button className="mt-[16px] bg-[#23A6F0] text-white rounded text-sm font-bold hover:bg-sky-400 py-[15px] px-[40px]">Try it for free</button>
            </div>
        </main>
    )
}