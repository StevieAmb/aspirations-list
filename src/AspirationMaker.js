import React, { Component } from 'react'

class AspirationMaker extends Component {
  constructor() {
    super()
    this.state = {
      aspiration: '',
      why: ''
    }
  }

  submitAspiration = (event) => {
    event.preventDefault()
    const aspiration = {
      id: Date.now(),
      ...this.state
    }
    this.props.addAspiration(aspiration)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({aspiration: '', why: ''})
  }


  handleChange = (event) => {
    this.setState({[event.target.name] : [event.target.value]})
  }

  render() {
    return (
      <form>
        <label>
          Aspiration:
          <input
            type='text'
            name='aspiration'
            id='aspiration'
            value={this.state.aspiration}
            placeholder='What is your aspiration?'
            onChange={event => this.handleChange(event)}
            required
            />
        </label>
        <label>
        Reason:
        <input
          type='text'
          name='why'
          id='why'
          value={this.state.why}
          placeholder='Your reason...'
          onChange={event => this.handleChange(event)}
          required
          />
      </label>
      <button onClick={event => this.submitAspiration(event)}>Submit</button>
    </form>
    )
  }
}






export default AspirationMaker; 