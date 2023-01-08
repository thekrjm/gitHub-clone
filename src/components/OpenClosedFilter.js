import cx from 'clsx';
import styles from './OpenClosedFilter.module.css';

export default function OpenClosedFilters({ isOpenMode, onClickMode }) {
    // const openModeDataSize = 1;
    // const closeModeDataSize = 2;
    return (
        <>
            <OpenClosedFilter state="Open" selected={isOpenMode} onClick={() => onClickMode('open')} />
            <OpenClosedFilter state="closed" selected={!isOpenMode} onClick={() => onClickMode('closed')} />
        </>
    );
}

function OpenClosedFilter({ size, state, selected, onClick }) {
    return (
        <span role="button" className={cx(styles.textFilter, { [styles.selected]: selected })} onClick={onClick}>
            {size}
            {state}
        </span>
    );
}
