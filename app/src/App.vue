<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
#app {
  font-family: "Open Sans", sans-serif;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.home {
  width: 50%;
  margin: auto;
  padding: 10vh;
}
.yellow {
  background-color: rgba(246, 165, 35, 1);
}
.red {
  background-color: rgba(171, 19, 65, 1);
}
.blue {
  background-color: rgba(33, 49, 114, 1);
}
.green {
  background-color: rgba(22, 203, 153, 1);
}
h1 {
  font-size: 2em;
}
.todoinput {
  width: 100%;
  float: left;
  border: none;
}
.newtodo {
  position: relative;
}
.todotype {
  position: absolute;
  float: right;
  height: 10px;
  width: 10px;
}
*:focus {
    outline: none;
}
</style>
