import { useEffect, useState } from "react";
import { API } from "./constants";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const url = `${API}/users/${userId}`;

    const getUsers = async () => {
      const res = await fetch(url);
      const json = await res.json();
      console.log(json);
      setUser(json);
    };

    getUsers();
  }, [userId]);

  if (!user) {
    return "Yükleniyor...";
  }

  return (
    <section>
      <dl>
        <dt>İsim</dt>
        <dd>{user.name}</dd>
        <dt>Email</dt>
        <dd>{user.email}</dd>
      </dl>
    </section>
  );
}

export default UserProfile;
