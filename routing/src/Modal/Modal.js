import React from 'react';
import '../Modal/Modal.scss';

export default class Modal extends React.Component {
    render(){
        const showOrHide = this.props.show ? 'modal display-block' : 'modal display-none';
        return(
            <div className={showOrHide}>
            {this.props.children}
            <button>Close</button>
        </div>);

    }
}