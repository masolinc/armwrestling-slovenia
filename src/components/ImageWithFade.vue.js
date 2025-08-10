import { computed } from 'vue';
const props = withDefaults(defineProps(), {
    variant: 'halo-mid',
    fadeWidthPx: 60,
    edgeStrength: 0.95,
    falloffFactor: 0.55,
    hoverScale: 1.06
});
const styleVars = computed(() => ({
    '--fade-width': props.fadeWidthPx + 'px',
    '--edge-alpha': String(props.edgeStrength),
    '--falloff': String(props.falloffFactor),
    '--hover-scale': String(props.hoverScale)
}));
const variantClass = computed(() => {
    switch (props.variant) {
        case 'halo-soft': return 'variant-soft';
        case 'halo-strong': return 'variant-strong';
        default: return 'variant-mid';
    }
});
const zoomClass = computed(() => `group-hover:scale-[var(--hover-scale)] group-focus-visible:scale-[var(--hover-scale)]`);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    variant: 'halo-mid',
    fadeWidthPx: 60,
    edgeStrength: 0.95,
    falloffFactor: 0.55,
    hoverScale: 1.06
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['fade-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['fade-overlay']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.figure, __VLS_intrinsicElements.figure)({
    ...{ class: "relative overflow-hidden select-none bg-white group" },
    ...{ class: (__VLS_ctx.variantClass) },
    ...{ style: (__VLS_ctx.styleVars) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.src),
    alt: (__VLS_ctx.alt),
    loading: "lazy",
    draggable: "false",
    ...{ class: "block w-full h-auto object-cover transition-transform duration-700 ease-out will-change-transform" },
    ...{ class: (__VLS_ctx.zoomClass) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fade-overlay pointer-events-none absolute inset-0" },
});
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['select-none']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-700']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-out']} */ ;
/** @type {__VLS_StyleScopedClasses['will-change-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['fade-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['pointer-events-none']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            styleVars: styleVars,
            variantClass: variantClass,
            zoomClass: zoomClass,
        };
    },
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
