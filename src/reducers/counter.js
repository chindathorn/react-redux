import { INCREMENT,DECREMENT  } from "../type";

const counterReducer = (state = 0, action) => {
    console.log("[type]", action);
    switch(action.type) {
        case INCREMENT:
            return state + action.payload;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;  