function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  const [solution, setSolution] = useState(0);

  function handleOnClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    let sumTillInput = 0;
    for(let i = 1; i <= input; i++) {
      sumTillInput += i;
    }
    setSolution(sumTillInput);
  }, [input]);

  return (
    <>
      <input type="number" onChange={(e) => setInput(Number(e.target.value))} value={input}/>
      <div>Solution: {solution}</div>
      <button onClick={handleOnClick}>Counter {count}</button>
    </>
  )
}