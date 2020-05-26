<template>
    <li :class="{ completed: todo.completed }">
        <div class="form-check">
            <label class="form-check-label">
                <input
                    class="checkbox"
                    type="checkbox"
                    checked=""
                    v-model="todo.completed"
                    @click="completeTodo(todo)"/>
                {{ todo.title }}
                <i class="input-helper"></i
            ></label>
        </div>
        <i
            class="remove mdi mdi-close-circle-outline"
            @click="removeTodo(todo)"
        ></i>
        <!-- |
        <i class="edit mdi fas fa-edit" @click="editTodo(todo)"></i> -->
    </li>
</template>

<script>
export default {
    name: "Todo",
    props: ["todo"],
    methods: {
        removeTodo(todo) {
            this.$store.dispatch("DELETE_TODO", todo);
            // this.$store.commit("CACHE_REMOVED", todo);
        },
        completeTodo(todo) {
            this.$store.dispatch("COMPLETE_TODO", todo);
        }
    }
};
</script>

<style lang="scss">
.edit {
    margin-left: 5px;
    cursor: pointer;
    font-size: 1.438rem;
    font-weight: 600;
    width: 1.25rem;
    height: 1.25rem;
    line-height: 20px;
    text-align: center;
}
</style>
