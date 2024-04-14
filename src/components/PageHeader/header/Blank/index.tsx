import { FC } from "react"

const BlankPageHeader: FC<{
    children: string | React.ReactNode
}> = ({
    children
}) => {
    return <div className="z-10 flex items-center justify-center pt-[64px] p-[16px] w-full text-[20px] text-white bg-bg-dark">
        <div className="h-[41px] flex items-center font-bold gap-[6px]">{children}</div>
    </div>
}

export default BlankPageHeader