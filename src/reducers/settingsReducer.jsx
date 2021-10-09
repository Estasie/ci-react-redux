const initialState = localStorage.getItem("settings")? JSON.parse(localStorage.getItem("settings")): null;
const settingsReducer = (state = initialState , action) => {
    switch (action.type) {
        case "SET_SETTINGS":
            return action.payload;
        default:
            return state;
    }
};


export default  settingsReducer;