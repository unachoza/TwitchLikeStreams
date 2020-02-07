import React, { Component } from 'react'
import { connect } from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends Component{

    componentDidMount() {
        console.log(process.env.REACT_APP_GOOGLE_CLIENT)
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId : '820118529267-k0spahsabie4dqajgnhplqb82ao57vsh.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
            console.log("mean something", this.auth)
                
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)

            })
            console.log(this.auth)
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        } 
    }

    onSignInClick = () => {
        this.auth.signIn()
    }
      onSignOutClick = () => {
        this.auth.signOut()
    }
    renderAuthButton() {
    if (this.props.isSignedIn === null) {

        return <div>Maybe</div>
    } else if (this.props.isSignedIn) {
        return (
            <div>
                <p>Arianna, you're logged in!</p>
                 <button className=" ui red google button" onClick={this.onSignOutClick}>Sign Out with Google</button>
            </div>
        )
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
const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)