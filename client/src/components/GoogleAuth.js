import React, { Component } from 'react'

class GoogleAuth extends Component{
    state = {
        isSignedIn: null
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId : '820118529267-k0spahsabie4dqajgnhplqb82ao57vsh.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })

            })
        })
    }

    renderAuthButton() {
    if (this.state.isSignedIn === null) {
        return <div>Maybe</div>
    } else if (this.state.isSignedIn) {
        return <div>Arianna is Signed In!</div>
    } else {
        return <div>No one is signed in.</div>
    }
    
    }
    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth