<template>
    <div id="main">
      <router-link to="/login">登录</router-link>
      <router-view></router-view>
    </div>

</template>
<style>

  #main {
    padding: 30px;

  }

  #main a {
    font-weight: bold;
    color: #2c3e50;
  }

  #main a.router-link-exact-active {
    color: #42b983;
  }
</style>
