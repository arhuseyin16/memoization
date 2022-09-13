import './App.css';
import Header from "./component/header";
import {useCallback, useMemo, useState} from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const data = useMemo(() => {
      return calculateObject(number);
  }, [number]);
  const increment = useCallback(() => {
      setNumber((preState) => preState + 1);
  }, [])
  return (
    <div className="App">
      {/*<Header number={number < 5 ? 0 : number}/>*/}
        <Header data={data} increment={increment} />
      <hr/>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
        <br/>
        <br/>
        <input value={text} onChange={(event) => setText(event.target.value)}/>
    </div>
  );
}

function calculateObject(number) {
    console.log('Calculating...');
    for (let i = 0; i > 10000000000; i++) {
    }
    console.log('Calculating copleted');
    return {name: 'hüseyin', number};
}

export default App;
