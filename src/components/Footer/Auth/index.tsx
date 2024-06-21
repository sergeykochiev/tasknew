import TTLink from "@/components/CustomLink";

export default function AuthFooter() {
    return <footer className="h-[57px] w-full flex gap-big items-center bg-tt-white text-dark text-caption justify-center">
        <div>2024. Все права защищены</div>
        <div className="flex gap-def">
            <TTLink href="/about-us">О нас</TTLink>
            <TTLink href="/contacts">Контакты</TTLink>
        </div>
    </footer>
}