
import styles from './Header.module.scss'
import Image from "next/image";
import Link from "next/link";
import {Container, SwitchLocalizationBtn} from "@/shared";
import NavBar from "../navBar/NavBar";
import SearchButtonIcon from "../searchButtonIcon/SearchButtonIcon";
import SnagSearchInput from "../snagSearchInput/SnagSearchInput";

function Header() {
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
                <SnagSearchInput />
                <NavBar />
                <div className={'flex gap-2'}>
                    <SearchButtonIcon />
                    <SwitchLocalizationBtn />
                </div>
            </Container>
        </header>
    );
}

export default Header;