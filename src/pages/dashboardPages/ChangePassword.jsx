function ChangePassword() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-orange-500 text-center">
          Change Password
        </h1>
        <form className="space-y-4">
          <input
            type="password"
            placeholder="Current Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
export default ChangePassword;
