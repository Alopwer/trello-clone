import React from 'react';
import './Checklist.css';
import ProgressBar from '../../ProgressBar';
import AddItem from './Items/AddItem';
import Items from './Items/Items';

const Checklist = (props) => {
    return (
        <>
            <div className='checklist__header'>
                <p>{props.title}</p>
                <button className='header-btn'>Delete</button>
            </div>
            <div className='checklist__progress'>
                <span>100%</span>
                <ProgressBar />
            </div>
            <div className='checklist__items'>
                <Items items={props.items}/>
                <AddItem card={props.card} list={props.list} checklist={props.checklist}/>
            </div>
        </>
    )
}

export default Checklist;