import React, { Fragment } from 'react';

const BottomRight = () => {
    return (
        <Fragment>
            <div id = "BottomRight">
                <h3>Installation:</h3>
                <p>Use <a href = "https://www.npmjs.com/" target = "_blank">NPM</a> to install Convect.</p>
                <p>&#x276f; npm i convect</p>
                <h3>Usage:</h3>
                <p>import useConvect from 'convect';</p>
                <pre>
                    <code>
                        { `const options = {
    // url
    // method
    // headers
    // body
}` }
                    </code>
                </pre>
                <p>const [data, status] = useConvect(options);</p>
                <p>{ `// typeof data "object" (data fetched)` }</p>
                <p>{ `// typeof status "number" (request status)` }</p>
                <h3>Contribute/report bugs @:</h3>
                <p><a href = "https://github.com/RusuTraianCristian/Convect/issues" target = "_blank">https://github.com/RusuTraianCristian/Convect/issues</a></p>
            </div>
        </Fragment>
    );
}

export default BottomRight;
