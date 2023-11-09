import { http, HttpResponse } from 'msw';
import { v1 } from 'uuid';

import { Images } from './bd';

export const handlers = [
  http.post('login', () => {
    return HttpResponse.json(
      {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInJvbGUiOiJhZG1pbiIsImRldmljZUlkIjoiNzI1MjQyNjQtMGE2My00NWYxLTlhMmMtZGRmMmQyMTcyYTY2IiwiaWF0IjoxNjk5NTQyOTU2LCJleHAiOjE2OTk1NDU1NDh9.lQx8l88uIu7tCQZmWzByOfG9o92r3s4qN8weGP\\n62O_I',
        userId: v1(),
      },
      { status: 201 },
    );
  }),
  http.get('users', () => {
    return HttpResponse.json(
      {
        username: 'Nikita',
      },
      { status: 200 },
    );
  }),
  http.get('images', () => {
    return HttpResponse.json(
      {
        img: Images,
      },
      { status: 200 },
    );
  }),
];
