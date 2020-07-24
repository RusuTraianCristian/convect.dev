import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const TopLeft = () => {
    return (
        <Fragment>
            <div id = "TopLeft">
                <div className = "install">
                    &#x276f; npm i convect<span className = "blink">_</span>
                    <span className = "clipboard">
                        <FontAwesomeIcon icon = { faCopy }/>
                    </span>
                </div>
                <h3>Custom React Hook to send and retrieve data from APIs.</h3>
                <h3>Version:</h3>
                <p>0.0.5</p>
                <h3>License:</h3>
                <p>MIT</p>
                <h3>NPM page:</h3>
                <p><a href = "https://www.npmjs.com/package/convect" target = "_blank">https://www.npmjs.com/package/convect</a></p>
                <h3>GitHub page:</h3>
                <p><a href = "https://github.com/RusuTraianCristian/Convect" target = "_blank">https://github.com/RusuTraianCristian/Convect</a></p>
                <h3>Engineered with love by:</h3>
                <p><a href = "https://rusutraiancristian.com" target = "_blank">Chris</a></p>
            </div>
        </Fragment>
    );
}

export default TopLeft;
