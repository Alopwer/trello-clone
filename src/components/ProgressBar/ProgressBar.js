import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {
    const [percentage, setPercentage] = useState(0)
    const filteredItems = props.items.filter(item => item.done).length

    useEffect(() => {
        setPercentage(filteredItems)
    }, [props.items, filteredItems])

    return (
        <div className='checklist__progress'>
            <span>{filteredItems * 100 / props.items.length}%</span>
            <div className='progress-bar'>
                <div className='filler' style={{ width: `${percentage}%` }}>
                    
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;