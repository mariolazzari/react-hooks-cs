import { useUserContext } from "./DashboardContext";

function Profile() {
  const user = useUserContext();

  return <div>Profile user: {user.name}</div>;
}

export default Profile;
