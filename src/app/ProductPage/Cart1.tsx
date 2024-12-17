const Cart1 = (props: any) => {
    return(
        <div className="flex flex-col w-[238px] bg-white h-[442px]">
            <h1>{props.pic}</h1>
            <div className="ms-[25px] mt-[25px] flex flex-col">
            <h1 className="text-[#252B42] text-[16px] font-bold">{props.naam}</h1>
            <h1 className="font-bold text-sm text-[#737373] mt-[10px]">{props.or}</h1>
            <div className="flex flex-row mt-[10px] gap-[5px]">
                <h1 className="text-[#BDBDBD] font-bold text-[16px]">{props.pkr}</h1>
                <h1 className="font-bold text-[16px] text-[#23856D]">{props.disc}</h1>
            </div>
            </div>

        </div>
    )
}
export default Cart1