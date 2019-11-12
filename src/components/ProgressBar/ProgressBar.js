import React, { useState } from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {
    const [percentage, setPercentage] = useState(100)

    return (
        <div className='checklist__progress'>
            <span>{props.progress}</span>
            <div className='progress-bar'>
                <div className='filler' style={{ width: `${percentage}%` }}>
                    
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;