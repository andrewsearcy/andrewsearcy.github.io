import React from 'react'

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

  handleSubmit = e => {
    e.preventDefault()

    const { name, email, message } = this.state
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
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default ContactForm
