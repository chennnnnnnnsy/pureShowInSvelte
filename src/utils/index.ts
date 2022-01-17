// 根据屏幕宽度和参数 w 进行比例缩放
export const getScaleStyle = (w: number, offset:number) => {
  const ww = document.body.clientWidth;
  const radio: any = ((ww - 300) / w).toFixed(2);
  const top = (w - offset) * (radio - 1);
  const style = `transform: scale(${radio});top: ${top}px`;
  return style;
};
