import { signOut, useSession } from "next-auth/react";
import type { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { data: sessionData } = useSession();

  return (
    <>
      {sessionData && (
        <div className="fixed left-0 top-0 p-2">
          <h1 className="mb-1 text-xl">Signed in as {sessionData.user.name}</h1>
          <button className="btn-primary btn" onClick={() => void signOut()}>
            Sign Out
          </button>
        </div>
      )}
      {children}
    </>
  );
};

export default Layout;
