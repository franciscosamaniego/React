import { useState } from 'react';

const Contador = props => {

  const [count, setCount] = useState(0);
  const add = () => {
    setCount(prev => ++prev);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={add}>+</button>
    </div>
  );
};

export default Contador;
