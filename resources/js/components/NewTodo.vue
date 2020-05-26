<template>
    <input
        type="text"
        class="form-control todo-list-input"
        placeholder="What do you need to do today?"
        @keyup.enter="addTodo"
        v-model="newTodo.title"
        name="title"
    />
</template>

<script>
export default {
    data() {
        return {
            newTodo: this.createFreshEventObject()
        };
    },
    methods: {
        addTodo() {
            this.$store.dispatch("ADD_TODO", this.newTodo);
        },
        createFreshEventObject() {
            return {
                title: ""
            };
        }
    }
};
</script>

<style lang="scss" scoped></style>
