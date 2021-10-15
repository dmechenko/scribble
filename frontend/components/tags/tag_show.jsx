import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TagShow extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  notes: state.entities.notes.filter((note) => {
    return note.id === ownProps.match.params.id
  })
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TagShow)


export default TagShow;
