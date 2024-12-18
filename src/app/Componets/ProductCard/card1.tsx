import React from "react"
import Card2 from "./card2";
import Image from "next/image"

const Card1 = () => {
    const image:any = <Image src="/p1.png" alt="img"
    width={239}
    height={427} />
    const h:String = "Graphic Design"
    const p:String = "English Department"
    const price:String = "$16.48"
    const prices:String = "$6.48"
    const colors:any = <Image src="/color.png" alt="img" width={82} height={16} />

    const image1:any = <Image src="/p2.png" alt="img"
    width={239}
    height={427} />
 
    const image2:any = <Image src="/p3.png" alt="img"
    width={239}
    height={427} />

    const image3:any = <Image src="/p4.png" alt="img"
    width={239}
    height={427} />
  
    const image4:any = <Image src="/p5.png" alt="img"
    width={239}
    height={427} />
  
    const image5:any = <Image src="/p6.png" alt="img"
    width={239}
    height={427} />

    const image6:any = <Image src="/p7.png" alt="img"
    width={239}
    height={427} />
  
    const image7:any = <Image src="/p8.png" alt="img"
    width={239}
    height={427} />
  


    return(
       <div className="flex flex-col font-Montserat justify-self-center"> 
        <div className='text-center flex flex-col'>
                                <h1 className='mt-44 font-normal text-xl text-[#737373]'>Featured Products</h1>
                                <h2 className='uppercase mt-4 font-bold text-2xl text-[#252B42]'>bestseller products</h2>
                                <h3 className='mt-2 font-normal text-sm text-[#737373]'>Problems trying to resolve the conflict between</h3>
                             </div>
        <div className="flex flex-row justify-self-center w-[1049px] gap-[30px]">
             <Card2 
             img={image}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
             <Card2 
             img={image1}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
<Card2 
             img={image2}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
<Card2 
             img={image3}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
        </div>

<div className="flex flex-row justify-self-center w-[1049px] gap-[30px]">
   
<Card2 
             img={image4}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             /> 
             <Card2 
             img={image5}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
             <Card2 
             img={image6}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
             <Card2 
             img={image7}
             h={h}
             p={p}
             price={price}
             prices={prices}
             circle={colors}
             />
</div>

        </div>
    )
} 
export default Card1