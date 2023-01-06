import styles from './ListFilter.module.css'
import { useEffect, useState } from 'react'
import Modal from './Modal'
import {GITHUB_API} from '../api.js'
import axios from 'axios'

export default function ListFilter( {onChangeFilter}) {
    const [showModal, setShowModal] = useState(false)
    const [list, setList] = useState([]);
    const filterList = ['Label','Milestone', 'Assignee'];
    
    async function getData(apiPath){
        const data = await axios.get(`${GITHUB_API}/repos/facebook/react/${apiPath}`)

       let result = [];
       switch(apiPath){
        case 'assignees':
            result = data.data.map((d)=>({
                name: d.login,
            }));
            break;
        case 'milestones':
            result = data.data.map((d)=>({
                name: d.title,
            }));
            break;
        case 'labels':
        default : 
            result = data.data
       }
       setList(result)
       console.log(result);
    }

    useEffect(()=>{
        if(showModal){
            const apiPath = `${showModal.toLowerCase()}s`
            getData(apiPath);
        }
    },[showModal])

    return (
        <>
            <div className={styles.filterLists}>
                {filterList.map((filterItem) => (
                    <ListFilterItem
                        key={filterItem} 
                        searchDataList={list}
                        onClick={()=> setShowModal(filterItem)}
                        onClose={()=> setShowModal(false)}
                        showModal={showModal===filterItem}
                        onChangeFilter={onChangeFilter}
                    >{filterItem}</ListFilterItem>
                ))}
            </div>

        </>
    )
}

function ListFilterItem({ 
    onClick,
    onClose, 
    children, 
    onChangeFilter, 
    searchDataList,
    showModal,
}) {
    const [list, setList] = useState([]);
    useEffect(()=>{
        setList(searchDataList)
    },[searchDataList])
    return (
        <div className={styles.filterItem}>
        <span role="button" onClick={onClick}>{children}▾</span>
        <div className={styles.modalContainer}>
            <Modal
                title={children}
                opened={showModal} 
                onClose={onClose} 
                placeholder="Filter labels"
                searchDataList={list}
                onClickCell = {
                    (params)=>{onChangeFilter(params)
                    }}/>
        </div>
        </div>
        )
        
}