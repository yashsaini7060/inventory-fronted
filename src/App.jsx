import './App.css';

import { useEffect } from 'react';
import toast from 'react-hot-toast';

import { Button } from './components/ui/button';

function App() {
useEffect(() => {
  toast.success('Hello');
}, []);
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello world</h1>
      <Button>SignIn</Button>
    </>
  );
}

export default App;
