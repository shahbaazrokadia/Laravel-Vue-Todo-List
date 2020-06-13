import axios from "axios";
import state from "./state";
// const apiClient = axios.create({
//     baseURL: `http://todo.test`,
//     withCredentials: false, // This is the default
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//     }
// });
let actions = {
    ADD_TODO({
        commit,
        state
    }, todo) {
        axios
            .post("/api/todos", todo)
            .then(res => {
                console.log(res.data)
                this.commit("ADD_TODO", res.data);
            })
            .catch(err => {
                console.log(err);
            });
    },
    DELETE_TODO({
        commit
    }, todo) {
        axios
            .delete(`/api/todos/${todo.id}`)
            .then(res => {
                this.commit("DELETE_TODO", todo);
            })
            .catch(err => {
                console.log(err);
            });
    },
    GET_TODOS({
        commit,
        state
    }) {
        axios
            .get("/api/todos")
            .then(res => {
                {
                    this.commit("GET_TODOS", res.data);
                    return state.todos;
                }
            })
            .catch(err => {
                console.log(err);
            });
    },
    COMPLETE_TODO({
        commit
    }, todo) {
        axios
            .get(`/api/complete-todo/${todo.id}`)
            .then(res => {
                if (res.data === "completed") console.log("completed");
            })
            .catch(err => {
                console.log(err);
            });
    },
    UPDATE_TODO({
        commit
    }, todo) {
        console.log("im in");
        axios.put(`/api/todos/${todo.id}`, todo).then(res => {
            if (res.data === 'updated')
                console.log("updated")
        }).catch(err => console.log(err))

    }
};
export default actions;
