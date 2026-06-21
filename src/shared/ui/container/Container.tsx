import styles from './Container.module.scss'
import clsx from "clsx";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

function Container({children, className}: ContainerProps) {
    return (
        <div className={clsx(styles.container, className)}>
            {children}
        </div>
    );
}

export default Container;