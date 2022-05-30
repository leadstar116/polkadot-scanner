export type FormPropType = {
  latestBlock: string;
  onSubmit: (values: IFormValues) => void;
};

export type TextInputPropType = {
  label: string;
  name: string;
  id?: string;
};

export interface IFormValues {
  startBlock: string;
  endBlock: string;
  endpoint: string;
}
