'use client'
import { Minus, Plus } from 'lucide-react';
import styles from './Counter.module.scss'

interface CounterProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

function Counter({count = 1, setCount}: CounterProps) {

    const increment = () => {
        setCount(prev => prev + 1);
    }

    const decrement = () => {
        setCount(prev => prev > 1 ? prev - 1 : prev)
    }
    return (
        <div className={styles.counter}>
            <button onClick={decrement}><Minus size={20}/></button>
            <span>{count}</span>
            <button onClick={increment}><Plus size={20}/></button>
        </div>
    );
}

export default Counter;