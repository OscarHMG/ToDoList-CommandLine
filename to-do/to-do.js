const fs = require('fs');

let listToDo = [];


/**
 * Function to create new task
 * @param {*} description 
 */
const createNewTask = (description) => {

    loadDB();

    let toDo = {
        description,
        completed: false
    };

    listToDo.push(toDo);
    saveDB();

    return listToDo;
}

const getListToDo = () => {
    loadDB();
    return listToDo;
}


const updateTask = (description, completed = true) => {
    loadDB();

    let index = listToDo.findIndex((task) => {
        return task.description === description
    });

    if (index >= 0) {
        listToDo[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }

}

/**
 * Function to save info in 'DB'
 */
const saveDB = () => {
    let data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json', data, (error) => {
        if (error) throw error
    });

}


/**
 * Function to load all the info saved in the json file
 */
const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }

}


module.exports = {
    createNewTask,
    getListToDo,
    updateTask
}