import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = ({name, id}) => {
    let path = '/messages/' + id;
    return (
        <li className={s.dialog}><NavLink to={path}>{name}</NavLink></li>
    )
}
export default Dialog;
