import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const inputEl = useRef(null);
  const [active, setActive] = useState(false)
  const [todos, setTodos] = useState([
    {
      taskID: 1,
      task: 'one'
    },
    {
      taskID: 2,
      task: 'two'
    },
    {
      taskID: 3,
      task: 'three'
    }
  ])

  const onStartDrag = (event) => {
    console.log("----onStartDrag", event.currentTarget.id)
    event.preventDefault();
  }

  const onDragOver = (event) => {
    //console.log(event)
    console.log(event.currentTarget.id)
    event.preventDefault();
  }
  const onDrop = (event) => {
    console.log('---', event.currentTarget.id)
    event.preventDefault();
  }

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    // console.log('=-====', inputEl.current.isContentEditable )
    // inputEl.current.focus();
    inputEl.current.contentEditable = !inputEl.current.isContentEditable
    setActive(prev => !prev);
  };

  return (
    <div className="App">
      <div className="parent">
        {/* <input ref={inputEl} type="text" /> */}
        <button onClick={onButtonClick}>edit</button>
        <div className={active ? 'focused' : ''} ref={inputEl} onKeyUp={() => {
          console.log(inputEl.current.innerHTML);
        }}
        >text</div>
      </div>
      <div className="todos">
        {
          todos.map(todo =>
            <div
              key={todo.taskID}
              draggable
              id={"side" + Math.random()}
              onDrag={(event) => onStartDrag(event, todo)}
            >
              {todo.task}
            </div>)
        }
      </div>
      <div id="right"
        onDrop={event => onDrop(event)}
        onDragOver={(event => onDragOver(event))}
        className="done"
      >
      </div>
      <div
        id="bottom"
        onDrop={event => onDrop(event)}
        onDragOver={(event => onDragOver(event))}
        className="done-uo"
      ></div>
      ...
      </div>
  );
}

export default App;