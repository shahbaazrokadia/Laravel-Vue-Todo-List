<template>
  <li :class="{ completed: todo.completed, editing: todo == editedTodo }">
    <div class="form-check">
      <label class="form-check-label">
        <input
          class="checkbox"
          type="checkbox"
          checked
          v-model="todo.completed"
          @click="completeTodo(todo)"
        />
        <i class="input-helper"></i>
      </label>
      <label class="form-check-label edit-text" v-if="!isLabelTextHidden">{{ todo.title }}</label>
      <input
        class="edit edit-text-box"
        type="text"
        v-if="!isEditTextHidden"
        v-model="todo.title"
        v-todo-focus="todo == editedTodo"
        @blur="doneEdit(todo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.esc="cancelEdit(todo)"
      />
    </div>
    <i class="remove mdi mdi-close-circle-outline" @click="removeTodo(todo)"></i>
    |
    <i
      class="edit-icon mdi fas fa-edit"
      v-on:click="isEditTextHidden = false, isLabelTextHidden = true"
      @click="editTodo(todo)"
    ></i>
  </li>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  data() {
    return {
      editedTodo: null,
      beforeEditCache: "",
      isEditTextHidden: true,
      isLabelTextHidden: false
    };
  },
  methods: {
    removeTodo(todo) {
      this.$store.dispatch("DELETE_TODO", todo);
      // this.$store.commit("CACHE_REMOVED", todo);
    },
    completeTodo(todo) {
      this.$store.dispatch("COMPLETE_TODO", todo);
    },
    editTodo(todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },
    doneEdit(todo) {
      console.log(todo);
      if (!this.editedTodo) {
        console.log("not");
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      this.$store.dispatch("UPDATE_TODO", todo);
      this.isEditTextHidden = true;
      this.isLabelTextHidden = false;
      if (!todo.title) {
        this.removeTodo(todo);
      }
    },
    cancelEdit(todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
      this.isEditTextHidden = true;
      this.isLabelTextHidden = false;
    }
  },
  directives: {
    "todo-focus": function(el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  }
};
</script>

<style lang="scss">
.edit-icon {
  margin-left: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  width: 1.25rem;
  height: 1.25rem;
  line-height: 20px;
  text-align: center;
}
.edit-text {
  margin-top: -19px;
}
.edit-text-box {
  margin: -18px 0px 0px 30px;
  display: block;
}
</style>
