import styles from './Tabs.module.css';
import cx from 'clsx'
import { useState } from 'react';

const tapList = ['Code', 'Issue', 'Pull Request'];

export default function Taps() {
    const [selectedTapIdx, setSelectedTapIdx] = useState(0)
    return (
        <ul className={styles.tapList}>
            {tapList.map((tap, idx) => (
                <Tap
                    key={`${idx}`}
                    title={tap}
                    selected={idx === selectedTapIdx}
                    onClick={() => setSelectedTapIdx(idx)}
                />
            ))}
        </ul>
    )
}


function Tap({ title, number, selected, onClick }) {
    return (
        <li>
            <button
                onClick={onClick}
                className={cx(styles.tap, { [styles.selected]: selected })}>
                <span>{title}</span>
                {number && <div className={styles.circle}>{number}</div>}
            </button>
        </li>
    )
}