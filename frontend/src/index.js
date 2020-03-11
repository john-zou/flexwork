import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AzureAD, AuthenticationState } from "react-aad-msal";

// Import the provider created in a different file
import { authProvider } from "./authProvider";

// Initialize airbnb react-dates
import 'react-dates/initialize';

// Clear local storage to prevent any issues with react-aad-msal storing
// "login in progress" which prevents authentication
localStorage.clear();

ReactDOM.render(
    // WITHOUT AD
    <App userInfo={{
        account: {
            name: "John",
            userName: "john@john.john"
        }
    }} />,

    // Uncomment for AD:
    // <AzureAD provider={authProvider} forceLogin={true}>
    //     {({ login, logout, authenticationState, error, accountInfo }) => {
    //         switch (authenticationState) {
    //             case AuthenticationState.Authenticated:
    //                 return <App userInfo={accountInfo} />;
    //             case AuthenticationState.Unauthenticated:
    //                 return (
    //                     <div>
    //                         {error && (
    //                             <p>
    //                                 <span>An error occured during authentication, please try again!</span>
    //                             </p>
    //                         )}
    //                         <p>
    //                             <span>Hey stranger, you look new!</span>
    //                             <button onClick={login}>Login</button>
    //                         </p>
    //                     </div>
    //                 );
    //             case AuthenticationState.InProgress:
    //                 return <p>Authenticating...</p>;
    //         }
    //     }}
    // </AzureAD>,
    document.getElementById("root")
);
