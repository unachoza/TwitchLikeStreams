import React, { Component } from 'react'

class GoogleAuth extends Component{

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId : '820118529267-k0spahsabie4dqajgnhplqb82ao57vsh.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }
    render() {
        return (
            <div>GoogleAuth</div>
        )
    }
}

export default GoogleAuth