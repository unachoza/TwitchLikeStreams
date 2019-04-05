import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchStream} from '../../actions/index'

class StreamEdit extends Component{

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        if (!this.props.stream) {
            return(<div>loading</div>)
        }
        console.log(this.props)
        return (
            <div>
                {this.props.stream.title}
            </div>
        )
      
  }
}
const mapStateToProps = (state, ownProps) => {
  
    return {stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchStream})(StreamEdit)