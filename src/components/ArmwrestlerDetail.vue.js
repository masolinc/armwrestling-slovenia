import ImageWithFade from './ImageWithFade.vue';
import { computed } from 'vue';
const props = defineProps();
const base = import.meta.env.BASE_URL;
const imageUrl = computed(() => props.person?.image ? `${base}images/${props.person.image}` : null);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.person) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "min-h-full flex" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-col justify-center w-full px-6 py-6" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-col lg:flex-row gap-12 items-center lg:items-start lg:justify-center max-w-7xl mx-auto" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "w-full lg:self-center lg:w-auto basis-[360px] md:basis-[400px] lg:basis-[420px] xl:basis-[480px] shrink-0" },
    });
    if (__VLS_ctx.imageUrl) {
        /** @type {[typeof ImageWithFade, ]} */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(ImageWithFade, new ImageWithFade({
            src: (__VLS_ctx.imageUrl),
            alt: (__VLS_ctx.person.fullName),
            variant: "halo-mid",
            fadeWidthPx: (50),
            edgeStrength: (0.95),
            hoverScale: (1.07),
        }));
        const __VLS_1 = __VLS_0({
            src: (__VLS_ctx.imageUrl),
            alt: (__VLS_ctx.person.fullName),
            variant: "halo-mid",
            fadeWidthPx: (50),
            edgeStrength: (0.95),
            hoverScale: (1.07),
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex-1 min-w-0 w-full lg:self-center" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
        ...{ class: "mb-8 text-center lg:text-left" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: "font-light tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 transition-colors" },
    });
    (__VLS_ctx.person.fullName);
    if (__VLS_ctx.person.club) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "mt-3 text-neutral-500 text-sm md:text-base" },
        });
        (__VLS_ctx.person.club);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: "space-y-3 text-base leading-relaxed text-neutral-800" },
    });
    if (__VLS_ctx.person.birthYear) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "font-semibold" },
        });
        (__VLS_ctx.person.birthYear);
    }
    if (__VLS_ctx.person.city) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "font-semibold" },
        });
        (__VLS_ctx.person.city);
    }
    if (__VLS_ctx.person.heightCm) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "font-semibold" },
        });
        (__VLS_ctx.person.heightCm);
    }
    if (__VLS_ctx.person.weightKg) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "font-semibold" },
        });
        (__VLS_ctx.person.weightKg);
    }
    else if (__VLS_ctx.person.weightKgRange) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "font-semibold" },
        });
        (__VLS_ctx.person.weightKgRange);
    }
    if (__VLS_ctx.person.weightClass) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "font-semibold" },
        });
        (__VLS_ctx.person.weightClass);
    }
    if (__VLS_ctx.person.contact?.phone) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "font-semibold" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            ...{ class: "underline hover:text-neutral-700" },
            href: (`tel:${__VLS_ctx.person.contact.phone}`),
        });
        (__VLS_ctx.person.contact.phone);
    }
    if (__VLS_ctx.person.contact?.instagram) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "font-semibold" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            ...{ class: "underline hover:text-neutral-700" },
            href: (`https://instagram.com/${__VLS_ctx.person.contact.instagram}`),
            target: "_blank",
            rel: "noopener",
        });
        (__VLS_ctx.person.contact.instagram);
    }
    if (__VLS_ctx.person.contact?.facebook) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "font-semibold" },
        });
        (__VLS_ctx.person.contact.facebook);
    }
    if (__VLS_ctx.person.contact?.email) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "font-semibold" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            ...{ class: "underline break-all hover:text-neutral-700" },
            href: (`mailto:${__VLS_ctx.person.contact.email}`),
        });
        (__VLS_ctx.person.contact.email);
    }
    if (__VLS_ctx.person.contact?.address) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "font-semibold" },
        });
        (__VLS_ctx.person.contact.address);
    }
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "p-10 text-neutral-500" },
    });
}
/** @type {__VLS_StyleScopedClasses['min-h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-12']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-7xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:self-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['basis-[360px]']} */ ;
/** @type {__VLS_StyleScopedClasses['md:basis-[400px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:basis-[420px]']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:basis-[480px]']} */ ;
/** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['min-w-0']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:self-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['font-light']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-tight']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-tight']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-5xl']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-6xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral-900']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-relaxed']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral-800']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['underline']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-neutral-700']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['underline']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-neutral-700']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['underline']} */ ;
/** @type {__VLS_StyleScopedClasses['break-all']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-neutral-700']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['p-10']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral-500']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ImageWithFade: ImageWithFade,
            imageUrl: imageUrl,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
