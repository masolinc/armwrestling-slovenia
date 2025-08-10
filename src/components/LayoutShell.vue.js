import Sidebar from './Sidebar.vue';
import HamburgerButton from './HamburgerButton.vue';
import ArmwrestlerDetail from './ArmwrestlerDetail.vue';
import { useArmwrestlers } from '@/composables/useArmwrestlers';
import { onMounted, ref } from 'vue';
const { armwrestlers, selected, selectedId, select, load } = useArmwrestlers();
const mobileOpen = ref(false);
onMounted(() => {
    load();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "h-screen flex flex-col bg-white" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex items-center gap-3 p-4 border-b border-neutral-200 md:hidden" },
});
/** @type {[typeof HamburgerButton, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(HamburgerButton, new HamburgerButton({
    ...{ 'onToggle': {} },
}));
const __VLS_1 = __VLS_0({
    ...{ 'onToggle': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onToggle: (...[$event]) => {
        __VLS_ctx.mobileOpen = !__VLS_ctx.mobileOpen;
    }
};
var __VLS_2;
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "/images/logo.jpg",
    alt: "Logo",
    ...{ class: "h-10 w-auto" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-xs font-medium leading-tight text-neutral-700" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "uppercase tracking-wide text-[10px] text-neutral-500" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-1 relative" },
});
if (__VLS_ctx.mobileOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.mobileOpen))
                    return;
                __VLS_ctx.mobileOpen = false;
            } },
        ...{ class: "fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-30" },
    });
}
/** @type {[typeof Sidebar, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(Sidebar, new Sidebar({
    ...{ 'onSelect': {} },
    ...{ 'onClose': {} },
    armwrestlers: (__VLS_ctx.armwrestlers),
    selectedId: (__VLS_ctx.selectedId),
    mobileOpen: (__VLS_ctx.mobileOpen),
}));
const __VLS_8 = __VLS_7({
    ...{ 'onSelect': {} },
    ...{ 'onClose': {} },
    armwrestlers: (__VLS_ctx.armwrestlers),
    selectedId: (__VLS_ctx.selectedId),
    mobileOpen: (__VLS_ctx.mobileOpen),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_10;
let __VLS_11;
let __VLS_12;
const __VLS_13 = {
    onSelect: (__VLS_ctx.select)
};
const __VLS_14 = {
    onClose: (...[$event]) => {
        __VLS_ctx.mobileOpen = false;
    }
};
var __VLS_9;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    ...{ class: "flex-1 ml-0 bg-white overflow-hidden relative" },
});
const __VLS_15 = {}.Transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    name: "detail-fade",
    mode: "out-in",
    appear: true,
}));
const __VLS_17 = __VLS_16({
    name: "detail-fade",
    mode: "out-in",
    appear: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
__VLS_18.slots.default;
if (__VLS_ctx.selected) {
    /** @type {[typeof ArmwrestlerDetail, ]} */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(ArmwrestlerDetail, new ArmwrestlerDetail({
        key: (__VLS_ctx.selectedId),
        person: (__VLS_ctx.selected),
    }));
    const __VLS_20 = __VLS_19({
        key: (__VLS_ctx.selectedId),
        person: (__VLS_ctx.selected),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: "placeholder",
        ...{ class: "p-10 text-neutral-500" },
    });
}
var __VLS_18;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-neutral-200']} */ ;
/** @type {__VLS_StyleScopedClasses['md:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['h-10']} */ ;
/** @type {__VLS_StyleScopedClasses['w-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-tight']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral-700']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-wide']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral-500']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black/30']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['md:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['z-30']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['p-10']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral-500']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Sidebar: Sidebar,
            HamburgerButton: HamburgerButton,
            ArmwrestlerDetail: ArmwrestlerDetail,
            armwrestlers: armwrestlers,
            selected: selected,
            selectedId: selectedId,
            select: select,
            mobileOpen: mobileOpen,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
