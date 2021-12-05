import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

function App({state, addPost, addMes, newValue, updateMessage}) {
// debugger;
    return (

            <div className="App">
                <Header/>
                <Navbar/>
                <div className='App-main'>
                    <Routes>
                        <Route path="/messages/*" element={<Dialogs state={state.dialogPage}
                                                                    addMes={addMes}
                                                                    updateMessage={updateMessage}/>}/>
                        <Route path="/profile" element={<Profile state={state.profilePage}
                                                                 addPost={addPost}
                                                                 newValue={newValue}
                                                                 />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/friends" element={<Friends state={state.friendsPage}/>}/>
                    </Routes>

                </div>

            </div>

    );

}

export default App;
