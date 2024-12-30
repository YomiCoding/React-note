import React from "react";
import Count from "./containers/Count"; //引入的Count的容器组件
import Person from "./containers/Person"; //引入的Person的容器组件

const App = () => {
  return (
    <div>
      <Count />
      <hr />
      <Person />
    </div>
  );
};

export default App;
