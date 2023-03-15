// @ts-ignore
import { ref, Ref } from 'vue';
// @ts-ignore
import { useIntersectionObserver } from '@vueuse/core';

export function useScrollLoadMore(
  element: Element | Ref<HTMLElement>,
  options?: {
    lazyLoadPercent: number;
  },
): {
  shouldLoad: Ref<boolean>;
} {
  const shouldLoad = ref(false);
  const { lazyLoadPercent = 15 } = options || {};

  useIntersectionObserver(
    element,
    ([{ isIntersecting }]) => {
      shouldLoad.value = isIntersecting;
    },
    {
      rootMargin: `0px 0px ${lazyLoadPercent}% 0px`,
    },
  );

  return { shouldLoad };
}