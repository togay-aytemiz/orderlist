import { useEffect, useState } from "react";

const url = "https://api.github.com/users/MiracKoksal1";

const MultipleReturn = () => {
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsError(true);
          setIsLoading(false);
          throw new Error(`${res.statusText}`);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};
export default MultipleReturn;
