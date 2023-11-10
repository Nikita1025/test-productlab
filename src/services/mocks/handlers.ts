import { rest } from 'msw';
import { v1 } from 'uuid';

import { Comments, Images } from './bd';

export const handlers = [
  rest.post('login', (req, res, context) => {
    return res(
      context.status(200),
      context.json({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInJvbGUiOiJhZG1pbiIsImRldmljZUlkIjoiNzI1MjQyNjQtMGE2My00NWYxLTlhMmMtZGRmMmQyMTcyYTY2IiwiaWF0IjoxNjk5NTQyOTU2LCJleHAiOjE2OTk1NDU1NDh9.lQx8l88uIu7tCQZmWzByOfG9o92r3s4qN8weGP\\n62O_I',
        userId: v1(),
      }),
    );
  }),
  rest.get('users', (req, res, context) => {
    return res(
      context.status(200),
      context.json({
        username: 'Nikita',
      }),
    );
  }),
  rest.get('images', (req, res, context) => {
    return res(
      context.status(200),
      context.json({
        img: Images,
      }),
    );
  }),
  rest.get('comments/:id', (req, res, context) => {
    const { id } = req.params;
    const newComments = Comments.filter(el => el.imageId === +id);

    return res(
      context.status(200),
      context.json({
        comments: newComments,
      }),
    );
  }),
  rest.post('comments/:id', (req, res, context) => {
    const s = req.body;
    const { id } = req.params;

    const newComments = Comments.filter(el => el.imageId === +id);
    const arr = [...newComments, s];

    console.log(arr);

    return res(
      context.status(200),
      context.json({
        body: arr,
      }),
    );
  }),
];
