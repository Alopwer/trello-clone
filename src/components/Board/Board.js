import React from 'react';
import './Board.css';
import { connect } from 'react-redux';

const Board = ({ currentBoard }) => {
    return (
        <div>
            <p>
                {currentBoard.title}
            </p>
            {currentBoard.cover}
        </div>
    )
}

const mapStateToProps = ({ currentBoard }) => {
    return { currentBoard }
}

export default connect(mapStateToProps)(Board)