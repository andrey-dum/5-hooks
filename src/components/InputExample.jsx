import useInput from '../hooks/useInput';

function InputExample() {
  const username = useInput('')
  const password = useInput('')

  return (
    <div className="input">
      <input
        {...username}
        type="text"
        placeholder="username"
      />
      <input
        {...password}
        type="text"
        placeholder="password"
      />
      <button onClick={() => console.log(username.value, password.value)}>Отправить</button>
    </div>
  );
}

export default InputExample