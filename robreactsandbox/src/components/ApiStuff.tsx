import { useEffect, useState } from "react";

export function ApiSandbox() {
  const [apiStuff, setApiStuff] = useState("");

  //https://devtrium.com/posts/async-functions-useeffect
  const randomApi = async () => {
    // return fetch("https://randomuser.me/api")
    //   .then((val) => {
    //     val.json().then((d) => setApiStuff(JSON.stringify(d)));
    //   })
    //   .catch((err) => console.log(err));
    const response = await fetch("https://randomuser.me/api");
    setApiStuff(JSON.stringify(await response.json()) || "");

    //Both ways work - fetch returns a Response object/interface that .json() breaks out, .json is a promise so await needs to be triggered here
  };

  useEffect(() => {
    randomApi();
  }, []);

  return <p>{apiStuff}</p>;
}
