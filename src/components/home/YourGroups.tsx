import type { Group } from "@prisma/client";
import Link from "next/link";
import type { FC } from "react";

interface props {
  groups: Group[];
}

const YourGroups: FC<props> = ({ groups }) => {
  return (
    <div>
      <h1 className="mb-3 text-3xl">Your Groups</h1>
      <ul className="grid grid-cols-3 gap-4">
        {groups.map((e, i) => (
          <Link
            href={`/group/${e.name}`}
            key={i}
            className="rounded-lg p-1 transition-all duration-200 hover:scale-110 hover:bg-slate-400/10"
          >
            {e.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default YourGroups;
