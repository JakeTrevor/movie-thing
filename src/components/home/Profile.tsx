import { type FC } from "react";
import YourGroups from "./YourGroups";
import { api } from "~/utils/api";
import Loader from "../Loader";
import Link from "next/link";

const Profile: FC = () => {
  const { data: groups, status } = api.group.getByUser.useQuery();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col text-center">
        {groups ? <YourGroups groups={groups} /> : <Loader status={status} />}
        <div className="divider">or</div>
        <Link href="/create/group" className="btn-secondary btn">
          Create a new Group
        </Link>
      </div>
    </div>
  );
};

export default Profile;
