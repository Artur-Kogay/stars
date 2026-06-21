import styles from './SearchInput.module.scss'
import {InputHTMLAttributes} from 'react'
import {Search, X} from 'lucide-react'
import clsx from "clsx";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

function SearchInput({className, ...props}: SearchInputProps) {
    return (
        <div className={clsx(styles.searchWrapper, className)}>
            <Search className={styles.icon} aria-hidden size={18}/>
            <input className={styles.searchInput} {...props} />
        </div>
    );
}

export default SearchInput;