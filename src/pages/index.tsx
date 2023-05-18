import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Login from "~/components/home/Login";
import Profile from "~/components/home/Profile";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return sessionData ? <Profile /> : <Login />;
};

export default Home;
