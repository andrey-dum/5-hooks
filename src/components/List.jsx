import { useState, useEffect, useRef } from 'react'
import useScroll from '../hooks/useScroll'



function List() {
  const [todos, setTodos] = useState([])
  const [page, setPage] = useState(1)
  // const [limit, setLimit] = useState(10)
  const limit = 20
  const parentRef = useRef()
  const childRef = useRef()
  const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit))

  function fetchTodos (page, limit) {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
      .then(response => response.json())
      .then(json => {
        setTodos(prev => [...prev, ...json])
        setPage(prev => prev + 1)
      })

  }

  // useEffect(() => {

  //   fetchTodos(page, limit)

  // }, [])

  return (
    <div ref={parentRef} className="list" style={{height: '80vh', overflow: 'auto'}}>
      {todos.map(todo => <div key={todo.id} style={{padding: 10, border: '1px solid #ddd'}}>{todo.id}. {todo.title}</div>)}
      <div ref={childRef} style={{height: 20, background: '#ccc'}}></div>
    </div>
  );
}

export default List