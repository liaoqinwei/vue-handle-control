import { Ref } from "vue-demi";
export interface HandleControlProps {
    eventProcessEl: HTMLElement | Window;
    disable: boolean;
}
export interface HandleControlEmits {
    (e: 'change', eventObj: EventObject): void;
}
type EventObject = {
    radius: number;
    offsetByOriginX: number;
    offsetByOriginY: number;
    pageX: number;
    pageY: number;
};
export default function (props: HandleControlProps, emits: HandleControlEmits): {
    btnElPosition: {
        x: number;
        y: number;
    };
    controlBtnEl: Ref<HTMLDivElement | undefined>;
    isDraging: Ref<boolean>;
};
export {};
