'use client'

import styles from './NavBar.module.scss'
import { HEADER_NAV_LINKS } from "@/shared";
import { Link, usePathname } from '@/shared/lib/localizations/i18n/routing';
import { useTranslations } from "next-intl";

function NavBar() {
    const pathname = usePathname();
    const localizer = useTranslations();

    return (
        <nav className={styles.navbar}>
            <ul>
                {
                    HEADER_NAV_LINKS.map(({ label, route }) => (
                        <li key={label}>
                            <Link
                                className={pathname === route ? styles.activeLink : ''}
                                href={route}
                            >
                                {localizer(label)}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default NavBar;