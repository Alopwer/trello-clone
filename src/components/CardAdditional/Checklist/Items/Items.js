import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

const Items = ({ checklistId, checklistItems }) => {
    const items = Object.values(checklistItems).map(item => item.checklistId === checklistId && (
        <div className='checklist__item' key={item.checklistItemId}>
            <Item item={item} />
        </div>
    ))

    return (
        <div className='checklist-items'>
            { items }
        </div>
    )
}

const mapStateToProps = ({ checklistItems : { byId } }) => ({
    checklistItems : byId
})

export default connect(mapStateToProps)(Items);