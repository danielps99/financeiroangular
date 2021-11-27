export default interface ResponseQuery<T> {
  data: T[];
  elapsedTime: number;
  page: number;
  pages: number;
  size: number;
  total: number;
}
export default class ResponseQuery<T> implements ResponseQuery<T>{
  constructor(){
    this.data = [];
    this.elapsedTime = 0;
    this.page = 0;
    this.size = 0;
    this.total = 0;
  }
}
