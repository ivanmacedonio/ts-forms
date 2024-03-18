import { useSelector } from "react-redux";
import User from "../utils/types";

interface RootState {
  user: User;
}
export const Todo = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div>
      <ul>
        <li>Nombre : {user.name}</li>
        <li>Username : {user.username}</li>
        <li>email : {user.email}</li>
      </ul>
    </div>
  );
};
