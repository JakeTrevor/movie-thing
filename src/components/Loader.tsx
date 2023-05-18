import type { FC } from "react";

interface props {
  status: "error" | "success" | "loading";
}

const Loader: FC<props> = ({ status }) => {
  return status == "loading" ? (
    <p>loading...</p>
  ) : (
    <p>uh oh! seems like something went wrong</p>
  );
};

export default Loader;
