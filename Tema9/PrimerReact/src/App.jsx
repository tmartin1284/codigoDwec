import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [algo, setalgo] = useState("");

  // Función para manejar cambios en el input
  const patatas = (event) => {
    setalgo(document.getElementById("tomas2").value);
  };


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React tomas edition  version prueba</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
<div className="body" id="tomas1">

<input  id="tomas2" type="text"   placeholder='escribe' />
 <button id="tomas3" onClick={patatas}>pegame</button>
Hola {algo}
</div>

{/* /** 
<div className="field">
Hello world
<input tabIndex="1"/>
<button onClick={fn}>
Click me!
</button>
</div>
*/ }
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App



/*
const wishes = [
  { done: false, text: 'Travel to the moon' },
  { done: true, text: 'Make an intro course to React' },
  { done: true, text: 'Pay the gym' },
  { done: false, text: 'Go to the gym' },
];
const App = () => (
  <div className="app">
    <h1>My wishlist</h1>
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input className="wish-input__field" placeholder="Enter your wish here" />
    </fieldset>
    <ul className="wish-list">
      {wishes.map(({ done, text }, i) => (
        <li
          key={text}
          className={classNames('wish-list__item', {
            'wish-list__item--done': done,
          })}
        >
          <input id={`wish${i}`} type="checkbox" checked={done} />
          <label htmlFor={`wish${i}`}>{text}</label>
        </li>
      ))}
    </ul>
    <button type="button" className="wish-clear">
      Archive done
    </button>
  </div>
);









const initialWishes = [
  {
    id: 0,
    text: 'Travel to the moon',
    completed: false,
  },
  {
    id: 1,
    text: 'Travel to Barcelona',
    completed: true,
  },
  {
    id: 2,
    text: 'Eat a hamburger',
    completed: false,
  },
];

export default function App() {
  const [wishes, setWishes] = useState(initialWishes);

  const onNewWish = (newWish) => {
    setWishes((currentWishes) => [...currentWishes, newWish]);
  };

  return (
    <div className="app">
      <h1>My Wishlist</h1>
      <WishInput onNewWish={onNewWish} />
      <WishList
        wishes={wishes}
        setWishes={setWishes}
      />
      <button
        type="button"
        className="wish-clear"
        onClick={() => setWishes(wishes.filter((wish) => !wish.completed))}
      >
        Archive Wishes
      </button>

    </div>
  );
}

**/