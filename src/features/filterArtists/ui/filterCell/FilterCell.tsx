import styles from './FilterCell.module.scss'
import {ButtonHTMLAttributes, ReactNode} from "react";
import clsx from "clsx";

interface FilterCellProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isActiveCell: boolean;
}

function FilterCell({children, isActiveCell, ...props}: FilterCellProps) {
    return (
        <button className={clsx(styles.cell, isActiveCell && styles.active)} {...props}>
            <span>{children}</span>
        </button>
    );
}

export default FilterCell;