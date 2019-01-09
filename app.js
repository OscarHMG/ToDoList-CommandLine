const argv = require('./config/yargs').argv;
const { createNewTask, getListToDo, updateTask } = require('./to-do/to-do');
const colors = require('colors');

console.log(argv);

let command = argv._[0];


switch (command) {
    case 'create':

        let newTask = createNewTask(argv.description);

        break;

    case 'list':
        let list = getListToDo();
        for (let task of list) {
            console.log('======TASK TO DO====='.green);
            console.log(task.description);
            console.log(task.completed);
            console.log('====================='.green);
        }
        break;

    case 'update':
        updateTask(argv.description, argv.completed);
        break;

    default:
        console.log('Uknown command');
        break;

}