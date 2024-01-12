import logo from './panda.svg';
import './App.css';
import { useState } from 'react';
import { LandingPage } from './LandingPage/LandingPage';

function WelcomePage(props) {
    return (
        <>
            <header className="App-header">
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                    onClick={() => props.setClicked(true)}
                />
                <span className="AppTitle" onClick={() => props.setClicked(true)}>
                    Welcome home
                </span>
            </header>
        </>
    );
}
function AppPage(props) {
    console.log(props);
    return <>{!props.clicked ? <WelcomePage setClicked={props.setClicked} /> : <LandingPage />}</>;
}

function App() {
    const [clicked, setClicked] = useState(false);
    console.log(clicked);
    console.log(setClicked);
    return (
        <div className="App">
            <AppPage clicked={clicked} setClicked={setClicked}></AppPage>
        </div>
    );
}

export default App;
