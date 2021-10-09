import { React } from 'react'


import Home from '../pages/Home';
import BuildHistory from "../pages/BuildHistory";

export default function HomeRoute() {
        const localStorageData = localStorage.getItem("settings");
        if(localStorageData){
            // if it does - redirect to build history
            return <BuildHistory />
        }
        
        return <Home/>
}
