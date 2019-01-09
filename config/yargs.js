//Commands: create, update.


const argv = require('yargs')
    .command('create', 'Create new task', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description of the new task'
        }
    })
    .command('update', 'Update task', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description of the new task'
        },
        complete: {
            default: true,
            alias: 'c',
            desc: 'Mark as complete or pending the task'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}