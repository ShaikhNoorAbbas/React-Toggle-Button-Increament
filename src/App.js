import React, { Fragment, useState } from "react";
const ListItem = (props) => {
  return (
    <>
      <div className="list-item row jc-space-between ">
        <span>{props.data.description}</span>
      </div>
    </>
  );
};

const App = () => {
  const [task, settask] = useState("");
  const [todo, settodo] = useState([]);
  const inputHandler = (event) => {
    const { target: { value } } = event;
    console.log(value);
    settask(value);
  };
  const clcikHandler = () => {
    todo.push({ description: task });
    settodo(todo);
    settask("");
  };
  return (
    <Fragment>
      <div className="app-background">
        <p className="heading-text"> TO-DO List 🔥</p>
        <div className="task-container">
          <div>
            <input type="text" className="text-input" value={task} onChange={inputHandler} />
            <button className="add-button" onClick={clcikHandler}>Add Task 👆</button>
            {todo?.length ? todo.map((element) => <ListItem data={element} />) :
              <p className="no-item-text" >No Task Added 😕</p>}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default App;