"use client"

import PATH_WITH_DARK_THEME from "@/common/const/light-paths";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";

const DefTab: FC<{
    children?: string
    router: AppRouterInstance
    redirectTo: string
    light: boolean
}> = ({
    children,
    router,
    redirectTo,
    light
}) => {
    const onChange = () => {
        router.push(redirectTo)
    }

    const currentPath = usePathname()
    const isCurrent = currentPath.split('/')[2] == redirectTo.split('/')[2]
    
    return (
        <label className="group z-10 w-full">
            <div className={`text-[14px] transition-all h-[41px] w-full grid place-items-center bg-transparent rounded-[16px] group-has-[input:checked]:text-bg-dark ${light ? "group-has-[input:checked]:bg-main-blue text-bg-dark" : "group-has-[input:checked]:bg-tile-gray text-tile-gray"}`}>
                {children || "Example"}
            </div>
            <input className="hidden absolute" type="radio" name="menu-tab-group" checked={isCurrent} onChange={onChange}></input>
        </label>
    )
}

export default DefTab