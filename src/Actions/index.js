export function userlists(users){
    return{
        type:'USERS_LOADED',
        users
    };
}
export function userloading(bool){
    return{
        type:'USERS_LOADING',
        status:bool
    };
}

export function itemFetchData(url){
    return (dispatch)=> {
       dispatch(userloading(true));
       fetch(url)
       .then((response)=>{
        dispatch(userloading(false));
        return response;
       })
       .then((response)=>response.json())
       .then((users)=>dispatch(userlists(users)));
       
    };
}