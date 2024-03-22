export function setUserData(data){
    localStorage.setItem('user', JSON.stringify(data));
}

export function getUserData(){
    return JSON.parse(localStorage.getItem('user'));
}

export function clearUserData(){
    localStorage.removeItem('user')
}

//TODO Add custom validation
export function createSubmitHandler(callback){
    return function(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = [...formData.entries()].map(([key, value]) =>[key, value.trim()]);
        callback(Object.fromEntries(data), event.target);
    };
}