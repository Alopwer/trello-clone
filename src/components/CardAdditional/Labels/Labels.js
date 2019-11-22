import React, { useRef, useState, useContext } from 'react';

const Labels = ({ labels }) => {

    return (
        <div className='labels-section'>
            <h5 className='labels-section-title'>Labels</h5>
            <div className='labels-items'>
                <ul className='labels-items-list'>
                    {
                        labels.map(label => (
                            <li style={{ background: label.color }}>
                                <span>{ label.name }</span>
                            </li>
                        ))
                    }
                </ul>
                <div className='labels-add-btn'>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

export default Labels;