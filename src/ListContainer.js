import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './ListContainer.module.css';
import Button from './components/Button.js';
import ListItem from './components/ListItem';
import ListItemLayout from './components/ListItemLayout';
import Pagination from './components/Pagination.js';
import ListFilter from './components/ListFilter';
import OpenClosedFilters from './components/OpenClosedFilter';
import axios from 'axios';
import { GITHUB_API } from './api.js';

export default function ListContainer() {
    const [inputValue, setInputValue] = useState('is:pr is:open');
    const [list, setList] = useState([]);
    const [checked, setChecked] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    // const [isOpenMode, setIsOpenMode] = useState(true);
    // const [params, setParams] = useState();
    const maxpage = 10;

    const page = parseInt(searchParams.get('page') ?? '1', 10);

    const state = searchParams.get('state');

    async function getData(params) {
        const { data } = await axios.get(`${GITHUB_API}/repos/facebook/react/issues`, { params });
        setList(data);
        // console.log(data);
    }
    useEffect(() => {
        getData(searchParams);
    }, [searchParams]);

    return (
        <>
            <div className={styles.listContainer}>
                <div className={styles.topSection}>
                    <input className={styles.input} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <Link to="/new" className={styles.link}>
                        <Button className={styles.button}>New Issue</Button>
                    </Link>
                </div>
                <OpenClosedFilters isOpenMode={state !== 'closed'} onClickMode={(mode) => setSearchParams({ mode })} />
                <ListItemLayout className={styles.listFilter}>
                    <ListFilter
                        onChangeFilter={(params) => {
                            setSearchParams(params);
                        }}
                    />
                </ListItemLayout>
                <div className={styles.container}>
                    {list.map((item) => (
                        <ListItem key={item.id} data={item} checked={checked} onClickCheckBox={() => setChecked((checked) => !checked)} />
                    ))}
                </div>
            </div>
            <div className={styles.paginationContainer}>
                <Pagination maxPage={maxpage} currentPage={page} onClickPageButton={(pageNumber) => setSearchParams({ page: pageNumber })} />
            </div>
        </>
    );
}
