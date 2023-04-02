# 一、条件渲染指令

- `v-show`

  ```markdown
  - 这个指令只隐藏节点，适合使用在变化非常频繁的场景
  ```

  

- `v-if`，`v-else-if`，`v-else`

  ```markdown
  1. 这个指令会把整个dom节点去点，适合变化不频繁的场景,语法规则与java中
  
  2. v-else的判断不用写条件，写了也没用，它是所有条件都不成立时才执行的逻辑
  
  3. 如果把`v-if`，`v-else-if`，`v-else`搭配使用，中间不允许被打断
  
  4. `v-if`可以配合<template>标签一起使用，<template>不影响结构，渲染完成之后页面会移除<template>标签
  
  
  ```

  

