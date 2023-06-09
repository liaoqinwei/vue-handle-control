import { Ref, nextTick, onMounted, onUnmounted, reactive, ref, watch } from "vue-demi"
import gsap from "gsap"
export interface HandleControlProps { eventProcessEl?: HTMLElement | Window, disable: boolean }


export interface HandleControlEmits {
  (e: 'change', eventObj: EventObject): void
}

type EventObject = {
  radius: number,
  offsetByOriginX: number,
  offsetByOriginY: number,
  pageX: number,
  pageY: number,
}

export default function (props: HandleControlProps, emits: HandleControlEmits) {

  const controlBtnEl: Ref<HTMLDivElement | undefined> = ref()

  let radius = 0
  let isDraging = ref(false)
  const btnElPosition = reactive({ x: 0, y: 0 })
  const initPoint = { x: 0, y: 0 }
  const controlArea = { left: 0, right: 0, top: 0, bottom: 0 }

  const getEvent = (ev: Event): Touch | MouseEvent => {

    if (ev.type.includes("touch")) {
      return (ev as TouchEvent).changedTouches[0]
    } else {
      return ev as MouseEvent
    }
  }

  const onTouchStart = (ev: Event) => {
    if (props.disable) return
    const innerEvent = getEvent(ev)

    if (ev.target === controlBtnEl.value || ev.target === controlBtnEl.value?.parentElement || ev.target === props.eventProcessEl) {
      btnElPosition.x = innerEvent.pageX - initPoint.x
      btnElPosition.y = innerEvent.pageY - initPoint.y
      isDraging.value = true
      emits("change", getChangeEmitEventObj(innerEvent))
    }
  }

  const onTouchMove = (ev: Event) => {
    if (!isDraging.value) return
    const innerEvent = getEvent(ev)
    if (innerEvent.pageX < controlArea.left || innerEvent.pageX > controlArea.right ||
      innerEvent.pageY < controlArea.top || innerEvent.pageY > controlArea.bottom) {
      stopControl(innerEvent)
      return
    }
    const left = innerEvent.pageX - initPoint.x
    const top = innerEvent.pageY - initPoint.y

    const controlPointRadius = Math.sqrt(Math.pow(left, 2) + Math.pow(top, 2))

    if (controlPointRadius > radius) {
      // 超出区域
      btnElPosition.x = left / (controlPointRadius / radius)
      btnElPosition.y = top / (controlPointRadius / radius)

    } else {
      btnElPosition.x = left
      btnElPosition.y = top
    }
    emits("change", getChangeEmitEventObj(innerEvent))
    ev.preventDefault()
  }

  const getChangeEmitEventObj = (ev: Touch | MouseEvent): EventObject => {
    return { radius, offsetByOriginX: btnElPosition.x, offsetByOriginY: btnElPosition.y, pageX: ev.pageX, pageY: ev.pageY }
  }

  const onTouchEnd = (ev: Event) => {
    if (!isDraging.value) return
    const innerEvent = getEvent(ev)
    stopControl(innerEvent)
  }

  const stopControl = (innerEvent: Touch | MouseEvent) => {
    isDraging.value = false
    gsap.to(btnElPosition, {
      x: 0, y: 0, duration: .2, onUpdate() {
        emits("change", getChangeEmitEventObj(innerEvent))
      }, onComplete() {
        emits("change", getChangeEmitEventObj(innerEvent))
      }
    })
  }

  const calcInitPoint = () => {
    const rect = controlBtnEl.value!.getBoundingClientRect()
    initPoint.x = rect.x + rect.width / 2
    initPoint.y = rect.y + rect.height / 2
    if (props.eventProcessEl === window) {
      controlArea.left = 0
      controlArea.top = 0
      controlArea.right = window.innerWidth
      controlArea.bottom = window.innerHeight
    } else {
      const el = props.eventProcessEl as HTMLElement
      const rect = el.getBoundingClientRect()
      controlArea.left = rect.left
      controlArea.top = rect.top
      controlArea.bottom = rect.bottom
      controlArea.right = rect.right
    }

    const parentRect = controlBtnEl.value!.parentElement!.getBoundingClientRect()
    radius = Math.min(parentRect.width, parentRect.height) / 2
  }

  onMounted(() => {
    nextTick(() => {
      calcInitPoint()
    })
  })


  function toggleEvent(el: HTMLElement | Window, flag: boolean) {
    if (!(el instanceof HTMLElement)) el = window
    let fnKey: "addEventListener" | "removeEventListener" = flag ? "addEventListener" : "removeEventListener"
    let option: any = {}
    if (flag) option.passive = false
    el.addEventListener
    el[fnKey]("touchstart", onTouchStart, option)
    el[fnKey]("mousedown", onTouchStart, option)
    el[fnKey]("touchmove", onTouchMove, option)
    el[fnKey]("mousemove", onTouchMove, option)
    el[fnKey]("touchend", onTouchEnd, option)
    el[fnKey]("mouseup", onTouchEnd, option)
  }

  watch<any>(() => props.eventProcessEl, (el: HTMLElement, preEl: HTMLElement) => {
    calcInitPoint()
  })
  toggleEvent(window, true)
  onUnmounted(() => {
    toggleEvent(window, false)
  })

  window.addEventListener("resize", () => {
    calcInitPoint()
  })
  window.addEventListener("load", () => {
    calcInitPoint()
  })

  return {
    btnElPosition,
    controlBtnEl,
    isDraging
  }
}