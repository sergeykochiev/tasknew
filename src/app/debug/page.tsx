"use client"

import { seedTempDB } from "@/common/temp-data";

export default function Page() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-[16px]">
            <div className="font-bold">Debug</div>
            <div className="py-[8px] px-[16px] bg-main-dark rounded-[12px] text-tile-gray" onClick={seedTempDB}>Seed IDB</div>
        </div>
    )
}