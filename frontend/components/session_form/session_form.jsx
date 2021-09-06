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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.currentUser) {
      <Redirect to={'/'} />;
    }
    return (
      <div>
        <form className='session-form' onSubmit={(e) => this.handleSubmit(e)}>
          <h2>scribble</h2>
          <br />
          <p>Remember everything important.</p>
          {this.props.formType === 'login' ? (
            <>
              <input
                className='session-input'
                type='text'
                value={this.state.email}
                onChange={this.handleChange('email')}
                placeholder='Email address or username'
              />
              <br />
              <input
                className='session-input'
                type='password'
                value={this.state.password}
                onChange={this.handleChange('password')}
              />
              <br />
              <button className='session-signin-btn'>Sign in</button>
              <br />
              <Link to='/signup'>Create an account</Link>
            </>
          ) : (
            <>
              <input
                className='session-input'
                type='email'
                value={this.state.email}
                onChange={this.handleChange('email')}
                placeholder='Email'
              />
              <br />
              <input
                className='session-input'
                type='password'
                value={this.state.password}
                onChange={this.handleChange('password')}
                placeholder='Password'
              />
              <br />
              <button className='session-signup-btn'>Continue</button>
              <br />
              <Link to='/login'>Already have an account?</Link>
            </>
          )}
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default SessionForm;
