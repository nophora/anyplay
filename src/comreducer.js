


const api = {
    
    mode:false

}

const anyplayReducer = (state = api, action) => {
   
    switch (action.type) {
            case 'MODE': state = { ...state, mode: action.payload };
            break;
        default: state = api;



    }
    return state
};

export default anyplayReducer;