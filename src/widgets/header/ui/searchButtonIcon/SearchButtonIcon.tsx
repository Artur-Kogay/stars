'use client'

import styles from './SearchButtonIcon.module.scss'
import {Search} from 'lucide-react'
import {isSearchOverlayOpenAtom} from "@/shared";
import {useAtom} from "jotai";

function SearchButtonIcon() {
    const [_, setIsOverlayActive] = useAtom<boolean>(isSearchOverlayOpenAtom)

    return (
        <button className={styles.searchBtn}
                onClick={() => setIsOverlayActive(true)}>
            <Search size={18}/>
        </button>
    );
}

export default SearchButtonIcon;