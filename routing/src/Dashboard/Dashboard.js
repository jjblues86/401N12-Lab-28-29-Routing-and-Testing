import React from 'react';
import NoteForm from '../NoteCreateForm/NoteForm';
import NoteItem from '../NoteItem/NoteItem';

export default class Dashboard extends  React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        // Jerome - this array in here will hold all the NoteCreateForm for my application
        this.state.notes = [];
        this.state.list = [];
    }

    addNotes = () => {
        return(
            <ul>
                {
                    this.state.notes.map(currentNotes => {
                        return <NoteItem note={currentNotes}
                                         handleRemoveNote={this.handleRemoveNote}
                                         handleUpdateNote={this.handleUpdateNote}
                        // return <li key={currentNotes.id}>
                        //     {currentNotes.title} : {currentNotes.content}
                        // </li>
                        />
                    })
                }
            </ul>
        )

    };

    handleRemoveNote = note => {
        this.setState(previousState => ({
            notes: previousState.notes.filter(currentNotes => currentNotes.id !==note.id),
        }));
    };

    handleUpdateNote = (note) => {
        this.setState((previousState) => {
            const updateNotes = previousState.notes.map(currentNotes =>
                note.id === currentNotes.id ? note: currentNotes);

            return {notes: updateNotes };

        });

    };

    handleAddNote = note => {
        //Jerome - this is where I create the id, content and title
        // note.id = Math.random();
        // note.createdOn = new Date();

        this.setState((previousState) => {
            return {
                notes: [...previousState.notes, {
                    ...note,
                id: Math.random(),
                createdOn: new Date(),
                }],
            }
        });
    };

    render() {
        return(
            <main>
                <h2>Create Notes</h2>
                <NoteForm handleAddNote={this.handleAddNote}/>
                {this.addNotes()}
            </main>
        )
    }
}
