'use client'

import styles from './SearchInput.module.scss'
import {InputHTMLAttributes} from 'react'
import {Search} from 'lucide-react'
import clsx from "clsx";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

function SearchInput({className, onClick, ...props}: SearchInputProps) {
    return (
        <div
            className={clsx(styles.searchWrapper, className)} onClick={onClick}>
            <Search className={styles.icon} aria-hidden size={18}/>
            <input
                className={styles.searchInput}
                {...props}
                onClick={onClick}/>
        </div>
    );
}

export default SearchInput;