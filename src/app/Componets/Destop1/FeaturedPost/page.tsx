import Image from "next/image"
export default function Post (){
    return(
        <div>
            <div className="w-full h-[1044px] font-Montserat">
                <div className="w-[1050px] h-[1044px] flex flex-col justify-self-center">
                    <div className="flex flex-col text-center mt-28">
                        <h1 className="font-bold text-sm text-[#23A6F0]">Practice Advise</h1>
                        <h2 className="font-bold text-[40px] text-[#252B42] ">Featured Posts</h2>
                        <h3 className="w-[469px] ms-72 text-sm text-[#737373] font-normal">Problems trying to resolve the conflict between 
                        the two major realms of Classical physics: Newtonian mechanics</h3>
                    </div>
                    <div className="flex flex-row w-[1045px] justify-evenly h-[606px] mt-20">
                        <div className="flex flex-col w-[328px] h-[606px] border border-b-4 border-slate-100">
                            <h1 className="w-[328px] h-[300px]"><Image src="/r3.png" alt="img" width={328} height={300} /></h1>
                            <ul className="flex  flex-row gap-[15px] ms-5 font-normal text-xs">
                                <li className="text-[#8EC2F2]">Google</li>
                                <li className="text-[#737373]">Trending</li>
                                <li className="text-[#737373]">New</li>
                            </ul>
                            <h1 className="w-[247px] font-normal text-[20px] ms-5 mt-2">Loudest à la Madison #1 
                            (L&apos;integral)</h1>
                            <h1 className="w-[280px] font-normal text-sm ms-5 text-[#737373] mt-3">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</h1>
                             <div className="flex flex-row ms-5 mt-8 w-[300px]">
                                  <h1><Image src="/i3.png" alt="img" width={16} height={16} /></h1>
                                  <h2 className="ms-1 font-normal text-xs text-[#737373]">22 April 2021</h2>
                                  <h3 className="ms-20"><Image src="/i2.png" alt="img" width={16} height={16}/></h3>
                                  <h4 className="ms-1 font-normal text-xs text-[#737373]">10 comments</h4>
                             </div>
                             <div className="ms-5 flex flex-row mt-10">
                                <h1 className=" text-sm font-bold text-[#737373]">Learn More</h1>
                                <h2 className="hover:cursor-pointer mt-0.5 ms-3"><Image src="/i1.png" alt="img" width={9} height={16} /></h2>

                             </div>
                             
                        </div>
                        <div className="flex flex-col w-[328px] h-[606px] border border-b-4 border-slate-100">
                            <h1 className="w-[328px] h-[300px]"><Image src="/r2.png" alt="img" width={328} height={300} /></h1>
                            <ul className="flex  flex-row gap-[15px] ms-5 font-normal text-xs">
                                <li className="text-[#8EC2F2]">Google</li>
                                <li className="text-[#737373]">Trending</li>
                                <li className="text-[#737373]">New</li>
                            </ul>
                            <h1 className="w-[247px] font-normal text-[20px] ms-5 mt-2">Loudest à la Madison #1 
                            (L&apos;integral)</h1>
                            <h1 className="w-[280px] font-normal text-sm ms-5 text-[#737373] mt-3">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</h1>
                             <div className="flex flex-row ms-5 mt-8 w-[300px]">
                                  <h1><Image src="/i3.png" alt="img" width={16} height={16}/></h1>
                                  <h2 className="ms-1 font-normal text-xs text-[#737373]">22 April 2021</h2>
                                  <h3 className="ms-20"><Image src="/i2.png" alt="img" width={16} height={16} /></h3>
                                  <h4 className="ms-1 font-normal text-xs text-[#737373]">10 comments</h4>
                             </div>
                             <div className="ms-5 flex flex-row mt-10">
                                <h1 className=" text-sm font-bold text-[#737373]">Learn More</h1>
                                <h2 className="hover:cursor-pointer mt-0.5 ms-3"><Image src="/i1.png" alt="img" width={9} height={16}/></h2>

                             </div>
                             
                        </div>
                        <div className="flex flex-col w-[328px] h-[606px] border border-b-4 border-slate-100">
                            <h1 className="w-[328px] h-[300px]"><Image src="/r1.png" alt="img" width={328} height={300} /></h1>
                            <ul className="flex  flex-row gap-[15px] ms-5 font-normal text-xs">
                                <li className="text-[#8EC2F2]">Google</li>
                                <li className="text-[#737373]">Trending</li>
                                <li className="text-[#737373]">New</li>
                            </ul>
                            <h1 className="w-[247px] font-normal text-[20px] ms-5 mt-2">Loudest à la Madison #1 
                            (L&apos;integral)</h1>
                            <h1 className="w-[280px] font-normal text-sm ms-5 text-[#737373] mt-3">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</h1>
                             <div className="flex flex-row ms-5 mt-8 w-[300px]">
                                  <h1 ><Image src="/i3.png" alt="img" width={16} height={16}/></h1>
                                  <h2 className="ms-1 font-normal text-xs text-[#737373]">22 April 2021</h2>
                                  <h3 className="ms-20"><Image src="/i2.png" alt="img"width={16} height={16} /></h3>
                                  <h4 className="ms-1 font-normal text-xs text-[#737373]">10 comments</h4>
                             </div>
                             <div className="ms-5 flex flex-row mt-10">
                                <h1 className=" text-sm font-bold text-[#737373]">Learn More</h1>
                                <h2 className="hover:cursor-pointer mt-0.5 ms-3"><Image src="/i1.png" alt="img" width={9} height={16} /></h2>

                             </div>
                             
                        </div>
                    </div>
                    

                </div>
                
            </div>
        </div>
    )
}