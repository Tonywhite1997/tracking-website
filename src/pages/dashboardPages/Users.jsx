import { Link } from "react-router-dom";
import useUsers from "../../customHooks/useUsers";

function Users() {
  const { users, isSuccess, isLoading, isRefetching, error } = useUsers();
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4 text-orange-500">All Users</h1>
      {error && (
        <p className="text-red-500 text-center text-2xl">
          {error?.response?.data?.msg}
        </p>
      )}
      {isLoading && <p className="text-center">Loading...</p>}
      {isRefetching && <p className="text-center">Updating users...</p>}
      <div className="overflow-x-auto no-scrollbar">
        {isSuccess && (
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4">isBanned</th>
                <th className="text-left py-3 px-4">Role</th>
              </tr>
            </thead>
            <tbody>
              {users?.data?.map((user) => (
                <tr
                  key={user._id}
                  className="border-b last:border-none hover:bg-orange-50 transition"
                >
                  <td className="py-3 px-4 max-w-xs">
                    <Link
                      to={`/dashboard/users/${user._id}`}
                      className="block w-full h-full"
                    >
                      {user.email}
                    </Link>
                  </td>

                  <td className="py-3 px-4 max-w-xs">
                    <Link
                      to={`/dashboard/users/${user._id}`}
                      className="block w-full h-full"
                    >
                      {user.isBanned ? "True" : "False"}
                    </Link>
                  </td>
                  <td className="py-3 px-4 max-w-xs">
                    <Link
                      to={`/dashboard/users/${user._id}`}
                      className="block w-full h-full"
                    >
                      {user.role}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Users;
