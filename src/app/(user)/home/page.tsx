import DefButton from "@/components/Button";
import W1 from "@/components/Pages/wrappers/list-page-wrapper";
import HomePageSection from "@/components/Section/home/regular";
import CodeInputSection from "@/components/Section/home/code";
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