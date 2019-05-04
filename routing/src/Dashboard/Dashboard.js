import React from 'react';

export default class Dashboard extends  React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        // Jerome - this array in here will all the NoteCreateForm for my application
        this.state.notes = [];
    }

    renderNotes = () => {
        return(
            <ul>
                Welcome :)
            </ul>
        )

    };


    render() {
        return(
            <main>
              <h2>Create Notes</h2>
                {this.renderNotes()}
            </main>
        )
    }
}
