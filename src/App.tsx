import './App.css'

import { useCounterStore } from './store/counter'

function App() {
  const { counter, increment, decrement } = useCounterStore()

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
