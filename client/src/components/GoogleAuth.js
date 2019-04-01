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
                this.auth.isSignedIn.listen(this.onAuthChange)

            })
        })
    }

    onAuthChange = () => {
       this.setState({ isSignedIn: this.auth.isSignedIn.get()}) 
    }
    onSignInClick = () => {
        this.auth.signIn()
    }
      onSignOutClick = () => {
        this.auth.signOut()
    }
    renderAuthButton() {
    if (this.state.isSignedIn === null) {
        return <div>Maybe</div>
    } else if (this.state.isSignedIn) {
        return <button className=" ui red google button" onClick={this.onSignOutClick}>Sign Out with Google</button>
    } else {
        return <button className=" ui red google button" onClick={this.onSignInClick}>Sign In with Google</button>
    }
    
    }
    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth