import styles from './Modal.module.css';
import cx from 'clsx';
import { useEffect, useState } from 'react';

export default function Modal({
    title,
    onClose,
    opened,
    placeholder,
    searchDataList,
    onClickCell,
}) {
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState(searchDataList);

    useEffect(() => {
        setFilteredData(searchDataList);
    }, [searchDataList]);

    useEffect(() => {
        if (searchValue === '') {
            setFilteredData(searchDataList);
        } else {
            const filteredSearchList = searchDataList.filter((item) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredData(filteredSearchList);
        }
    }, [searchDataList, searchValue]);

    return (
        <div className={cx(styles.modal, { [styles.opened]: opened })}>
            <div className={styles.header}>
                <span>Filter by {title}</span>
                <button onClick={onClose}>X</button>
            </div>
            <div className={styles.input}>
                <input
                    placeholder={placeholder}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
            <div className={styles.list}>
                {filteredData.map((data) => (
                    <div
                        onClick={() => {
                            const isLabel = title.toLowerCase() === 'label';
                            const paramKey = isLabel ? 'labels' : title.toLowerCase();
                            onClickCell({ [paramKey]: data.name });
                        }}
                        role="button"
                        key={data.name}
                        className={styles.item}>
                        {data.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
