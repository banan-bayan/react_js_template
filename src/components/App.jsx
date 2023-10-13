import React from "react";

export const App = () => {
  console.log(process.env.REACT_APP_API_KEY, 'api key')
  return (<div>App component</div>);
};