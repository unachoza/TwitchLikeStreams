import React, {Component} from 'react'
import Modal from '../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchStream, deleteStream} from '../../actions'


class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions() {
        const {id} = this.props.match.params
        return(
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button ">Cancel</Link>
            </React.Fragment>
        )
    }
    renderContent() {
        return !this.props.stream ? 'Are you sure you want to delete this stream?' : `Are you sure you want to delete ${this.props.stream.title} ?`
    }
  
    render() {
        
        return (
            <Modal
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}

}
export default connect( mapStateToProps, {fetchStream, deleteStream})(StreamDelete)