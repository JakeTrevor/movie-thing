import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { api } from "~/utils/api";

const CreateGroup: NextPage = () => {
  const [toastID, setToastID] = useState<string>();
  const router = useRouter();

  const { mutate: create } = api.group.create.useMutation({
    onMutate: () => setToastID(toast.loading("Creating group...")),
    onError: (err) =>
      toast.error(`uh oh, something went wrong:\n${err.message}`, {
        id: toastID,
      }),

    onSuccess: async (group) => {
      toast.success("Successfully created group!", { id: toastID });
      await router.push(`/group/${group.name}`);
    },
  });

  const [name, setName] = useState("");

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            create({ name });
          }}
        >
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text">Group Name</span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input
                value={name}
                onChange={(e) => void setName(e.target.value)}
                type="text"
                placeholder=""
                className="input-bordered input"
              />
            </label>
          </div>
          <input
            className="btn-secondary btn"
            type="submit"
            value="Create Group"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
