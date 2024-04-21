"use client"

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const DummyDiv: FC<{ right?: boolean, light: boolean }> = ({ right = false, light }) => {
    return <div className={`transition-all w-[16px] h-full ${light ? "group-has-[input:checked]:bg-white" : "group-has-[input:checked]:bg-bg-dark"}`}>
        <div className={`w-full h-full ${right ? "rounded-br-[16px]" : "rounded-bl-[16px]"} bg-main-blue`}></div>
    </div>
}

interface HeaderTabProps extends LinkProps {
    children: string
    light: boolean
    representedPaths?: string[]
}

const HeaderTab: FC<HeaderTabProps> = ({ children, href, light, representedPaths, ...props }) => {
    const currentPath = usePathname()
    const isCurrent = representedPaths ? representedPaths.includes(currentPath) : currentPath == href

    return <div className="flex group">
        <DummyDiv light={light} right={true} />
        <label className="h-full flex items-end">
            <Link href={href} className={`transition-all header-tab-content w-[100px] h-full group-has-[input:checked]:h-[90%] select-none cursor-pointer group-has-[input:checked]:cursor-default text-[14px] grid place-items-center ${light ? "group-has-[input:checked]:bg-white" : "group-has-[input:checked]:bg-bg-dark"} ${light ? "group-has-[input:checked]:text-bg-dark" : "group-has-[input:checked]:text-main-gray"} group-has-[input:checked]:font-bold rounded-t-[16px] hover:font-bold`} {...props}>
                {children}
            </Link>
            <input type="radio" className="hidden absolute" name="header-tab" readOnly checked={isCurrent}/>
        </label>
        <DummyDiv light={light} />
    </div>
}

export default HeaderTab