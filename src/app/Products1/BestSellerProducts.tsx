
import Images from "next/image"


export default function BestSellerProduct() {
    const Products1 = [
        { Image: "/C6P1.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48 },
        { Image: "/C6P2.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48 },
        { Image: "/C6P3.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48 },
        { Image: "/C6P4.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48 },
    ]
    const Products2 = [
        { Image: "/C7P1.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48 },
        { Image: "/C7P2.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48 },
        { Image: "/C6P1.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48 },
        { Image: "/C6P2.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48 },
    ]


    return (
        <main>
            <div className="flex flex-col w-[1535px] h-[1260px] bg-[#FAFAFA] font-Montserat">

                <div className="flex flex-col w-[1124px] h-[1086px] ml-[205.5px] gap-6 py-12">
                    <div className="flex flex-col w-[1040px] h-[32px] ml-[46px]">
                        <h1 className="w-[309px] h-[32px] text-[#252B42] text-[24px] leading-[32px] tracking-[0.1px]">BESTSELLER PRODUCTS</h1>
                    </div>
                    <line className="border-b-2 border-[#ECECEC] w-[1042px] h-[2px] ml-[41px]"></line>

                    <div className="flex w-[1049px] h-[442px] gap-[30px] ml-[37.5px]">
                        {Products1.map((FeaturedProducts, index) => {
                            return (
                                <div key={index} className="flex flex-col w-[238px] h-[488px]">
                                    <Images src={FeaturedProducts.Image} alt={FeaturedProducts.Name} width={239} height={280} className="w-[239px] h-[280px] object-cover" />
                                    <div className="flex flex-col w-full h-[162px] px-[25px] pt-[25px] pb-[35px] gap-[10px]">
                                        <p className="text-[16px] font-bold leading-[24px] text-[#252B42] w-[131px] h-[24px] mx-[29px] text-center">{FeaturedProducts.Name}</p>
                                        <p className="text-[14px] font-bold leading-[24px] text-[#737373] tracking-[0.2px] w-[153px] h-[24px] mx-[21.5px] text-center">{FeaturedProducts.Department}</p>
                                        <div className="flex w-[108px] h-[34px] mx-[40.5px] gap-[5px] px-[3px] py-[5px]">
                                            <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD] tracking-[0.1px] w-[52px] h-[24px] mx-[3px]">${FeaturedProducts.price1}</p>
                                            <p className="text-[14px] font-bold leading-[24px] text-[#23856D] tracking-[0.2px] w-[45px] h-[24px] ">${FeaturedProducts.price2}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                    <div className="flex w-[1049px] h-[442px] gap-[30px] ml-[37.5px]">
                        {Products2.map((FeaturedProducts, index) => {
                            return (
                                <div key={index} className="flex flex-col w-[238px] h-[488px]">
                                    <Images src={FeaturedProducts.Image} alt={FeaturedProducts.Name} width={239} height={280} className="w-[239px] h-[280px] object-cover" />
                                    <div className="flex flex-col  w-full h-[162px] px-[25px] pt-[25px] pb-[35px] gap-[10px]">
                                        <p className="text-[16px] font-bold leading-[24px] text-[#252B42] w-[131px] h-[24px] mx-[29px] text-center">{FeaturedProducts.Name}</p>
                                        <p className="text-[14px] font-bold leading-[24px] text-[#737373] tracking-[0.2px] w-[153px] h-[24px] mx-[21.5px] text-center">{FeaturedProducts.Department}</p>
                                        <div className="flex w-[108px] h-[34px] mx-[40.5px] gap-[5px] px-[3px] py-[5px]">
                                            <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD] tracking-[0.1px] w-[52px] h-[24px] mx-[3px]">${FeaturedProducts.price1}</p>
                                            <p className="text-[14px] font-bold leading-[24px] text-[#23856D] tracking-[0.2px] w-[45px] h-[24px] ">${FeaturedProducts.price2}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
                <div className="flex w-[1535px] h-[175px] bg-[#FAFAFA]">
                    <div className="flex w-[1050px] h-[175px] mx-[242.5px] gap-[30px] py-[50px]">
                        <div className="flex w-[153px] h-[34px] my-[20.5px]">
                            <Images src="/B1.png" alt="Hooli" width={153} height={34} />
                        </div>
                        <div className="flex w-[146px] h-[59px] my-[8px] px-7">
                            <Images src="/B2.png" alt="Lyft" width={83} height={59} />
                        </div>
                        <div className="flex w-[152px] h-[75px] px-[25px]">
                            <Images src="/B3.png" alt="Cap" width={102} height={75} />
                        </div>
                        <div className="flex w-[151px] h-[42px] my-[16.5px] px-6">
                            <Images src="/B4.png" alt="Stripe" width={103} height={42} />
                        </div>
                        <div className="flex w-[151px] h-[62px] my-[6.5px] px-6">
                            <Images src="/B5.png" alt="aws" width={104} height={62} />
                        </div>
                        <div className="flex w-[151px] h-[72px] my-[1.5px] px-8">
                            <Images src="/B6.png" alt="Flick" width={76} height={72} />
                        </div>

                    </div>

                </div>


            </div>
        </main>
    )
}