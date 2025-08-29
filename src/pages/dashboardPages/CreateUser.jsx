import { useState } from "react";
import useCreateUser from "../../customHooks/useCreateUser";

function CreateUser() {
  const [newUserDetails, setNewUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { createUser, isPending, isSuccess, error } = useCreateUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(newUserDetails);
  };

  return (
    <div>
      <form
        className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Create New User
        </h2>

        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            name="username"
            value={newUserDetails.username}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={newUserDetails.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={newUserDetails.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {error && (
          <div className="w-full text-center -mb-2">
            <small className="text-red-500">{error?.response?.data?.msg}</small>
          </div>
        )}

        <div className="pt-4">
          <button
            type="submit"
            disabled={isPending}
            className={`w-full cursor-pointer  bg-orange-600  text-white px-4 py-2 rounded-lg hover:bg-orange-400 transition ease-in`}
          >
            {isPending
              ? "Creating..."
              : isSuccess
              ? "User Created"
              : "Create New User"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
