import { useState } from "react";
import cx from 'clsx'
import styles from './OpenClosedFilter.module.css'

export default function OpenClosedFilters() {
    const [isOpenMode, setIsOpenMode] = useState(true)
    const openModeDataSize = 1;
    const closeModeDataSize = 2;
    return (
        <>
            <OpenClosedFilter
                size={openModeDataSize}
                state="Open"
                selected={isOpenMode}
                onClick={() => setIsOpenMode(true)}

            />
            <OpenClosedFilter
                size={closeModeDataSize}
                state="closed"
                selected={!isOpenMode}
                onClick={() => setIsOpenMode(false)}

            />
        </>
    )
}

function OpenClosedFilter({ size, state, selected, onClick }) {
    return (
        <span
            role="button"
            className={cx(styles.textFilter, { [styles.selected]: selected })}
            onClick={onClick}
        >
            {size}{state}
        </span>
    )
}