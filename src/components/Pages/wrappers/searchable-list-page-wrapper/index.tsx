import { FC } from "react"

const W1S: FC<{ children?: React.ReactNode, light: boolean }> = ({ children, light }) => {
    return <div className={`flex flex-col items-center gap-[16px] mt-[-57px] ${light ? "bg-white" : "bg-bg-dark"} min-h-[100svh]`}>{children}</div>
}

export default W1S