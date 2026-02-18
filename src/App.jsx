import React, { useState, useMemo, memo } from 'react'
import './App.css'

const ItemList = ({ items }: { items: string[] }) => {
  console.log('ItemList rendered');
  return (
    <ul>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};

const MemoizedItemList = memo(({ items }: { items: string[] }) => {
  console.log('MemoizedItemList rendered');
  return (
    <ul>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
});

const ExpensiveComponent = ({ num }: { num: number }) => {
  const factorial = useMemo(() => {
    console.log('Computing factorial with useMemo');
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }, [num]);
  return <div>Factorial of {num} is {factorial}</div>;
};

const ExpensiveComponentNoMemo = ({ num }: { num: number }) => {
  console.log('Computing factorial without useMemo');
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return <div>Factorial of {num} is {result}</div>;
};

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <h1>Krishna Kumar 712-A</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <br />
      <label>
        Number for factorial:
        <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} />
      </label>
      <h2>Without Memo</h2>
      <ItemList items={items} />
      <ExpensiveComponentNoMemo num={num} />
      <h2>With Memo</h2>
      <MemoizedItemList items={items} />
      <ExpensiveComponent num={num} />
    </div>
  )
}

export default App