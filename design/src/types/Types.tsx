export interface axiosResponseTypes {
  data: {};
  status: 200;
  statusText: "OK";
  headers: {};
  config: {};
  request: {};
}

export default interface sensorTypes {
  device_id: string;
  last_online: string;
  last_temp?: number;
  customer: string;
  location?: string;
}

export default interface sensorsTypes4API {
  currentPage: number;
  itemsPerPage: number;
  onSuccess?: {} | any;
  onError?: {} | any;
}

export interface logTypes {
  time: string;
  description: string;
}

export interface logTypes {
  time: string;
  description: string;
}
export type ActivityType = {
  time: string;
  description: string;
  event_name: string;
};

