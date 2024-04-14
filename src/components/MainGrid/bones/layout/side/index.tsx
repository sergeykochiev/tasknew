import { FC } from "react";

const SideGridLayout: FC<{
    children: React.ReactNode
}> = ({
    children
}) => {
    return <div className="grid gap-[16px] grid-cols-side auto-rows-main">
        {children}
    </div>
}

export default SideGridLayout