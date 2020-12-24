import React from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home-page/home-page.component';

const App = () => {
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
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
