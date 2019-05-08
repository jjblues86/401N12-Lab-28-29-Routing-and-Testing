import React from 'react';


export default class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        };
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
      this.props.handleAddNote(this.state);
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                     name="title"
                     value={this.state.title}
                     onChange={this.handleChange}
                     placeholder="title"
                />
                <input
                    type="text"
                    name="content"
                    value={this.state.content}
                    onChange={this.handleChange}
                    placeholder="content"/>
                <button type="submit">Create Notes!</button>
            </form>
        )
    }
}