import useCounter from "./hooks/useCounter";

export default function Home() {
  const { count, increment, decrement } = useCounter(0);
  return (
    <div>
      <h1>NextJS home page</h1>
      <p>Text 2</p>
      <button onClick={increment}>Increment</button>
      {count}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
