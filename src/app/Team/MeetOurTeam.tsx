import Images from "next/image"

export default function MeetourTeam() {
    const Row1 = [
        { Image: "/T4.png", Name: "username", Department: "profession", Sm: "/SM.png" },
        { Image: "/T5.jpg", Name: "username", Department: "profession", Sm: "/SM.png" },
        { Image: "/T6.jpg", Name: "username", Department: "profession", Sm: "/SM.png" },

    ]
    const Row2 = [
        { Image: "/T3.png", Name: "username", Department: "profession", Sm: "/SM.png" },
        { Image: "/T7.jpg", Name: "username", Department: "profession", Sm: "/SM.png" },
        { Image: "/T1.png", Name: "username", Department: "profession", Sm: "/SM.png" },
    ]
    const Row3 = [
        { Image: "/T2.png", Name: "username", Department: "profession", Sm: "/SM.png" },
        { Image: "/T8.png", Name: "username", Department: "profession", Sm: "/SM.png" },
        { Image: "/T9.jpg", Name: "username", Department: "profession", Sm: "/SM.png" },
    ]
    return (
        <div className="flex flex-col w-[1535px] mt-[530px] h-[1759px]">
            <div className="flex flex-col w-[1050px] h-[1759px] mx-[242.5px] py-[112px] gap-[112px]">
                <h1 className="flex flex-col w-[607px] h-[50px] px-[141.5px] mx-[221.5px] text-[40px] font-bold text-[#252B42] leading-[50px] tracking-[0.2px]">Meet Our Team</h1>
                <div className="flex w-[1034px] mx-2 h-[383px] gap-[30px]">

                    {Row1.map((Teams, index) => {
                        return (
                            <div key={index} className="flex flex-col w-[324.6px] h-[383px]">
                                <Images src={Teams.Image} alt={Teams.Name} width={324.6} height={231} className="w-[324.6px] h-[231px] object-cover" />
                                <div className="flex flex-col w-[324.6px] h-[152px] px-[30px] py-[30px] gap-[10px]">
                                    <p className="text-[16px] font-bold leading-[24px] text-[#252B42] w-[83px] h-[24px] mx-[94.5px] text-center">{Teams.Name}</p>
                                    <p className="text-[14px] font-bold leading-[24px] text-[#737373] tracking-[0.2px] w-[77px] h-[24px] mx-[97.5px] text-center">{Teams.Department}</p>
                                    <Images src={Teams.Sm} alt={Teams.Sm} width={112} height={24} className="w-[112px] h-[24px] object-cover mx-[80px]" />

                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
                <div className="flex w-[1034px] mx-2 h-[383px] gap-[30px]">

                    {Row2.map((Teams, index) => {
                        return (
                            <div key={index} className="flex flex-col w-[324.6px] h-[383px]">
                                <Images src={Teams.Image} alt={Teams.Name} width={324.6} height={231} className="w-[324.6px] h-[231px] object-cover" />
                                <div className="flex flex-col w-[324.6px] h-[152px] px-[30px] py-[30px] gap-[10px]">
                                    <p className="text-[16px] font-bold leading-[24px] text-[#252B42] w-[83px] h-[24px] mx-[94.5px] text-center">{Teams.Name}</p>
                                    <p className="text-[14px] font-bold leading-[24px] text-[#737373] tracking-[0.2px] w-[77px] h-[24px] mx-[97.5px] text-center">{Teams.Department}</p>
                                    <Images src={Teams.Sm} alt={Teams.Sm} width={112} height={24} className="w-[112px] h-[24px] object-cover mx-[80px]" />

                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
                <div className="flex w-[1034px] mx-2 h-[383px] gap-[30px]">

                    {Row3.map((Teams, index) => {
                        return (
                            <div key={index} className="flex flex-col w-[324.6px] h-[383px]">
                                <Images src={Teams.Image} alt={Teams.Name} width={324.6} height={231} className="w-[324.6px] h-[231px] object-cover" />
                                <div className="flex flex-col w-[324.6px] h-[152px] px-[30px] py-[30px] gap-[10px]">
                                    <p className="text-[16px] font-bold leading-[24px] text-[#252B42] w-[83px] h-[24px] mx-[94.5px] text-center">{Teams.Name}</p>
                                    <p className="text-[14px] font-bold leading-[24px] text-[#737373] tracking-[0.2px] w-[77px] h-[24px] mx-[97.5px] text-center">{Teams.Department}</p>
                                    <Images src={Teams.Sm} alt={Teams.Sm} width={112} height={24} className="w-[112px] h-[24px] object-cover mx-[80px]" />

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