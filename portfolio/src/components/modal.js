import React, { Component } from 'react'

export default class modal extends Component {
    state = {
        "is-active": false
    }

    toggleModal = () => {
        this.setState({
            "is-active": !this.state['is-active']
        })
    }

    render() {
        return (
            <div class="modal undergrad">
                <div class="modal-background"></div>
                <div class="modal-content">
                </div>
                <button class="modal-close is-large" aria-label="close"></button>
            </div>
        )
    }
}
