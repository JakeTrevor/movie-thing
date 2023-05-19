import type { Group } from "@prisma/client";
import Link from "next/link";
import type { FC } from "react";

interface props {
  groups: Group[];
}

const YourGroups: FC<props> = ({ groups }) => {
  return (
    <div>
      <h1 className="text-3xl">Your Groups</h1>
      <ul className="grid w-40 grid-cols-3 gap-1">
        {groups.map((e, i) => (
          <Link href={`${""}`} key={i}>
            {e.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default YourGroups;
