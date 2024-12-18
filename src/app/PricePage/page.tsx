import Nav5 from "../Componets/Navbar/nav5";
import { Switch } from "@/components/ui/switch"
import Image from "next/image"



export default function PricePage (){
    return(
        <div className="flex flex-col font-Montserat">
            <div className="flex flex-col w-full h-auto bg-[#FAFAFA]">
                <div className="hidden lg:block"><Nav5/></div>
                <div className="self-center w-[1050px] h-[280px] text-center bg-white">
                     <h1 className="text-[16px] mt-[50px] text-[#737373] font-bold uppercase">pricing</h1>
                     <h2 className="text-[#252B42] mt-[16px] text-[58px] font-bold">Simple Pricing</h2>
                     <div className="items-center flex mt-[16px] flex-row justify-self-center">
                        <h1 className="text-[14px] text-[#737373] font-bold">Home</h1>
                        <h1 className="ms-[15px]"><Image src="/i7.png" alt="img" width={8.6} height={16}/></h1>
                        <h1 className="ms-[15px] font-bold text-sm text-[#252B42]">Pricing</h1>
                     </div>
                </div>
                <div className="flex flex-col text-center mt-[48px] mb-[48px]">
                    <h1 className="font-bold text-[40px] text-[#252B42]">Pricing</h1>
                    <h1 className="w-[469px] text-sm text-[#737373] mt-10 self-center">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</h1>
                </div>
                <div className="flex flex-row w-[320px] self-center items-center">
                    <h1 className="font-bold text-[16px] text-[#252B42]">Monthly</h1>
                    <h1 className="ms-[15px]"><Switch /></h1>
                    <h1 className="font-bold text-[16px] ms-[15px] text-[#252B42]">Yearly</h1>
                    <button className="font-bold text-[14px] ms-[15px] rounded-full bg-[#B2E3FF] px-[20px] py-[10px] text-[#23A6F0]">Save 25%</button>
                </div>
                <div className="w-[958px] h-[704px] flex flex-row self-center mt-[48px]">
                    <div className="text-center flex flex-col w-[327px] mt-[40px] h-[664px] bg-white rounded-lg border border-[#23A6F0]">
                        <h1 className="font-bold text-2xl text-[#252B42] mt-[50px]">FREE</h1>
                        <h1 className="font-bold text-[16px] mt-[35px] w-[160px] self-center text-[#737373]">Organize across all apps by hand</h1>
                        <div className="self-center flex flex-row mt-[38px]">
                            <h1 className="text-[#23A6F0] text-[40px] font-bold">0</h1>
                            <div className="flex flex-col ms-[10px]">
                                <h1 className="font-bold text-[#23A6F0] -ml-14 text-2xl">$</h1>
                                <h1 className="font-bold text-sm text-[#8EC2F2]">Per Month</h1>
                            </div>
                        </div>
                        <div className="gap-[15px] mt-[35px] self-center flex flex-col w-[274px]">
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark2.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">1GB  Cloud storage</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark2.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] w-[168px] text-left text-[#252B42]">Email and community support</h2>
                            </div>

                        </div>
                        <button className="py-[15px] px-[40px] w-[246px] self-center hover:bg-sky-400 mt-[35px] text-white font-bold text-sm bg-[#23A6F0] rounded">Try for free</button>
                    </div>
                    <div className="text-center flex flex-col w-[327px] bg-[#252B42] h-[664px] rounded-lg border border-[#23A6F0]">
                        <h1 className="font-bold text-2xl text-white mt-[50px]">STANDART</h1>
                        <h1 className="font-bold text-[16px] mt-[35px] w-[160px] self-center text-white">Organize across all apps by hand</h1>
                        <div className="self-center flex flex-row mt-[38px]">
                            <h1 className="text-[#23A6F0] text-[40px] font-bold">9.99</h1>
                            <div className="flex flex-col ms-[10px]">
                                <h1 className="font-bold text-[#23A6F0] -ml-14 text-2xl">$</h1>
                                <h1 className="font-bold text-sm text-[#8EC2F2]">Per Month</h1>
                            </div>
                        </div>
                        <div className="gap-[15px] mt-[35px] self-center flex flex-col w-[274px]">
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-white">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-white">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-white">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark2.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-white">1GB  Cloud storage</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark2.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] w-[168px] text-left text-white">Email and community support</h2>
                            </div>

                        </div>
                        <button className="py-[15px] px-[40px] w-[246px] self-center hover:bg-sky-400 mt-[35px] text-white font-bold text-sm bg-[#23A6F0] rounded">Try for free</button>
                    </div>
                    <div className="text-center flex flex-col w-[327px] h-[664px] mt-[40px] bg-white rounded-lg border border-[#23A6F0]">
                        <h1 className="font-bold text-2xl text-[#252B42] mt-[50px]">PREMIUM</h1>
                        <h1 className="font-bold text-[16px] mt-[35px] w-[160px] self-center text-[#737373]">Organize across all apps by hand</h1>
                        <div className="self-center flex flex-row mt-[38px]">
                            <h1 className="text-[#23A6F0] text-[40px] font-bold">19.99</h1>
                            <div className="flex flex-col ms-[10px]">
                                <h1 className="font-bold text-[#23A6F0] -ml-14 text-2xl">$</h1>
                                <h1 className="font-bold text-sm text-[#8EC2F2]">Per Month</h1>
                            </div>
                        </div>
                        <div className="gap-[15px] mt-[35px] self-center flex flex-col w-[274px]">
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark1.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">Unlimited product updates</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark2.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] text-[#252B42]">1GB  Cloud storage</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1><Image src="/mark2.png" alt="img" width={32} height={32}/></h1>
                                <h2 className="font-bold text-sm ms-[10px] w-[168px] text-left text-[#252B42]">Email and community support</h2>
                            </div>
                        </div>
                        <button className="py-[15px] px-[40px] w-[246px] self-center hover:bg-sky-400 mt-[35px] text-white font-bold text-sm bg-[#23A6F0] rounded">Try for free</button>
                    </div>
              </div>
              <div className="text-[20px] text-[#252B42] font-normal self-center mt-[80px]">Trusted By Over 4000 Big Companies</div>
              <div className="w-full h-[175px] bg-[#FAFAFA]">
                     <div className="w-[1054px] justify-evenly justify-self-center items-center h-[175px] flex flex-row">
                      <h1><Image src="/t1.png" alt="img" width={153} height={34}/></h1>
                      <h1><Image src="/t2.png" alt="img" width={100} height={34}/></h1>
                      <h1><Image src="/t3.png" alt="img" width={100} height={75}/></h1>
                      <h1><Image src="/t4.png" alt="img" width={100} height={42}/></h1>
                      <h1><Image src="/t5.png" alt="img" width={100} height={62}/></h1>
                      <h1><Image src="/t6.png" alt="img" width={100} height={72}/></h1>
                     </div>
                </div>
            </div>
            <div className="flex flex-col self-center text-center mt-[125px]">
                <h1 className="text-[40px] font-bold text-[#252B42]">Pricing FAQs</h1>
                <h1 className="w-[552px] text-center text-[#737373] mt-[10px] text-[20px]">Problems trying to resolve the conflict between 
                the two major realms of Classical physics</h1>
            </div>
            <div className="flex flex-row w-[1056px] self-center h-auto mt-[95px]">
                <div className="flex flex-col w-[528px] h-auto">
                    <div className="flex flex-row">
                        <h1 className="ms-[25px]"><Image src="/i1.png" alt="img" width={9} height={16}/></h1>
                        <h1 className="ms-[20px] text-[#252B42] text-[16px] font-bold">the quick fox jumps over the lazy dog</h1>
                        </div>
                        <h1 className="mt-[5px] w-[408px] text-sm ms-[54px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h1>
                        <div className="mt-[55px] flex flex-row">
                        <h1 className="ms-[25px]"><Image src="/i1.png" alt="img" width={9} height={16}/></h1>
                        <h1 className="ms-[20px] text-[#252B42] text-[16px] font-bold">the quick fox jumps over the lazy dog</h1>
                        </div>
                        <h1 className="mt-[5px] w-[408px] text-sm ms-[54px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h1>
                        <div className="mt-[55px] flex flex-row">
                        <h1 className="ms-[25px]"><Image src="/i1.png" alt="img" width={9} height={16}/></h1>
                        <h1 className="ms-[20px] text-[#252B42] text-[16px] font-bold">the quick fox jumps over the lazy dog</h1>
                        </div>
                        <h1 className="mt-[5px] w-[408px] text-sm ms-[54px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h1>
                </div>
                <div className="flex flex-col w-[528px] h-auto">
                    <div className="flex flex-row">
                        <h1 className="ms-[25px]"><Image src="/i1.png" alt="img" width={9} height={16}/></h1>
                        <h1 className="ms-[20px] text-[#252B42] text-[16px] font-bold">the quick fox jumps over the lazy dog</h1>
                        </div>
                        <h1 className="mt-[5px] w-[408px] text-sm ms-[54px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h1>
                        <div className="mt-[55px] flex flex-row">
                        <h1 className="ms-[25px]"><Image src="/i1.png" alt="img" width={9} height={16}/></h1>
                        <h1 className="ms-[20px] text-[#252B42] text-[16px] font-bold">the quick fox jumps over the lazy dog</h1>
                        </div>
                        <h1 className="mt-[5px] w-[408px] text-sm ms-[54px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h1>
                        <div className="mt-[55px] flex flex-row">
                        <h1 className="ms-[25px]"><Image src="/i1.png" alt="img" width={9} height={16}/></h1>
                        <h1 className="ms-[20px] text-[#252B42] text-[16px] font-bold">the quick fox jumps over the lazy dog</h1>
                        </div>
                        <h1 className="mt-[5px] w-[408px] text-sm ms-[54px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h1>
                </div>
            </div>
            <div className="self-center text-[20px] text-[#737373] mt-[50px]">Haven&apos;t got your answer? Contact our support</div>
            <div className="w-full text-center mt-[240px] pb-[80px]">
                <h1 className="font-bold text-[40px] text-[#252B42]">Start your 14 days free trial</h1>
                <h1 className="w-[411px] text-sm text-[#737373] justify-self-center mt-[30px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</h1>
                <button className="py-[15px] px-[40px] bg-[#23A6F0] text-white font-bold text-sm mt-[30px] hover:bg-sky-400 rounded">Try it free now</button>
                <h1 className="justify-self-center mt-[30px]"><Image src="/sm.png" alt="img" width={242} height={50}/></h1>
            </div>

        </div>
    )
}