'use client'

import styles from './SnagSearchInput.module.scss'
import {Search} from 'lucide-react'
import {useTranslations} from "next-intl";
import {useAtom} from "jotai";
import {isSearchOverlayOpenAtom} from "@/shared";

function SnagSearchInput() {
    const localizer = useTranslations()
    const [_, setIsOverlayActive] = useAtom<boolean>(isSearchOverlayOpenAtom)

    return (
        <button className={styles.searchWrapper}
                onClick={() => setIsOverlayActive(true)}>
            <Search aria-hidden size={18}/>
            <span>{localizer('search')}</span>
        </button>
    );
}

export default SnagSearchInput;