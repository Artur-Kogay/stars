'use client';

import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

import styles from './SwitchThemeBtn.module.scss';
import clsx from "clsx";

const OPTIONS = [
    { value: 'light', Icon: Sun },
    { value: 'system', Icon: Monitor },
    { value: 'dark', Icon: Moon },
] as const;

type Theme = 'light' | 'dark' | 'system';

const SwitchThemeBtn = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className={styles.root} role="radiogroup">
            {OPTIONS.map(({ value, Icon }) => {
                const active = theme === value;

                return (
                    <button
                        key={value}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        className={clsx(styles.option, active && styles.optionActive)}
                        onClick={() => setTheme(value)}
                    >
                        <Icon size={16} aria-hidden />
                    </button>
                );
            })}
        </div>
    );
};

export default SwitchThemeBtn;