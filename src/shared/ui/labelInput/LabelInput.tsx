import styles from './LabelInput.module.scss'
import {InputHTMLAttributes} from "react";

interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

function LabelInput({label, ...props}: LabelInputProps) {
    return (
        <label className={styles.label}>
            {label}
            <input className={styles.labelInput} {...props}/>
        </label>
    );
}

export default LabelInput;