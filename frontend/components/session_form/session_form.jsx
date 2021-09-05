import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { ...this.state };
    this.props.processForm(user);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    if (this.props.currentUser) {
      <Redirect to={'/'} />;
    }
    return (
      <div>
        <form
          className='session-form'
          onSubmit={(e) => this.props.handleSubmit(e)}
        ></form>
      </div>
    );
  }
}

export default SessionForm;
