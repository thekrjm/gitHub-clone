import { useState } from 'react'
import styles from './ListContainer.module.css'
import Button from './components/Button.js'
import ListItem from './components/ListItem';
import ListItemLayout from './components/ListItemLayout';
import Pagination from './components/Pagination.js';
import ListFilter from './components/ListFilter';
import OpenClosedFilters from './components/OpenClosedFilter';


export default function ListContainer() {
    const [inputValue, setInputValue] = useState('is:pr is:open');
    const [list, setList] = useState([])
    const [page, setPage] =useState(1)
    return (
        <>
        <div className={styles.listContainer}>
            <div className={styles.topSection}>
                <input
                    className={styles.input}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    />
                <Button className={styles.button}>
                    New Issue
                </Button>
            </div>
            <OpenClosedFilters />
            <ListItemLayout className={styles.listFilter}>
                <ListFilter onChangeFilter={(filteredData)=>{
                    
                }}/>
            </ListItemLayout>
            <div className={styles.container}>
                {list.map((listItem, index)=>(
                    <ListItem
                        key={index}
                        badges={[
                            {
                                color: "red",
                                title: "Bug"
                            }
                        ]}
                        />
                        ))}
            </div>
        </div>
        <div className={styles.paginationContainer}>
            <Pagination maxPage={10} currentPage={page} onClickPageButton={(number)=>setPage(number)}/>
        </div>
        </>
    )
}

