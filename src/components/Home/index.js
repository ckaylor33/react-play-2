import React, { useRef, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

// React -> will re-render (props/state)
// With useEffect you can monitor the props and states and decide when you want the function to run
// Without dependencies for useEffect, anytime state or props change react will re-run the function. If you pass in an empty array, that means you don't have dependencies - it won't run anytime apart from the first mount

const MyContext = React.createContext()

function MyComponent() {
  const state = useContext(MyContext)

  return <h1>Hello, {state.name}.</h1>
}

function MyComponent2() {
  const state = useContext(MyContext)

  return <h1>Your age is {state.age}.</h1>
}

export default function Home() {
  // Google Captcha
  // document.getElementById('') -> don't do this
  const [obj, setObj] = useState({ name: 'Charlie', age: 30, prop: 'random' })
  const h1Ref = useRef()
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  // like componentDidMount
  useEffect(() => {
    // fetching course info -> when the URL changes
    console.log(h1Ref)
  }, [counter1])

  return (
    <MyContext.Provider value={obj}>
      <div ref={h1Ref}>
        <h1>
          Home. Go to <Link to='/about'>About</Link>
        </h1>
        <MyComponent />
        <MyComponent2 />
        <h1>{counter1}</h1>
        <h1>{counter2}</h1>
        <button onClick={() => setCounter1((counter) => counter + 1)}>
          Counter 1
        </button>
        <button onClick={() => setCounter2((counter2) => counter2 + 1)}>
          Counter 2
        </button>
      </div>
    </MyContext.Provider>
  )
}
