import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Input extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            jobtitle: '',
            description: '',
            created: ''
        }
    }

    updateValue(fieldName, value) {
        this.setState({
            [fieldName]: value
        })
    }

    onAddClick() {
        this.props.onAddClick(this.state.id, this.state.jobtitle, this.state.description, this.state.created);
    }

    render() {
        return (
            <div className="app-input tc">
                <div>
                    <span>ID:</span>
                    <input className="ma2" type="text" onChange={(e) => {
                        this.updateValue('id', e.target.value)
                    }} />
                </div>
                <div>
                    <span>Job Title:</span>
                    <input className="ma2" type="text" onChange={(e) => {
                        this.updateValue('jobtitle', e.target.value)
                    }} />
                </div>
                <div>
                    <span>Description:</span>
                    <input className="ma2" type="text" onChange={(e) => {
                        this.updateValue('description', e.target.value)
                    }} />
                </div>
                <div>
                    <span>Created:</span>
                    <input className="ma2" type="text" onChange={(e) => {
                        this.updateValue('created', e.target.value)
                    }} />
                </div>
                <button className="btn btn-primary ma3" onClick={() => {
                    this.onAddClick()
                }}>Add Task
                </button>
            </div>
        );
    }
}

Input.PropTypes = {
    onAddClick: PropTypes.func
};

export default Input;
