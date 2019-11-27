import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './ProgressBar.css';

const ProgressBar = ({ items, checklistId }) => {
    const [percentage, setPercentage] = useState(0)
    const currentItems = Object.values(items).filter(item => item.checklistId === checklistId)
    const filteredItems = currentItems.filter(item => item.done).length

    useEffect(() => {
        const percentageDoneItems = Math.floor(filteredItems * 100 / currentItems.length) || 0
        setPercentage(percentageDoneItems)
    }, [items, filteredItems])

    return (
        <div className='checklist__progress'>
            <span>{ percentage }%</span>
            <div className='progress-bar'>
                <div className='filler' style={{ width: `${percentage}%` }}>
                    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ checklistItems : { byId } }) => ({
    items : byId
})

export default connect(mapStateToProps)(ProgressBar);