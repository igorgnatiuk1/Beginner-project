import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

const Dialogs = ({state, addMes, updateMessage}) => {
    const dialogs = state.dialogData.map(d => <Dialog name={d.name} id={d.id}/>)
    const messages = state.dialogMessage.map(m => <Message message={m.message} id={m.id}/>)
    const textValue = React.createRef();
    const addMessage = () => {
        addMes()
    }
    const newMessage = () => {
        const text = textValue.current.value;
        updateMessage(text)
    }
    return (
        <>
            <h2 className={s.name}>Dialogs</h2>
            <div className={s.main}>
                <ul className={s.dialogs}>
                    {dialogs}
                </ul>
                <ul className={s.massages}>
                    {messages}
                    <textarea ref={textValue} value={state.newMessage} onChange={newMessage}></textarea>
                    <button onClick={addMessage}>Add message</button>
                </ul>

            </div>
        </>
    )
}

export default Dialogs;
