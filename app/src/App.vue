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
.grey {
  background-color: rgba(237, 237, 237, 1);
}
.cleargrey {
  background-color: rgba(245, 245, 245, 1);
}
h1 {
  font-size: 1.5em;
  font-weight: 500;
}
h2 {
  margin-top: 15%;
  font-size: 1.5em;
  font-weight: 500;
}
h3 {
  padding-top: 7px;
  font-size: 1.1em;
  font-weight: 400;
  color: #2c3e50;
}
.todoinput {
  height: 30px;
  width: 100%;
  display: inline-block;
  border: none;
  border-radius: 25px;
}
.newtodo {
  width: 100%;
  position: relative;
}
.absolute-pos {
  z-index: 10;
  right: 0;
  position: absolute;
  top: 0;
  margin-right: 4px;
}
.todotype {
  border: none;
  margin-left: 4px;
  margin-top: 5px;
  float: left;
  height: 20px;
  width: 20px;
  border-radius: 10px;
}
.float-right {
  float: right;
}
.float-left {
  float: left;
}
.todo-list {
  padding-left: 0;
  list-style: none;
  list-style-type: none;
}
.todo-list li {
  position: relative;
  height: 40px;
  border-radius: 8px;
}
*:focus {
  outline: none;
}
.donefilter {
  background-color: #fff;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}
</style>
