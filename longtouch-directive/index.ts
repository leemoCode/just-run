// @ts-ignore
import { ref, Directive, DirectiveBinding } from 'vue';
// @ts-ignore
import { useThrottleFn } from '@vueuse/core';

interface EventInterface {
  changeStyle?: (state: boolean) => void;
  longTouchEvent?: () => void;
  clickEvent?: () => void;
  isScrolling?: () => boolean;

  // 业务参数 可以由此传入
  // msgItem: MsgItemInterface;
}

const longLock = ref(false);
const timeoutId = ref(0);
const styleTimeout = ref(0);
const touchTime = 500;
const antiTouchDistanse = 30;

const touchStartclientY = ref(0);
const touchEndclientY = ref(0);

const useTouchEvent = (el: Element, event: EventInterface) => {
  const longTouchEvent = () => {
    // 长按事件在此注册
    // do something
  };

  // 做节流
  const clickEventThrottle = useThrottleFn(() => {
    event.clickEvent && event.clickEvent();
  }, 1500);

  const checkIsScrolling = () => {
    // 滑动判断 返回结果 可以H5自己判断 脱离webview由客户端判断
    // return check result
  };

  const changeStyle = (isShow: boolean) => {
    if (isShow) {
    // 改变样式 一般依赖动态添加或者删除对应样式的class实现
    //   utils?.$('#msg_' + event.msgItem.id)?.classList.add('touch-feed-back');
    } else {
    //   utils?.$('#msg_' + event.msgItem.id)?.classList.remove('touch-feed-back');
    }
  };

  const onTouchStart = () => {
    const isScrolling = ref(false);

    clearTimeout(styleTimeout.value);
    styleTimeout.value = window.setTimeout(() => {
      changeStyle(true);
    }, touchTime * 0.3);

    touchStartclientY.value = el.getBoundingClientRect().y;

    clearTimeout(timeoutId.value);
    timeoutId.value = window.setTimeout(async () => {
      isScrolling.value = checkIsScrolling();
      touchEndclientY.value = el.getBoundingClientRect().y;

      if (
        Math.abs(touchStartclientY.value - touchEndclientY.value) <= antiTouchDistanse &&
        !isScrolling.value
      ) {
        longLock.value = true;
        longTouchEvent();
      }

      longLock.value = false;

      changeStyle(false);
    }, touchTime);
  };

  const onTouchMove = () => {
    changeStyle(false);

    if (!longLock.value) {
      clearTimeout(timeoutId.value);
      clearTimeout(styleTimeout.value);
      timeoutId.value = 0;
    }
  };

  const onTouchEnd = () => {
    changeStyle(false);

    touchEndclientY.value = el.getBoundingClientRect().y;

    if (
      timeoutId.value != 0 &&
      !longLock.value &&
      Math.abs(touchStartclientY.value - touchEndclientY.value) <= antiTouchDistanse
    ) {
      clickEventThrottle();
    }

    clearTimeout(timeoutId.value);
    clearTimeout(styleTimeout.value);

    longLock.value = false;
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};

const initLongTouch = function (el: Element, binding: DirectiveBinding): void {
  const { onTouchStart, onTouchMove, onTouchEnd } = useTouchEvent(
    el,
    binding.instance as unknown as EventInterface,
  );

  el.addEventListener('touchstart', onTouchStart);
  el.addEventListener('touchmove', onTouchMove);
  el.addEventListener('touchend', onTouchEnd);
};

const uninstallLongTouch = function (el: Element, binding: DirectiveBinding): void {
  const { onTouchStart, onTouchMove, onTouchEnd } = useTouchEvent(
    el,
    binding.instance as unknown as EventInterface,
  );

  el.removeEventListener('touchstart', onTouchStart);
  el.removeEventListener('touchmove', onTouchMove);
  el.removeEventListener('touchend', onTouchEnd);
};

export const useLongTouch: Directive = {
    // 映射到mounted unmounted上
  mounted: initLongTouch,
  unmounted: uninstallLongTouch,
};
