import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { deleteChecklist } from '../../../actions';
import Checklist from './Checklist';
import { ListContext } from '../../Card/Card-modal/CardModalContent';
import './Checklist.css';

const Checklists = ({ checklists, deleteChecklist }) => {
    const { card } = useContext(ListContext)

    const onDeleteChecklist = (checklistId) => {
        deleteChecklist({
            cardId: card.cardId,
            checklistId
        })
    }

    const checklistsItems = Object.values(checklists).map(checklist => checklist.cardId === card.cardId && (
        <div className='checklist' key={checklist.checklistId}>
            <Checklist checklist={checklist} onDeleteChecklist={onDeleteChecklist}/>
        </div>
    ))

    return (
        <>
            { checklistsItems }
        </>
    )
}

const mapStateToProps = ({ checklists : { byId } }) => ({
    checklists : byId
})

const mapDispatchToProps = (dispatch) => ({
    deleteChecklist: (value) => dispatch(deleteChecklist(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checklists);