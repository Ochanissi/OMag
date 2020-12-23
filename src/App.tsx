import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  // ComponentDidMount
  // //Class
  // componentDidMount() {
  //     console.log('I just mounted!');
  // }

  // //Hooks
  // useEffect(() => {
  //     console.log('I just mounted!');
  // }, [])

  // ComponentWillUnmount
  // //Class
  // componentWillUnmount() {
  //     console.log('I am unmounting');
  // }

  // //Hooks
  // useEffect(() => {
  //     return () => console.log('I am unmounting');
  // }, [])

  // ComponentWillReceiveProps
  // //Class
  // componentWillReceiveProps(nextProps) {
  //     if (nextProps.count !== this.props.count) {
  //         console.log('count changed', nextProps.count);
  //     }
  // }

  // //Hooks
  // useEffect(() => {
  //     console.log('count changed', props.count);
  // }, [props.count])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload aaaaaaaaaaaaa.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
