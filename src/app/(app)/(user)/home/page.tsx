import PageHeaderEvo from "@/components/PageHeaderEvo";
import HeadingTab from "@/components/PageHeaderEvo/HeadingTab";
import { CURRENT_USER } from "@/common/temp-data";

export default function Page() {
    const currentUser = CURRENT_USER
    return (
        <>
            <PageHeaderEvo>
                <HeadingTab>{"Добро пожаловать, " + currentUser.nickname}</HeadingTab>
            </PageHeaderEvo>
        </>
    )
}