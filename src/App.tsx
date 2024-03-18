import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Todo } from "./components/Todo";
import { addUser, changeEmail } from "./redux/userSlice";
import User, { EmailUser } from "./utils/types";
function App() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<EmailUser>({ email: "" });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => handleData(data))
      .catch((error) => console.log(error));
  }, []);

  const handleData = (data: User) => {
    dispatch(addUser(data));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changeEmail(email))
  };
  return (
    <>
      <Todo></Todo>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          value={email.email}
          onChange={handleChange}
        />
        <button type="submit">Cambiar</button>
      </form>
    </>
  );
}

export default App;
