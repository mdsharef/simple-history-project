// function to dynamically generate id for history 
function* generateId() {
    let id = 100;
    while (true) {
        yield id++;
    }
}
let getID = generateId();

export default getID;