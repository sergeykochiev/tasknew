"use client"

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname } from "next/navigation";
import { FC } from "react";

const DummyDiv: FC<{ right?: boolean, light: boolean }> = ({ right = false, light }) => {
    return <div className={`w-[16px] h-full ${light ? "group-has-[input:checked]:bg-white" : "group-has-[input:checked]:bg-bg-dark"}`}>
        <div className={`w-full h-full ${right ? "rounded-br-[16px]" : "rounded-bl-[16px]"} bg-main-blue`}></div>
    </div>
}

const HeaderTab: FC<{ children: string, redirectTo?: string, router?: AppRouterInstance, light: boolean }> = ({ children, redirectTo, router, light }) => {
    const onChange = () => {
        if (redirectTo && router) {
            router.push(redirectTo)
        }
    }

    const currentPath = usePathname()
    const isCurrent = currentPath == redirectTo!

    return <div className="flex group">
        <DummyDiv light={light} right={true} />
        <label className="h-full flex items-end">
            <div className={`header-tab-content w-[100px] h-full group-has-[input:checked]:h-[90%] text-[14px] grid place-items-center ${light ? "group-has-[input:checked]:bg-white" : "group-has-[input:checked]:bg-bg-dark"} ${light ? "group-has-[input:checked]:text-bg-dark" : "group-has-[input:checked]:text-main-gray"} group-has-[input:checked]:font-bold group-has-[input:checked]:rounded-t-[16px] hover:font-bold`}>
                {children}
            </div>
            <input type="radio" className="hidden absolute" name="header-tab" onChange={onChange} checked={isCurrent}/>
        </label>
        <DummyDiv light={light} />
    </div>
}

export default HeaderTab