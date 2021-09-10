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

  demoUser(e) {
    e.preventDefault();
    const demoUser = { email: 'pencil@scribble.com', password: 'scribblin' };
    this.props.processForm(demoUser);
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
      <div className='background-login'>
        <form className='session-form' onSubmit={(e) => this.handleSubmit(e)}>
          <img className='dolphin' src={dolphinLogo} alt='' />
          <h2>scribble</h2>
          <p>Remember everything important.</p>
          <div className='fake-button'>
            <button className='continue-with-googapp'>
              <img className='googapp' src={googleLogo} />
              <p className='continue-with'>Continue with Google</p>
            </button>
          </div>
          <div className='fake-button'>
            <button className='continue-with-googapp'>
              <img className='googapp' src={appleLogo} />
              <p className='continue-with'>Continue with Apple</p>
            </button>
          </div>
          <p className='or'> or </p>
          {this.props.formType === 'login' ? (
            <>
              <input
                className='session-input'
                type='text'
                value={this.state.email}
                onChange={this.handleChange('email')}
                placeholder='Email address'
              />

              <input
                className='session-input'
                type='password'
                value={this.state.password}
                onChange={this.handleChange('password')}
                placeholder='Password'
              />
              <div className='errors'>{this.renderErrors()}</div>
              <button className='session-signin-btn'>Sign in</button>

              <button
                onClick={(e) => this.demoUser(e)}
                className='session-signin-btn demo-user'
              >
                Demo User
              </button>
              <div className='checkbox-container'>
                <input type='checkbox' id='checkbox' />
                <label htmlFor='checkbox'>Remember me for 30 days</label>
              </div>
              <p className='smaller'>Don't have an account?</p>
              <Link className='link' to='/signup'>
                Create account
              </Link>
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
              <input
                className='session-input'
                type='password'
                value={this.state.password}
                onChange={this.handleChange('password')}
                placeholder='Password'
              />
              <div className='errors'>{this.renderErrors()}</div>
              <button className='session-signin-btn'>Continue</button>
              <Link className='link2' to='/login'>
                Already have an account?
              </Link>
            </>
          )}
        </form>
      </div>
    );
  }
}

export default SessionForm;
