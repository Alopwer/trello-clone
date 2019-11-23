import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { deleteChecklist } from '../../../actions';
import Checklist from './Checklist';
import { ListContext } from '../../Card/Card-modal/CardModalContent';
import './Checklist.css';

const Checklists = ({ deleteChecklist }) => {
    const { list, card } = useContext(ListContext)
    const onDeleteChecklist = (checklistId) => {
        deleteChecklist({
            boardId: list.boardId,
            listId: list.listId,
            cardId: card.cardId,
            checklistId
        })
    }

    return (
        <>
            {
                card.checklists.map(checklist => (
                    <div className='checklist' key={checklist.checklistId}>
                        <Checklist checklist={checklist} onDeleteChecklist={onDeleteChecklist}/>
                    </div>
                ))
            }
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteChecklist: (value) => dispatch(deleteChecklist(value))
})

export default connect(null, mapDispatchToProps)(Checklists);