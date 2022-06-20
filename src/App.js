import './App.css';
import { useState } from 'react';


const list = new Array(20).fill(0).map(() => `Item - ${Math.random()}`);

const List = ({ list }) => {
  const [filter, setFilter] = useState('');
  const filteredElements = list.filter((item) => item.includes(filter));
  return (
    <>
      <input type="text" placeholder="filter" onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {filteredElements.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
};

const Clicker = ({children}) => {
  const [n, setN] = useState(0);

  return (
    <div data-count={n}>
      {children}
      <p>Clicked {n} times</p>
      <button onClick={() => setN(n + 1)}>click me</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clicker>
          <List list={list} />
        </Clicker>
      </header>
    </div>
  );
}

export default App;