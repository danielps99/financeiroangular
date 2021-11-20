import ResponseData from './ResponseData';

export default interface ResponseQuery<T> {
  data: T[];
  elapsedTime?: number;
  page?: number;
  pages?: number;
  size?: number;
  total?: number;
}