import { Group } from "@prisma/client";
import { GetServerSideProps, type NextPage } from "next";
import { useRouter } from "next/router";
import { z } from "zod";
import { api } from "~/utils/api";

export const getServerSideProps: GetServerSideProps<{
  group: Group;
  groupName: string;
}> = async ({ query }) => {
  let { groupName } = query;
  groupName = z.string().parse(groupName);

  let group = api.group.getByName.useQuery(name);
  return {
    props: {
      group,
      groupName,
    },
  };
};

const Page: NextPage = () => {
  const router = useRouter();
  const { groupName } = router.query;

  return <>{groupName}</>;
};

export default Page;
