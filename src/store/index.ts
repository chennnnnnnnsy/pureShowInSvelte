import { readable, writable } from "svelte/store";
import { getScale} from "../utils";

/** 当前显示的页面下标 */
export const currentPageIndex = writable(-1, (set: (value: any) => void) => {
  console.log("订阅了这个store"); // 第一个订阅者会打印。
  return () => console.log("全部退订"); // 最后一个退订会打印
});

/** 内容的默认宽度 */
const cw = 880;
export const contentWidth = readable(cw);
/** 缩放样式和缩放值 */
export const scale = readable(getScale(cw));
