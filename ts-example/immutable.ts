import { fromJS } from 'immutable';
import { info } from 'signale';
import { User } from './types/User';
import { Document } from './types/Document';

const makeCitizen = nonCitizen => {
  const newCitizen = nonCitizen.set(
    'documents',
    fromJS([
      {
        id: 1,
        content: 'Happy worker at City 17',
        additionalInformation: 'New one',
      },
    ]),
  );
  return newCitizen;
};

let documents: Document[] = [
  { id: 1, content: 'Working at Black Messa.' },
  { id: 2, content: 'Was spotted in Xen.' },
];
let scientist: User = fromJS({
  name: 'Gordon',
  surname: 'Freeman',
  age: 47,
  documents,
});

let citizen: User = makeCitizen(scientist);

info(scientist, '✨');
info(citizen, '📝');
//let's show how we can change document value
