'use client'

import styles from './SwitchLocalizationBtn.module.scss'
import { Globe } from 'lucide-react';
import { useLocale } from "next-intl";
import { useState } from "react";
import { useRouter, usePathname } from '../../lib/localizations/i18n/routing';
import { LOCALIZATIONS } from '../../lib/consts/variablesLocalization.const'

function SwitchLocalizationBtn() {
    const [isActiveBtn, setIsActiveBtn] = useState(false);
    const currentLocale = useLocale();

    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (nextLocale: string) => {
        router.replace(pathname, { locale: nextLocale });
        setIsActiveBtn(false);
    };

    return (
        <div className={styles.switcher}>
            <button
                className={styles.switcher_btn}
                onClick={() => setIsActiveBtn(!isActiveBtn)}
                aria-expanded={isActiveBtn}
            >
                <Globe size={16} aria-hidden />
                <span>{currentLocale.toUpperCase()}</span>
            </button>

            {isActiveBtn && (
                <ul className={styles.variables}>
                    {LOCALIZATIONS.map((loc) => (
                        <li
                            key={loc}
                            onClick={() => handleLocaleChange(loc)}
                            className={currentLocale === loc ? styles.active : ''}
                        >
                            {loc.toUpperCase()}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SwitchLocalizationBtn;