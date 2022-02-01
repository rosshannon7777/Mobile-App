interface TodoInterface{
    task:Array<string>;
    addTask(task:string):number;
    listAll():void;
    deleteTask(task:string):number;
}

class Todoimplements TodoInterface{
    tasks:Array<string> = [];

    addTask(task) {
        tasks.push(task);
        console.log("Item: " + task + " added to Array");
        return 
    }
        listAll() {
            tasks.forEach(function (item) {
                console.log(item);
            });
    }
    deleteTask(task) {
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
