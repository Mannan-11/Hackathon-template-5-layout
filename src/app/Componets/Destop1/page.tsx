import Nav2 from "../Navbar/nav2"
import Nav1 from "../Navbar/nav1"
import Image from "next/image"

export default function Destop1 (){
    return(
        <div className="w-[1440px] justify-self-center">
            <div className='font-Montserat w-[1440px] '>
            <div className="flex flex-col w-[1440px]  font-Montserat">
                <div className="hidden lg:block"><Nav1 /></div>
                <div className="hidden lg:block"><Nav2 /></div>
            </div>
                    <div className='relative w-[1440px] h-[852px]'>
                          <h1 className=' absolute'> <Image src="/girl.jpg" alt="img"
                           width={1440}
                           height={716} />    </h1>
                           <div className='absolute mt-44 ms-44'>
                             <h1 className='uppercase text-white font-bold text-[16px]'>summer 2020</h1>
                             <h1 className='text-white text-[58px] uppercase font-bold  mt-8'>new collection</h1>
                             <h1 className='text-white font-normal text-xl w-[376px] mt-6'>We know how large objects will act, 
                             but things on a small scale.</h1>
                             <button className='text-white hover:bg-green-400 font-bold text-2xl bg-[#2DC071] uppercase rounded-[5px] mt-10 py-[15px] px-[40px]'>shop now</button>
                           </div>
                        </div> 

                        <div className='flex self-center w-full flex-col'>
                            <h1 className='font-bold uppercase text-center text-2xl text-[#252B42]'>
                                editor&apos;s pick 
                            </h1>
                            
                               <h2 className='font-normal text-center text-sm mt-2 text-[#737373]'>Problems trying to resolve the conflict between</h2>
                               <h3></h3>

                     <div className='w-[1050px] mt-16 self-center h-[510px] flex flex-row'>

                             <div className=' relative w-[520px] h-[504px]'>
                                <div className='w-[513px] h-auto '>
                                    <h1 className='absolute'><Image src="/q1.png" alt="img" width={510} height={500} /></h1>
                                    <button className='absolute hover:bg-gray-100 ms-[31px] mb-6 bottom-0 px-[70px] font-bold text-[16px]  py-[15px] bg-white'>MEN</button>
                                </div>
                                </div>
                            <div className='relative w-[240px] h-[500px] ms-4'>
                                <div className='w-[240px] h-[500px]'>
                                    <h1 className=' absolute'><Image src="/q2.png" width={240} height={500} alt="img" /></h1>
                                    <button className='hover:bg-gray-100 bottom-0 ms-[21px] mb-5 font-bold text-[16px] py-[15px] bg-white px-[40px] absolute'>WOMEN</button>
                                </div>
                               </div>
                               <div className='flex flex-col ms-6'>
                                <div className='relative w-[240px]  h-[242px]'>
                                    <div>
                                        <h1 className='absolute '><Image src="/q3.png" alt="img" width={240} height={242} /></h1>
                                        <button className=' absolute hover:bg-gray-100 bottom-0 ms-[14px] mb-6 font-bold text-[16px] py-[15px] bg-white px-[25px] uppercase '>accessories</button>
                                    </div>
                                    </div>
                                    <div className='relative mt-4 w-[240px] h-[242px]'>
                                        <div>
                                            <h1 className=' absolute'><Image src="/q4.png" alt="img" width={240} height={242} /></h1>
                                            <button className=' absolute hover:bg-gray-100 bottom-0 ms-[14px] mb-6 font-bold text-[16px] py-[15px] bg-white px-[25px]'>KIDS</button>
                                        </div>
                                    </div>
                               </div>
                        
                       </div>
                        </div>
                   </div>
        </div>
    )
}