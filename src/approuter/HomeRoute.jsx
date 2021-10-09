import { React } from 'react'

import Home from '../pages/Home';
import BuildHistory from "../pages/BuildHistory";
import store from "../store/store";

export default function HomeRoute() {
    
        const localStorageData = store.getState()["settings"];
        if(localStorageData){
            // if it does - redirect to build history
            return <BuildHistory />
        }
        
        return <Home/>
}
