import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['Aproved', 'Rejected']),
  role: sample([
    '2000$',
    '2000$',
    '2000$',
    '2000$',
    '2000$',
    '2000$',
    '2000$',
    '2000$',
    '2000$',
    '2000$',
  ]),
}));

export default users;
