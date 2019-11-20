<template>
    <div class="todo-list">
        <h3>ToDo List</h3>
        <TodoLists :data-source="list"></TodoLists>
    </div>
</template>

<script>
    import TodoLists from './../components/Todo-list'
    export default {
        name: "Todo",
        components: {
            TodoLists
        },
        data() {
            return {
                url: 'https://api.myjson.com/bins/cvnm6',
                list: []
            };
        },
        created() {
            this.fetch();
        },
        methods: {
            async fetch() {
                const { data } = await this.$http.get(this.url);
                console.log(data);
                this.list = data.list;
            }
        }
    }
</script>

<style scoped>

</style>
