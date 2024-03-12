import { useUserContext } from "./DashboardContext";

function Sidebar() {
  const user = useUserContext();

  return <div>Sidebar user: {user.name}</div>;
}

export default Sidebar;
