import { FC } from "react"
import { Source_Code_Pro } from "next/font/google"
import Link from "next/link"

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] })

const BlankHeader: FC = () => {
    return <div className={`${sourceCodePro.className} h-[44px] w-full bg-main-blue text-main-dark flex justify-center`}>
        <div className="flex justify-center items-center w-[858px]">
            <Link className="font-bold text-[24px] tracking-[0.25em]" href="/">TASK</Link>
        </div>
    </div>
}

export default BlankHeader