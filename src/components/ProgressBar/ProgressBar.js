import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ items }) => {
    const [percentage, setPercentage] = useState(0)
    const filteredItems = items.filter(item => item.done).length

    useEffect(() => {
        const percentageDoneItems = Math.floor(filteredItems * 100 / items.length) || 0
        setPercentage(percentageDoneItems)
    }, [items, filteredItems])

    return (
        <div className='checklist__progress'>
            <span>{percentage || 0}%</span>
            <div className='progress-bar'>
                <div className='filler' style={{ width: `${percentage}%` }}>
                    
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;