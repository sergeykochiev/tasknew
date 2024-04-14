import { FC } from "react"
import { Source_Code_Pro } from "next/font/google"

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] })

const BlankHeader: FC = () => {
    return <div className={`${sourceCodePro.className} h-[44px] w-full bg-main-blue text-main-dark flex justify-center`}>
        <div className="flex justify-center items-center w-[858px]">
            <span className="font-bold text-[24px] tracking-[0.25em]">TASK</span>
        </div>
    </div>
}

export default BlankHeader