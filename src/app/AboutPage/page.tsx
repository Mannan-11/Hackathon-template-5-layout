import Image from "next/image"
import Nav5 from "../Componets/Navbar/nav5"
export default function AboutPage (){
    return(
        <div className="font-Montserat">
            <div className="flex flex-col">
                <div className="self-center"><Nav5/></div>
                <div className="relativ ms-80 lg:ms-20 w-full h-[729px]">
            <h1 className="absolute"><Image src="/background.png" alt="img" width={1440} height={625}/></h1>
            <div className=" absolute mt-[216px] ms-[136px]">
                <h1 className="font-bold text-[16px] text-[#252B42] uppercase">about company</h1>
                <h2 className="font-bold mt-[35px] text-[58px] text-[#252B42] uppercase">about us</h2>
                <h3 className="text-[20px] text-[#737373] w-[376px] mt-[35px]">We know how large objects will act, but things on a small scale</h3>
            <button className="py-[15px] px-[40px] hover:bg-sky-400 text-white bg-[#23A6F0] rounded text-sm font-bold mt-[35px]">Get Quote Now</button>
            </div>
        </div>
        <div className="flex flex-row my-[24px] self-center w-[1018] h-[188px]">
            <div className="w-[394px] mt-[24px] h-[188px]">
                <h1 className="text-sm text-[#E74040]">Problems trying</h1>
                <h2 className="text-2xl mt-[24px] font-bold text-[#252B42]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h2>
            </div>
            <div className="text-sm text-[#737373] w-[545px] h-[188px] my-[74px] ms-[60px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</div>

              </div>
            <div className="flex flex-row items-center self-center justify-evenly w-[1050px] h-[264px]">
                <div className="flex flex-col w-[238px] h-[104px] text-center">
                    <h1 className="font-bold text-[#252B42] text-[58px]">15K</h1>
                    <h2 className="text-[16px] font-bold text-[#737373]">Happy Customers</h2>

                </div>
                <div className="flex flex-col w-[238px] h-[104px] text-center">
                    <h1 className="font-bold text-[#252B42] text-[58px]">150K</h1>
                    <h2 className="text-[16px] font-bold text-[#737373]">Monthly Visitors</h2>

                </div>
                <div className="flex flex-col w-[238px] h-[104px] text-center">
                    <h1 className="font-bold text-[#252B42] text-[58px]">15</h1>
                    <h2 className="text-[16px] font-bold text-[#737373]">Countries  Worldwide</h2>

                </div>
                <div className="flex flex-col w-[238px] h-[104px] text-center">
                    <h1 className="font-bold text-[#252B42] text-[58px]">100+</h1>
                    <h2 className="text-[16px] font-bold text-[#737373]">Top Partners</h2>
                </div>
            </div>
            <div>
                  <h1 className="justify-self-center my-[112px]"><Image src="/Video card.png" alt="img" width={989} height={540} /></h1>    
            </div>
            <div className="flex flex-col w-[1050px] self-center h-[670px]">
                <div className="text-center self-center flex flex-col w-[607px] h-[100px]">
                    <h1 className="text-[40px] font-bold text-[#252B42]">Meet Our Team</h1>
                    <h1 className="text-sm text-[#737373]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</h1>
                </div>
                <div className="flex flex-row self-center gap-[30px] mt-[112px]">
                    <div className="flex flex-col text-center">
                        <h1><Image src="/team1.png" alt="img" width={329} height={231} /></h1>
                        <h1 className="font-bold text-[#252B42] mt-[30px] text-[16px]">Username</h1>
                        <h2 className="font-bold text-sm mt-[10px] text-[#737373]">Profession</h2>
                        <h2 className="self-center mt-[10px]"><Image src="/media.png" alt="img" width={112} height={24} /></h2>
                    </div>
                    <div className="flex flex-col text-center">
                        <h1><Image src="/team2.jpg" alt="img" width={329} height={231}/></h1>
                        <h1 className="font-bold text-[#252B42] mt-[30px] text-[16px]">Username</h1>
                        <h2 className="font-bold text-sm mt-[10px] text-[#737373]">Profession</h2>
                        <h2 className="self-center mt-[10px]"><Image src="/media.png" alt="img" width={112} height={24}/></h2>
                    </div>
                    <div className="flex flex-col text-center">
                        <h1><Image src="/team3.jpg" alt="img" width={329} height={231}/></h1>
                        <h1 className="font-bold text-[#252B42] mt-[30px] text-[16px]">Username</h1>
                        <h2 className="font-bold text-sm mt-[10px] text-[#737373]">Profession</h2>
                        <h2 className="self-center mt-[10px]"><Image src="/media.png" alt="img" width={112} height={24}/></h2>
                    </div>
                </div>
              
            </div>
            <div className="flex-flex-col w-full h-[480px] bg-[#FAFAFA]">
                <div className="text-center">
                    <h1 className="font-bold mt-[80px] text-[40px] text-[#252B42]">Big Companies Are Here</h1>
                    </div>
                    <div className="text-center justify-self-center mt-[30px] text-[#737373] text-sm w-[547px]"><h1>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</h1></div>
                     <div className="w-[1054px] mt-[24px] justify-evenly justify-self-center items-center h-[175px] flex flex-row">
                      <h1><Image src="/t1.png" alt="img" width={153} height={34}/></h1>
                      <h1><Image src="/t2.png" alt="img" width={100} height={34}/></h1>
                      <h1><Image src="/t3.png" alt="img" width={100} height={75}/></h1>
                      <h1><Image src="/t4.png" alt="img" width={100} height={42}/></h1>
                      <h1><Image src="/t5.png" alt="img" width={100} height={62}/></h1>
                      <h1><Image src="/t6.png" alt="img" width={100} height={72}/></h1>
                     </div>
                </div>
                <div className="flex flex-row w-full h-[636px]">
                    <div className="w-[928px] bg-[#2A7CC7] h-[636px]">
                         <div className="w-[460px] text-white mt-[199px] ms-[185px]">
                            <h1 className="font-bold text-[16px]">WORK WITH US</h1>
                            <h1 className="font-bold text-[40px] mt-[24px]">Now Let&apos;s grow Yours</h1>
                            <h1 className="text-sm mt-[24px]">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </h1>
                            <button className="text-sm py-[15px] px-[40px] border border-white rounded mt-[24px] hover:bg-white hover:text-[#2A7CC7]">Button</button>
                         </div>
                    </div>
                    <div>
                        <h1><Image src="/girl2.png" alt="img" width={590} height={636} /></h1>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}