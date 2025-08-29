import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useChangePassword from "../../customHooks/useChangePassword";

function ChangePassword() {
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
  });

  function getPassword(e) {
    const { name, value } = e.target;
    setPassword((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const {
    changePassword,
    isChangingPassword,
    isPasswordSuccess,
    passwordError,
  } = useChangePassword();

  function handleSubmit(e) {
    e.preventDefault();
    return changePassword({
      currentPassword: password.currentPassword,
      newPassword: password.newPassword,
    });
  }

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      isPasswordSuccess && navigate("/login");
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [isPasswordSuccess]);

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-orange-500 text-center">
          Change Password
        </h1>
        <form className="space-y-4 text-center" onSubmit={handleSubmit}>
          <input
            type="password"
            name="currentPassword"
            value={password.currentPassword}
            onChange={(e) => getPassword(e)}
            placeholder="Current Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            name="newPassword"
            value={password.newPassword}
            onChange={(e) => getPassword(e)}
            placeholder="New Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {passwordError && (
            <small className="text-center text-red-500">
              {passwordError?.response?.data?.msg}
            </small>
          )}
          <button
            type="submit"
            disabled={isChangingPassword}
            className="w-full bg-orange-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            {isChangingPassword
              ? "Changing..."
              : isPasswordSuccess
              ? "Password Changed"
              : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default ChangePassword;
