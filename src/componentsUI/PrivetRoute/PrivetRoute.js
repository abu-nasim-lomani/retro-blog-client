import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import { UserContext } from '../../App';

function PrivetRoute({ children, ...rest }) {
    const [user, setUser]= useContext(UserContext);
    console.log(user)

    return (
        <Route
            {...rest}
            render={({ location  }) =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

export default PrivetRoute
