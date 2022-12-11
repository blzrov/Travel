import React from "react";

export default function Help() {
  React.useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const response = await fetch("http://localhost:8080/help/"); // завершается с заголовками ответа
    const result = await response.json(); // читать тело ответа в формате JSON
    console.log(result);
  };

  return <div>Help</div>;
}
