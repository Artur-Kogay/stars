import clsx from "clsx";
import styles from './Loader.module.scss';

type LoaderSize = 'sm' | 'md' | 'lg';

export interface LoaderProps {
    size?: LoaderSize;

    fullScreen?: boolean;

    overlay?: boolean;

    label?: string;

    ariaLabel?: string;
    className?: string;
}

const Loader = ({
                           size = 'md',
                           fullScreen = false,
                           overlay = false,
                           label,
                           ariaLabel,
                           className,
                       }: LoaderProps) => {
    const wrapperClass = clsx(
        styles.wrapper,
        fullScreen && styles.fullScreen,
        overlay && styles.overlay,
        className,
    );

    return (
        <div
            className={wrapperClass}
            role="status"
            aria-live="polite"
            aria-label={label ?? ariaLabel ?? 'Loading'}
        >
            <span className={clsx(styles.spinner, styles[`size_${size}`])} aria-hidden />
            {label ? <span className={styles.label}>{label}</span> : null}
        </div>
    );
};

export default Loader;