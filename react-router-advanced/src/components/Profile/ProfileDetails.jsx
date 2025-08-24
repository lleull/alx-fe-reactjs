// src/components/Profile/ProfileDetails.jsx
import { useAuth } from "../../hooks/useAuth";
const ProfileDetails = () => {
  const { user } = useAuth();

  return (
    <div>
      <h3>Profile Details</h3>
      <div
        style={{
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          maxWidth: "400px",
        }}
      >
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
