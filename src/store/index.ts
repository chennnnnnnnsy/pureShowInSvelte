import { readable, writable, derived, get } from "svelte/store";
import { getScale } from "../utils";
import { cw, viewMap, stepList } from "../config";

/** 内容宽度，只可读 */
export const contentWidth = readable(cw);
/** 缩放样式和缩放值 */
export const scale = readable(getScale(cw));

/** 当前显示的页面下标 */
export const currentPageIndex = writable(3, () => {
  console.log("订阅了这个store"); // 第一个订阅者会打印。
  return () => console.log("全部退订"); // 最后一个退订会打印
});

/** 当前页面的坐标位置 */
export const globalPosition = derived(currentPageIndex, ($currentPageIndex) => {
  let position: string = "";
  let nextPage: string = stepList[$currentPageIndex];

  // 这个是标签语法，https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/label
  loop: for (let i = 0, len = viewMap.length; i < len; i++) {
    const vo = viewMap[i];

    for (let j = 0, length = vo.length; j < length; j++) {
      const one = vo[j];

      if (one === nextPage) {
        position = `translate:-${j * 100}vw -${i * 100}vh`;
        break loop;
      }
    }
  }

  return position;
});

/** 前进或后退页面 */
export const toStep = readable((type?: "forward" | "back") => {
  type = type || "forward";
  let index = get(currentPageIndex);

  if (type === "forward") {
    index += 1;
    if (index > stepList.length) return;
  } else {
    index -= 1;
    if (index < 0) return;
  }
  currentPageIndex.set(index);
});
