import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// algo
// 1. show Login by default
// 2. after Login click - show Spinner for 2 sec
// 3. after 2 seconds - show Logout
// 4. after Logout click - show Login

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isLoading: false,
    };
  }

  handleLoginClick = () => {
		// setState
		// input: obj
		// output: modify obj
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLoading: false,
      });
    }, 2000);
  };

  render() {
		const { isLoggedIn, isLoading } = this.state;

		if(isLoading) {
			return <Spinner />;
		}
		if(isLoggedIn) {
			return <Logout />;
		}
    return <Login onLogin={this.handleLoginClick} />
  }
}

export default Auth;

// react approach
// 0. make a layout
// 1. split on components
// 2. static version in react
// 3. declarate stste and props
// 4. write logic
