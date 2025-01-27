
import Images from "next/image"

const Cart1 = () => {

    const Products1 = [
        { Image: "/C1P1.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
        { Image: "/C1P2.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
        { Image: "/C1P3.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
        { Image: "/C1P4.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
    ]
    const Products2 = [
        { Image: "/C2P1.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
        { Image: "/C2P2.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
        { Image: "/C2P3.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
        { Image: "/C2P4.png", Name: "Graphic Design", Department: "English Department", price1: 16.48, price2: 6.48, Reviews: "/product-colors.png" },
    ]

    return (

        <div className="flex w-full h-[1652px] bg-white">
            <div className="flex flex-col w-[1124px] h-[1652px] mx-[220px] py-[80px] gap-[80px]">
                <div className="flex flex-col w-[692px] h-[102px] mx-[216px] gap-[10px]">
                    <h1 className="flex text-[20px] leading-[30px] text-[#737373] w-[191px] h-[30px] mx-[250px]">Featured Products</h1>
                    <p className="flex text-[24px] font-bold leading-[32px] text-[#252B42] tracking-[0.1px] w-[330px] h-[32px] mx-[196px]">BESTSELLER PRODUCTS</p>
                    <p className="flex text-[14px] leading-[20px] text-[#737373] w-[342px] h-[20px] mx-[174.5px] tracking-[0.2px]">Problems trying to resolve the conflict between </p>
                </div>

                <div className="flex w-[1049px] h-[615px] gap-[30px] mx-[37.5px]">
                    {Products1.map((FeaturedProducts, index) => {
                        return (
                            <div key={index} className="flex flex-col w-[240px] h-[615px]">
                                <Images src={FeaturedProducts.Image} alt={FeaturedProducts.Name} width={239} height={615} className="w-[239px] h-[427px] object-cover" />
                                <div className="flex flex-col  w-full h-[188px] px-[25px] pt-[25px] pb-[35px] gap-[10px]">
                                    <p className="text-[16px] font-bold leading-[24px] text-[#252B42] w-[131px] h-[24px] mx-[29px] text-center">{FeaturedProducts.Name}</p>
                                    <p className="text-[14px] font-bold leading-[24px] text-[#737373] tracking-[0.2px] w-[146px] h-[24px] mx-[21.5px] text-center">{FeaturedProducts.Department}</p>
                                    <div className="flex flex-row w-[108px] h-[34px] mx-[40.5px] gap-[5px] px-[3px] py-[5px]">
                                        <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD] tracking-[0.1px] w-[52px] h-[24px] mx-[3px]">${FeaturedProducts.price1}</p>
                                        <p className="text-[14px] font-bold leading-[24px] text-[#23856D] tracking-[0.2px] w-[45px] h-[24px] ">${FeaturedProducts.price2}</p>
                                    </div>
                                    <Images src={FeaturedProducts.Reviews} alt="circles" width={82.23} height={16} className="w-[82.23px] h-[16px] mx-[53.38px] object-cover" />
                                </div>
                            </div>

                        )
                    }
                    )}
                </div>
                <div className="flex w-[1049px] h-[615px] gap-[30px] mx-[37.5px]">
                    {Products2.map((FeaturedProducts, index) => {
                        return (
                            <div key={index} className="flex flex-col w-[240px] h-[615px]">
                                <Images src={FeaturedProducts.Image} alt={FeaturedProducts.Name} width={239} height={615} className="w-[239px] h-[427px] object-cover" />
                                <div className="flex flex-col w-full h-[188px] px-[25px] pt-[25px] pb-[35px] gap-[10px]">
                                    <p className="text-[16px] font-bold leading-[24px] text-[#252B42] w-[131px] h-[24px] mx-[29px] text-center">{FeaturedProducts.Name}</p>
                                    <p className="text-[14px] font-bold leading-[24px] text-[#737373] tracking-[0.2px] w-[146px] h-[24px] mx-[21.5px] text-center">{FeaturedProducts.Department}</p>
                                    <div className="flex flex-row w-[108px] h-[34px] mx-[40.5px] gap-[5px] px-[3px] py-[5px]">
                                        <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD] tracking-[0.1px] w-[52px] h-[24px] mx-[3px]">${FeaturedProducts.price1}</p>
                                        <p className="text-[14px] font-bold leading-[24px] text-[#23856D] tracking-[0.2px] w-[45px] h-[24px] ">${FeaturedProducts.price2}</p>
                                    </div>
                                    <Images src={FeaturedProducts.Reviews} alt="circles" width={82.23} height={16} className="w-[82.23px] h-[16px] mx-[53.38px] object-cover" />
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
            </div>
        </div>
    )
}
export default Cart1




