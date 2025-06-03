import { useAuth } from '../auth/AuthContext';

const OtherComponent = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-4 border rounded">
      <p>Welcome, {user?.name || user?.username}</p>
      {user?.picture && (
        <img src={user.picture} alt="User" className="w-12 h-12 rounded-full" />
      )}
      <p>Email: {user?.email}</p>
      <button onClick={logout} className="mt-2 text-red-600">
        Logout
      </button>
    </div>
  );
};

export default OtherComponent;
