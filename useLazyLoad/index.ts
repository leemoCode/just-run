// @ts-ignore
import { watch, ref, Directive, DirectiveBinding } from 'vue';
// @ts-ignore
import { useScrollLoadMore } from '../useScrollLoadMore';

interface LazyLoadUrlInterface {
  realUrl: string;
  defaultUrl: string;
  errUrl: string;
}

const initLazyLoad = (el: Element, binding: DirectiveBinding) => {
  const options: LazyLoadUrlInterface = binding.value;
  const { realUrl, defaultUrl, errUrl } = options;

  //判断目标是否在视窗内
  const { shouldLoad } = useScrollLoadMore(el);
  const reloadTimes = ref(0);
  const maxReloadTimes = 3;

  el.setAttribute('src', defaultUrl);

  const img = new Image();

  img.onload = () => {
    if (img.complete) {
      el.setAttribute('src', realUrl);
      stopHandle();
    }
  };

  img.onerror = () => {
    el.setAttribute('src', errUrl || defaultUrl);
  };

  const stopHandle = watch(shouldLoad, (value: boolean) => {
    if (reloadTimes.value > maxReloadTimes) {
      stopHandle();

      return;
    }

    if (value) {
      img.src = realUrl;
      reloadTimes.value++;
    }
  });
};

export const useLazyLoad: Directive = {
  mounted: initLazyLoad,
};