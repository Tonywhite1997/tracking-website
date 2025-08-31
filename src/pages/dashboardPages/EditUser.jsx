import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useDeleteUser from "../../customHooks/useDeleteUser";
import useEditUser from "../../customHooks/useEditUser";
import useGetUser from "../../customHooks/useGetUser";

function EditUser() {
  const [formData, setFormData] = useState({
    email: "",
    isBanned: false,
    role: "user",
  });

  const { id } = useParams();

  const { user, isLoading, error } = useGetUser(id);

  useEffect(() => {
    if (user?.data) {
      setFormData({
        email: user?.data.email || "",
        role: user?.data.role || "user",
        isBanned: user?.data.isBanned || false,
      });
    }
  }, [user?.data]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "isBanned" ? value === "true" : value,
    }));
  };

  const { edit, isPending, isSuccess, error: editError } = useEditUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    edit({
      editedUser: formData,
      id: user?.data?._id,
    });
  };

  const {
    deleteUser,
    isPending: isDeletingUser,
    error: userDeleteError,
    isSuccess: userDeleteSuccess,
  } = useDeleteUser();

  return (
    <div>
      {isLoading && <p>Loading</p>}
      {error && <p>{error?.response?.data?.msg}</p>}
      <div className="flex justify-center items-center gap-2 flex-col mb-4">
        <button
          className="border p-2 rounded bg-red-500 text-white hover:bg-amber-500 transition ease-in cursor-pointer"
          onClick={() => deleteUser({ userID: user?.data?._id })}
        >
          {isDeletingUser
            ? "Deleting..."
            : userDeleteSuccess
            ? "User Deleted"
            : "Delete User"}
        </button>
        {userDeleteError && (
          <small>{userDeleteError?.response?.data?.msg}</small>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Edit User</h2>

        {/* User Info */}

        <div>
          <label className="block text-sm font-medium">User Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">User ban status</label>
          <select
            name="isBanned"
            value={formData.isBanned}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">User role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            <option value={"user"}>User</option>
            <option value={"admin"}>Admin</option>
          </select>
        </div>

        {/*  */}
        {editError && (
          <p className="text-center text-red-500">
            {editError?.response?.data?.msg}
          </p>
        )}

        {/* Edit Button */}

        <div className="pt-4">
          <button
            type="submit"
            disabled={isPending}
            className={`w-full cursor-pointer   text-white px-4 py-2 rounded-lg bg-orange-600 hover:bg-amber-500 transition ease-in`}
          >
            {isPending
              ? "Saving changes"
              : isSuccess
              ? "Changes Saved"
              : "Edit User"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
