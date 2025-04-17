//Ten plik odpowiada za responsywność. Dzięki niemu wiemy kiedy jest wersja desktopowa a kiedy mobilna. W tym przypadku zmienia się np navBar ze zwyklego na czarnego hamburgera.

import { ref, computed, onMounted, onUnmounted } from 'vue';

export default function () {
    const windowWidth = ref(window.innerWidth);

    const onWidthChange = () => windowWidth.value = window.innerWidth;

    onMounted(() => window.addEventListener('resize', onWidthChange));
    onUnmounted(() => window.removeEventListener('resize', onWidthChange));

    const isMobile = computed(() => windowWidth.value < 841);

    return {
        windowWidth: windowWidth,
        isMobile: isMobile
    }
}