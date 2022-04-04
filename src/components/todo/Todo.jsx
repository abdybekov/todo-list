import css from "./Todo.module.css"



export default function Todo(props) {
  return (
    <div>
      <label className={css.todoCheck} >
        <input
          type="checkbox"
          checked={props.status}
        />
        <p className={props.status ? css.done : ""}>{props.text}</p>
      </label>
    </div>
  )
}


{/* <div>{props.text}</div> */ }