import React from 'react';
import NoteForm from '../NoteCreateForm/NoteForm'

export default class NoteItem extends React.Component {
    render() {
        const currentNotes = this.props.note;
        return(
            <li key={currentNotes.id}>
                {currentNotes.title} : {currentNotes.content}

                <button onClick={this.props.handleRemoveNote.bind(null, currentNotes)}>Remove</button>

            </li>
        )
    }
}