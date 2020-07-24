import React, { Fragment } from 'react';
import './App.css';
import TopLeft from './TopLeft';
import BottomRight from './BottomRight';

const App = () => {
    return (
        <Fragment>
            <div id = "App">
                <a href = "https://convect.dev"><div className = "logo"></div></a>
                <TopLeft />
                <BottomRight />
            </div>
        </Fragment>
    );
}

export default App;
