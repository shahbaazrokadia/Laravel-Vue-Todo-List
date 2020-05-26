<template>
    <ul class="d-flex flex-column-reverse todo-list">
        <todo v-for="todo in todos" :todo="todo" :key="todo.id" />
    </ul>
</template>

<script>
import { mapGetters } from "vuex";
import todo from "../components/TodoList.vue";
export default {
    components: {
        todo
    },
    mounted() {
        this.$store.dispatch("GET_TODOS");
    },
    computed: mapGetters(["todos"])
};
</script>

<style lang="scss" scoped></style>
