import { useEffect, useState } from "react";

export function ApiSandbox() {
  const [apiStuff, setApiStuff] = useState("");

  const randomApi = () => {
    return fetch("https://randomuser.me/api")
      .then((val) => {
        val.json();
      })
      .then((d) => {
        return setApiStuff(JSON.stringify(d) || "");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    randomApi();
  }, []);

  return <p>{apiStuff}</p>;
}
