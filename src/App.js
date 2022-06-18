import './App.css';
import { useState, memo } from 'react';


  const list = new Array(20).fill(0).map(() => `Item - ${Math.random()}`);

  const List =  memo (({list}) => (
    <ul>
      {list.map((item) => <li key={item}>{item}</li>)}
    </ul>
  ));



function App() {

  const [n, setN] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <List list={list}/>
        <p>Clicked {n} times</p>
        <button onClick={() => setN(n+1)}>click me</button>
      </header>
    </div>
  );
}

export default App;