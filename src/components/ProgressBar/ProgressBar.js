import React, { useState } from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {
    const [percentage, setPercentage] = useState(100)

    return (
        <div className='progress-bar'>
            <div className='filler' style={{ width: `${percentage}%` }}>
                
            </div>
        </div>
    )
}

export default ProgressBar;