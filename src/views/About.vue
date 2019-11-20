<template>
  <div class="about" id="about">
    <h1>自定义指令</h1>
    <p>页面载入时，input 元素自动获取焦点：</p>
    <input v-focus v-model="message" placeholder="输入字符串">
    <p>反转后的字符串：{{ reversedMessage }}</p>

  </div>
</template>
<script>
    // @ is an alias to /src

    export default {
        name: 'About',

        components: {
        },
        data:function(){
            return{
                message:''
            }
        },
        computed:{
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            }
        }
    }

</script>