import { FC } from "react"

const W1: FC<{ children?: React.ReactNode, light: boolean }> = ({ children, light }) => {
    return <div className={`flex flex-col items-center gap-[16px] ${light ? "bg-white" : "bg-bg-dark"} h-full`}>{children}</div>
}

export default W1