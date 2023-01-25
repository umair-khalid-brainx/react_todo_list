import React, { useState, useEffect, useRef } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { RxUpdate } from 'react-icons/rx';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const generateID = () => {
    setCount(count+1)
    return count
  }

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: generateID(),
      text: input
    });
    setInput('');
  };

  return (
      <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
            <>
              <input className='todo-input edit' name='text' placeholder='Update your item' value={input} onChange={handleChange} ref={inputRef} />
              <button onClick={handleSubmit} className='todo-button edit'><RxUpdate /></button>
            </>
        ) : (
            <>
              <input className='todo-input' name='text' placeholder='Add a todo' value={input} onChange={handleChange} ref={inputRef} />
              <button className='todo-button' onClick={props.onSubmit(input)}><BsFillPlusCircleFill /></button>
            </>
        )}
      </form>
  );
}

export default TodoForm;