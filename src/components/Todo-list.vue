<template>
    <div class="todolists">
        hello
        <ol>
            <li v-for="(item, index) in dataSource" :key="index"
                @click="finishHandler(item)"
                class="todo-list-li"
            >
                <del v-if="item.done" class="del-todo-list">{{ item.text }}</del>
                <span v-else>{{ item.text }}</span>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "Todo-list",
        props: {
            dataSource: Array
        },
        data() {
            return {
                inputTodoData: ''
            }
        },
        methods: {
            finishHandler(item) {
                item.done = !item.done;
            }
        }
    }
</script>

<style scoped>

</style>
