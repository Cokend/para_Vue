<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">首页</router-link> |
      <router-link to="/about">Directive</router-link> |
      <router-link to="/todo"><button>ToDo</button></router-link>
      <router-view/>
    </div>

  </div>
</template>
<style>

#nav {
  padding: 30px;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
