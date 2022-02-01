var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("Item: " + task + " added to Array");
    return tasks.length;
}
function listAll() {
    tasks.forEach(function (item) {
        console.log(item);
    });
    function deleteTask(task) {
        var index = tasks.indexOf(task);
        if (index > -1) {
            tasks.splice(index, 1);
            console.log("Item: " + task + " has been removed from Array.");
        }
        else {
            console.log("Item: " + task + " not found.");
        }
        return tasks.length;
    }
}
addTask("PArt A");
var count = addTask("Part B");
console.log(count);
listAll();
//count = deleteTask("Part B");
