type TPosition = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

interface IStep {
  id: string;
  forward: TPosition;
  back: TPosition;
}

interface IOption {
  label: string;
  value: string;
  [s:string]: any;
}
