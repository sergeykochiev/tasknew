import { CURRENT_USER } from "@/common/temp-data";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import PageHeading from "@/components/PageHeading";

export default function Page() {
    const currentUser = CURRENT_USER
    return (
        <div className="flex flex-col gap-[16px] w-[848px]">
            <div className="flex items-center gap-[16px] text-tile-gray text-[16px]">
                <div className="flex">У вас есть код задания?</div>
                <form className="flex gap-[8px] w-full">
                    <InputField type="number" placeholder="Код задания"/>
                    <Button color="blue" type="submit">Найти</Button>
                </form>
            </div>
            <div className="flex items-center gap-[16px] text-tile-gray text-[16px]">
                <PageHeading>Последнее</PageHeading>
            </div>
        </div>
    )
}