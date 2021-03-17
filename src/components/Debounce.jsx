import { useState, useEffect, useRef } from 'react'
import useDebounce from '../hooks/useDebounce'
import useScroll from '../hooks/useScroll'



function Debounce() {
  const [value, setValue] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })

  }

  const onChange = e => {
    setValue(e.target.value)
    debouncedSearch(e.target.value)
  }



  return (
    <div className="debounce">
      <input
        value={value}
        type="text"
        onChange={onChange}
      />
    </div>
  );
}

export default Debounce