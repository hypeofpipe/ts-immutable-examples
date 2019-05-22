import { produce } from 'immer';
import { info } from 'signale';
import { User } from './types/User';
import { Document } from './types/Document';

const makeCitizen = (nonCitizen: User) => {
  nonCitizen.documents = [];
  nonCitizen.documents.push({
    id: 1,
    content: 'Happy worker at City 17',
    additionalInformation: 'New one',
  });
  return nonCitizen;
};

let documents: Document[] = [
  { id: 1, content: 'Working at Black Messa.' },
  { id: 2, content: 'Was spotted in Xen.' },
];
let scientist: User = {
  name: 'Gordon',
  surname: 'Freeman',
  age: 47,
  documents,
};

let citizen: User = produce(scientist, draftCitizen => makeCitizen(scientist));

info(scientist, '✨');
info(citizen, '📝');
//let's show how we can change document value
