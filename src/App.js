
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<h1>LOGO</h1>*/}
          <img src='https://i.pinimg.com/236x/9d/12/a3/9d12a3620b8630d3b8c04cf225c0a526.jpg'/>
      </header>
        <nav className='App-nav'>
            <div><a>Mesagges</a></div>
            <div><a>Name</a></div>
            <div><a>Users</a></div>
            <div><a>Main</a></div>
            <div><a>Settings</a></div>

        </nav>
        <div className='App-main'>CONTENT</div>
    </div>
  );
}

export default App;
