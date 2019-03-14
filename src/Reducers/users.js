export function userlists(state=[],action){
    
    switch(action.type){
        case'USERS_LOADED':
            return action.users;
        
        default:
            return state;
    }
}

export function userloading(state=false,action){
    switch(action.type){
        case'USERS_LOADING':
            return action.status;
        
        default:
            return state;
    }
}