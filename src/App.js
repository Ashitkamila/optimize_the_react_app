import logo from './logo.svg';
import './App.css';
import React, { useState ,Suspense} from 'react';
import Galerry from './components/Galerry';


const MyComponent = React.lazy(() => import ("./components/Counter"));

function App() {
  const [count, setcount] = useState(0);
  return (
    <div className="App">
        {/* My component */}

        {/* This is very  large size components because in that component we are doing api call,some funtionality and all to optimize the performance we can do lazy loading. */}
        <Suspense fallback={<p>This is loading.....!</p>}>

        <MyComponent count={count}/>
        </Suspense>
        <button onClick={()=>setcount((val)=>val + 1)}>Increment</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <hr />
      <Galerry/>
    </div>
  );
}

export default App;
