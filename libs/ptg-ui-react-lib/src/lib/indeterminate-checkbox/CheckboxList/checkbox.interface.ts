export interface Item  {
  id: number;
  name: string;
  parentId: number;
};


export enum CheckboxState {
  UNCHECKED,
  CHECKED,
  INDETERMINATE,
}

export type ItemState = {
  id?: number;
  state?: CheckboxState;
};