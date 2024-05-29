import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

function UserName() {
  const userName = useSelector(getUsername);
  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default UserName;
