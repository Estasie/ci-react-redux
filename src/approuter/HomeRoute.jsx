import { React } from 'react'

import { Redirect } from 'react-router';


import Home from '../pages/Home';

export default function HomeRoute() {
        const localStorageData = localStorage.getItem("settings");
        if(localStorageData){
            // if it does - redirect to build-history handler
            return <Redirect to="/build-history" />
        }
        
        return <Home/>
}
