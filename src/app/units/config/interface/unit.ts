export interface Units {
  id: number;
  icon: string;
  title: string;
  status: any;
  IMEI: string;
  tags: any;
  LTP: string;
  center?: number[];
}

export enum Tags {
  Test = 0,
  Prototype = 1,
  Service = 2,
}

export const TagsNameMap: {
  [key in Tags]: string;
} = {
  [Tags.Test]: 'test',
  [Tags.Prototype]: 'prototype',
  [Tags.Service]: 'service',
};
