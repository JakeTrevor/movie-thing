import { type NextPage } from "next";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();
  const { groupName } = router.query;

  return <>{groupName}</>;
};

export default Page;
