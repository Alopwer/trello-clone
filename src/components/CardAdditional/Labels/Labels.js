import React, { useRef, useState, useContext } from 'react';
import LabelCreate from './LabelsCreate';

const Labels = ({ labels }) => {

    const [create, setCreate] = useState(false)

    const items = labels.map(label => (
        <li key={label.labelId} style={{ background: label.color }}>
            <span>{ label.name }</span>
        </li>
    ))

    return (
        <div className='labels-section'>
            <h5 className='labels-section-title'>Labels</h5>
            <div className='labels-items'>
                <ul className='labels-items-list'>
                    { items }
                </ul>
                <div className='labels-add-btn'>
                    <button className='lbl-btn' onClick={() => setCreate(!create)}>+</button>
                    <div className='labels-create-block'>
                        { create && <LabelCreate onClose={setCreate} /> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Labels;