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
