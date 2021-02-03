import hotkeys from "hotkeys-js";

const observeMap = {}
export function addKeyObserver(key, callback){
    if(!observeMap[key]){
        observeMap[key] = [];
        hotkeys(key,() => executeCallbacks(key));
    }
    observeMap[key].push(callback)
}

export function removeKeyObserver(key, callback){
    observeMap[key] = observeMap[key].filter(item => item !== callback);
}

function executeCallbacks(key){
    for(const ob of observeMap[key]){
        ob();
    }
}