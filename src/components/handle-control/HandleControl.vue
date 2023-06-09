<script setup lang="ts">
import { HandleControlProps, HandleControlEmits, default as useHandleControl } from "./useHandleControl"

const props = withDefaults(defineProps<HandleControlProps>(), {
  eventProcessEl: () => window,
  disable: false
})

const emits = defineEmits<HandleControlEmits>()


const {
  btnElPosition,
  controlBtnEl,
  isDraging } = useHandleControl(props, emits)

</script>


<template>
  <div class="handle-control-wrap" :class="{ 'handle-disable': disable }">
    <div class="h-c-btn" ref="controlBtnEl" :class="{'h-c-btn-wc':isDraging}" :style="{ left: btnElPosition.x + 'px', top: btnElPosition.y + 'px' }">
    </div>
  </div>
</template>


<style scoped>
.handle-control-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: radial-gradient(transparent 0%, rgba(255, 255, 255, .8) 100%);
  border-radius: 100%;
}

.h-c-btn {
  position: relative;
  width: 30%;
  aspect-ratio: 1 / 1;
  background: #FFF;
  border-radius: 100%;
  box-shadow: 0px 0px 5px rgba(55, 55, 55, .2);
}

.handle-disable {
  opacity: .5;
}
.h-c-btn-wc{
  will-change: left,top;
}
</style>