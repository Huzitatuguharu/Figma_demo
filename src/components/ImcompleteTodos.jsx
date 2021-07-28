import React from "react";

export const ImcompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="imcomplete_area childbox">
      <p className="sub_title">👀これから取得</p>
      <div>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list_row">
              <p>{todo}</p>
              <button onClick={() => onClickComplete(index)}>できた</button>
              <button onClick={() => onClickDelete(index)}>やめた</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
