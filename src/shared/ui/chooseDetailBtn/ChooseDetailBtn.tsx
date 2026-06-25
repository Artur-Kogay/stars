'use client'

import styles from './ChooseDetailBtn.module.scss'
import clsx from "clsx";
import {ButtonHTMLAttributes} from "react";

interface ChooseDetailBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    active?: boolean;
}
function ChooseDetailBtn({children, className, active, ...props}: ChooseDetailBtnProps) {
    return (
        <button
            className={clsx(styles.btn, active && styles.active, className)}
            {...props}>
            {children}
        </button>
    );
}

export default ChooseDetailBtn;