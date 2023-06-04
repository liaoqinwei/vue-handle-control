import { HandleControlProps } from "./useHandleControl";
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<HandleControlProps>, {
    eventProcessEl: () => Window & typeof globalThis;
    disable: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (eventObj: {
        radius: number;
        offsetByOriginX: number;
        offsetByOriginY: number;
        pageX: number;
        pageY: number;
    }) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<HandleControlProps>, {
    eventProcessEl: () => Window & typeof globalThis;
    disable: boolean;
}>>> & {
    onChange?: ((eventObj: {
        radius: number;
        offsetByOriginX: number;
        offsetByOriginY: number;
        pageX: number;
        pageY: number;
    }) => any) | undefined;
}, {
    eventProcessEl: HTMLElement | Window;
    disable: boolean;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
