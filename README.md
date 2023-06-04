# vue手柄控制器

vue手柄控制器

## 在线demo

[demo](http://meta.cunjiuyeshu.top/handle-control/index.html#/)



## 案例

```bash
npm install @liaoqinwei/vue-handle-control

```

disable:boolean 是否禁用

event-process-el:HTMLElement | Window 会根据传入元素的包围盒计算手指的有效区域

```vue
<script setup lang="ts">
import { HandleControl } from "@liaoqinwei/vue-handle-control"
import { Ref, ref } from "vue"

const box: Ref<HTMLDivElement | undefined> = ref()


function onChange(ev) {
  console.log(ev)

  /**
   * ev 
   * {
   *  radius: number,
   *  offsetByOriginX: number, 
   *  offsetByOriginY: number, 
   *  pageX: number,
   *  pageY: number,
   * }
   */
}

</script>

<template>
  <div class="box" ref="box">
    <HandleControl @change="onChange" :disable="false" :event-process-el="box"></HandleControl>
  </div>
</template>

<style scoped>
.box {
  width: 200px;
  height: 200px;
}
</style>

```

in your main.js
```javascript

// ... your code

import "@liaoqinwei/vue-handle-control/lib/style.css"

// ... your code
```