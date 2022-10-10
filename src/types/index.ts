export interface IIcon {
  size?: number;
  className?: string;
  color?: string;
  [x: string]: any;
}

export type TFormComponent = {
  type: 'input';
  id: string;
  name?: string;
  value: string;
  placeHolder?: string;
  label?: string;
  errorMessage?: string;
  required?: boolean;
  withLabel?: boolean;
};
