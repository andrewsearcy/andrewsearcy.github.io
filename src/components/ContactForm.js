import React from 'react'
import axios from 'axios'

class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, message } = this.state
    const form = await axios.post('/api/form', {
      name,
      email,
      message,
    })
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <textarea
            type='text'
            name='message'
            value={this.state.message}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" value="submit" >Submit</button>
      </form>
    )
  }
}
export default ContactForm


