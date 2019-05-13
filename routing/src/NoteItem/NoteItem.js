import React from 'react';
import Modal from '../Modal/Modal';
import NoteForm from '../NoteCreateForm/NoteForm'

export default class NoteItem extends React.Component {
    render() {
        const {handleUpdateNote} = this.props;
        const currentNotes = this.props.note;

        const showModal = () => handleUpdateNote({...currentNotes, editing: true});
        const hideModal = () => handleUpdateNote({...currentNotes, editing: false});

        const handleUpdate = (updatedNote) => {
            handleUpdateNote({...updatedNote, editing: false});
        };

        return(
            <li className="list" key={currentNotes.id}>
                {currentNotes.title} : {currentNotes.content}

                <button onClick={this.props.handleRemoveNote.bind(null, currentNotes)}>Remove</button>
                <button onClick={showModal}>Edit</button>
                <Modal show={currentNotes.editing} hideModal={hideModal}>
                <NoteForm note={currentNotes} handleComplete={handleUpdate}/>
                </Modal>
            </li>
        )
    }
}