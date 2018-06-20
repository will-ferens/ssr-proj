import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router-dom'


class FirstPage extends Component {
  render() {
    const b64 = this.props.staticContext ? 'wait for it' : window.btoa('wait for it')
    return (
      <div className='bold'>
        <Link to={'/second'}>Second</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstPage)
