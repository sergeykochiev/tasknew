import { FC } from "react";

const CenterGridLayout: FC<{
    children: React.ReactNode
}> = ({
    children
}) => {
    return <div className="grid grid-cols-center gap-[16px] auto-rows-main">
        {children}
    </div>
}

export default CenterGridLayout