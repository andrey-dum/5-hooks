import useRequest from '../hooks/useRequest';
import axios from 'axios'

function Request() {
  const [todos, loading, error ] = useRequest(fetchTodos)

  function fetchTodos () {
    return axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
  }

  if (error) {
    return 'Произошла ошибка!!!'
  }

  return (
    <div className="debounce">
      {loading ? 'LOADING...' : todos?.map(todo => <div key={todo.id}>{todo.title}</div>)}
    </div>
  );
}

export default Request