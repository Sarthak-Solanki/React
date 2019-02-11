import React from "react"
var count = 1;
function TodoList(){
return (
        <div>
            <input type="checkbox"/>
            <p>item {count}  is here</p>
        </div>
    )
}
export default TodoList