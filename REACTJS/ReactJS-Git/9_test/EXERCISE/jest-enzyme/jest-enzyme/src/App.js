import { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const getSum = (value1, value2) => {
  return parseFloat(value1) + parseFloat(value2);
};
 
const App = () => {
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const [sum, setSum] = useState(0);
 
  const add = () => {
    const result = getSum(
      parseFloat(valueOne),
      parseFloat(valueTwo),
    );
    setSum(result);
  };
 
  return (
    <div className="container">
        <form>
          <input type="number" id="value-one-input" name="valueOne" value={valueOne} onChange={e => setValueOne(e.target.value)} />
          <input type="number" id="value-two-input" name="valueTwo" value={valueTwo} onChange={e => setValueTwo(e.target.value)} />
          <button type="button" onClick={add} aria-label="Add">Add</button>
          <p className="result">{sum}</p>
        </form>
    </div>
  );
}
 
export { getSum };
export default App;
