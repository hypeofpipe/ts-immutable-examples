import { Document } from './Document';

export type User = {
  name: string;
  surname: string;
  age: number;
  documents: Array<Document>;
};
