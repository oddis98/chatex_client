import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Redirect() {
  const history = useHistory();
  useEffect(() => {
    history.push("/chatex_client");
  }, [history]);
  return <div></div>;
}
