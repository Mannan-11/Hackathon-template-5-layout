import Image from "next/image"

export default function Desktop1 (){
    return(
        <div className="w-[1440px] justify-self-center">
        <div className="h-[711px] mt-20 bg-[#23856D] font-Montserat w-full">
            <div className="flex flex-row">
                <div className="flex flex-col w-[509px] mt-24 ms-52 h-[432px]">
                    <h1 className="uppercase text-white font-normal mt-16 text-xl">summer 2020</h1>
                    <h2 className="text-white font-bold mt-5 font text-[58px]">Vita Classic Product</h2>
                    <h3 className="text-white font-normal mt-5 text-sm w-[341px]">We know how large objects will act, We know how are objects will act, We know</h3>
                    <div className="flex mt-8 justify- flex-row">
                        <h1 className="font-bold text-2xl p-3 text-white">$16.48</h1>
                        <button className="ms-5 font-bold text-sm text-white rounded-[5px] hover:bg-green-400 bg-[#2DC071] px-[40px] py-[15px] uppercase">add to cart</button>
                        </div>
                </div>
                <div className="mt-[114px]">
                                <Image src="/m1.png" alt="img" width={443}  height={685}/>
                        </div>              
                  </div>
        </div>
     <div className="flex flex-row w-[1440px] font-Montserat">
        <div className="px-24">
            <Image src="/m2.png" alt="img" 
            width={704}
            height={682} />
        </div>
        <div className="flex flex-col mt-44">
            <h1 className="uppercase font-bold text-[16px] text-[#BDBDBD]">summer 2020</h1>
             <h2 className="font-bold w-[375px] text-[40px] mt-5">Part of the Neural Univers</h2>
             <h3 className="mt-8 w-[300px]">We know how large objects will act, but things on a small scale.</h3>
             <div className="flex mt-10  flex-row">
                <button className="py-[15px] font-bold text-sm px-[40px] uppercase text-white rounded-[5px] hover:font-black bg-[#2DC071]">buy now</button>
                <button className="py-[15px] font-bold text-sm px-[40px] uppercase rounded-[5px] ms-2 text-[#2DC071] border hover:font-black border-[#2DC071]">read more</button>
                </div>          
        </div>
     </div>
        </div>
    )
}