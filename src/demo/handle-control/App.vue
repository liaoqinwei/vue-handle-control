<script setup lang="ts">
import HandleControl from "../../components/handle-control/HandleControl.vue"
import { Ref, ref } from "vue"

const box: Ref<HTMLDivElement | undefined> = ref()
function onChange(ev: any) {
}
</script>

<template>
  <div id="app">
    <div class="box">
      <p class="text">eventProcessEl is default(window)</p>
      <HandleControl @change="onChange" :disable="false"></HandleControl>
    </div>
    <div class="box" ref="box">
      <p class="text">eventProcessEl is Box</p>
      <HandleControl @change="onChange" :disable="false" :event-process-el="box"></HandleControl>
    </div>
  </div>
</template>

<style scoped>
#app {
  display: grid;
  gap: 40px;
  place-content: center;
}

.box {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: red;
}

.text {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
