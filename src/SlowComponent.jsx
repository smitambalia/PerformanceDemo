
function slowFunction(ms) {
    const now = Date.now();
    let newDate = now;
    while(newDate  - now < ms){
        newDate = Date.now();
    }

}

export default function SlowComponent() {
    slowFunction(1000);
    return null;
}