import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete_area childbox">
      <p className="sub_title">食べたもの</p>
      <div>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list_row">
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>もう１回食べる</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
