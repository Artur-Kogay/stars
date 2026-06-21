import styles from './Header.module.scss'
import Image from "next/image";
import Link from "next/link";
import {Container, SearchInput, SwitchLocalizationBtn} from "@/shared";
import NavBar from "../navBar/NavBar";
import {useTranslations} from "next-intl";

function Header() {
    const localizer = useTranslations()

    return (
        <header className={"h-[63px] border-b border-[color(display-p3_0.849_0.849_0.849)"}>
            <Container className={'flex h-full w-full justify-between items-center gap-6'}>
                <Link href={'/'} className={'max-h-[36px]'}>
                    <Image
                        src={'/icons/headerLogo.svg'}
                        priority
                        className={'max-h-[36px]'}
                        width={160}
                        height={36}
                        alt={'logo'} />
                </Link>
                <SearchInput className={styles.searchInput} placeholder={`${localizer('search')}...`} />
                <NavBar />
                <SwitchLocalizationBtn />
            </Container>
        </header>
    );
}

export default Header;