import React from 'react';


export default class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.note) {
            this.state = this.props.note;
        } else {
            this.state = {
                title: '',
                content: '',
            };
        }
    }

// Jerome - this function is passed to the input form to enable updates
    handleChange = event => {
      const { name, value }  = event.target;
      this.setState({
          [name]: value,
      });
    };

    //Jerome - this allows us to submit the created content on the browser
    handleSubmit = event => {
      event.preventDefault();
      // this.props.handleAddNote(this.state);
        this.props.handleComplete(this.state);

    };

    render() {
        const buttonNotes = this.props.note ? 'Update' : 'Create';
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                     name="title"
                     value={this.state.title}
                     onChange={this.handleChange}
                     placeholder="title"
                />
                <br />
                <textarea
                    rows="4" cols="50"
                    type="text"
                    name="content"
                    value={this.state.content}
                    onChange={this.handleChange}
                    placeholder="content"/>
                    <br />
                <button type="submit">{buttonNotes} Notes!</button>
            </form>
        )
    }
}