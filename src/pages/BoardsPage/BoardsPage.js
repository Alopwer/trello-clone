import React from 'react';
import Boards from '../../components/Boards';

const BoardsPage = ({ boards }) => {
    return (
        <div>
            <Boards boards={boards}/>
        </div>
    )
}

export default BoardsPage;