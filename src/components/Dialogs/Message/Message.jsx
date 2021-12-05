import s from "../Dialogs.module.css";


const Message = (props) => {

    return(
        <li className={s.massage} key={props.id}>{props.message}</li>
    )
}
export default Message;
