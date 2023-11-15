import React from 'react';
import { Link} from 'react-route-dom';

export default () => {
    return (
        <div>
            Im some other page!
            <Link to="/">Go Back Home</Link>
        </div>
    );
};