// 根据屏幕宽度和参数 w 进行比例缩放
export const getScale = (w: number, padding = 150) => {
  const ww = document.body.clientWidth;
  const radio: any = ((ww - padding * 2) / w).toFixed(2);
  const style = `transform: scale(${radio});`;
  return { style, radio };
};

// 根据缩放后，计算出top 的值
export const getTop = (id: string, radio:string) => {
  const el = document.querySelector(id);
  console.dir(el)
  const top = (el.clientHeight / 20.55) * (+radio - 1) * 10;
  const style = `top: ${top}px`;
  return { top, style };
};
