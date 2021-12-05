import React from 'react';
import state, {addMes, addPost, newText, subscribe, updateMessage} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const rerenderState = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addMes={addMes} newValue={newText} updateMessage={updateMessage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderState(state)
subscribe(rerenderState)
