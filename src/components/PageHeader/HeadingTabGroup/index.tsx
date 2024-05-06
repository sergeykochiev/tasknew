import { FC } from "react";

const HeadingTabGroup: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex gap-[32px]">{children}</div>
    )
}

export default HeadingTabGroup