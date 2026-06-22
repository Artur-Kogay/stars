import styles from './Spinner.module.scss'
import clsx from "clsx";

interface SpinnerProps {
    className?: string;
}

function Spinner({className}: SpinnerProps) {
    return (
        <span className={clsx(styles.spinner, className)}></span>
    );
}

export default Spinner;