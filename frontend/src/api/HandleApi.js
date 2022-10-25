import axios from 'axios'
const backendUrl = "http://localhost:5000"
const save_url = backendUrl + "/save"
const update_url = backendUrl + "/update"
const delete_url = backendUrl + "/delete"

const getAllToDo = (setToDo) => {
    axios
        .get(backendUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
        .catch((err) => console.log(err))
}

const addToDo = (text, setText, setToDo) => {

    axios
        .post(save_url, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
        .patch(update_url, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const deleteToDo = (_id, setToDo) => {

    axios
        .post(delete_url, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo }