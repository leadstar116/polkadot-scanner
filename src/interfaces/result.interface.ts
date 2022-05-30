export interface IResultData {
  blockNumber: number;
  blockHash: string;
  events: IEventData[];
}

export interface IEventData {
  method: string;
  index: string;
  section: string;
  data: Array<any>;
}

export type ResultTablePropType = {
  result: IResultData[];
};

export interface IResultRowData {
  id: number;
  blockNumber: number;
  eventName: string;
  eventIndex: string;
  eventSection: string;
  eventParams: string;
}
