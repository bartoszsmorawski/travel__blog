import { ref, computed, onMounted, onUnmounted } from 'vue';

export default function () {
    const windowWidth = ref(window.innerWidth);

    const onWidthChange = () => windowWidth.value = window.innerWidth;

    onMounted(() => window.addEventListener('resize', onWidthChange));
    onUnmounted(() => window.removeEventListener('resize', onWidthChange));

    const isMobile = computed(() => windowWidth.value < 768);

    return {
        windowWidth: windowWidth,
        isMobile: isMobile
    }
}