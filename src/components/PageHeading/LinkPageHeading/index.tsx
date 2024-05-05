import { sourceCodePro } from "@/common/fonts";
import Link, { LinkProps } from "next/link";
import { FC } from "react";

interface LinkPageHeadingProps extends LinkProps {
    children: string
    stretch?: boolean
    name: string
    determineIfActive(): boolean
}

const LinkPageHeading: FC<LinkPageHeadingProps> = ({ children, stretch = false, name, determineIfActive, ...props }) => {
    return (
        <Link {...props} className={`${sourceCodePro.className} transition-all text-[48px] [&:not(:has(input:checked))]:hover:text-main-dark text-blanktile font-bold has-[input:checked]:text-tile-gray ${stretch && "w-full"}`}>
            {children}
            <input type="radio" name={name} checked={determineIfActive()} readOnly className="hidden absolute"/>
        </Link>
    )
}

export default LinkPageHeading