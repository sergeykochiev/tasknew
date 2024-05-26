"use client"

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Template({children}: {children: React.ReactNode}) {
    const router = useRouter()
    return (
        <div className="flex flex-col gap-4">
            <Button onClick={() => router.push("/tasks/created")}>Завершить</Button>
            {children}
        </div>
    )
}