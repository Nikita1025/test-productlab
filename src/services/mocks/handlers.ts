import { rest } from 'msw';

import { Comments, Images } from './bd';

export const handlers = [
  rest.post('login', (req, res, context) => {
    return res(
      context.status(200),
      context.delay(800),
      context.json({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInJvbGUiOiJhZG1pbiIsImRldmljZUlkIjoiNzI1MjQyNjQtMGE2My00NWYxLTlhMmMtZGRmMmQyMTcyYTY2IiwiaWF0IjoxNjk5NTQyOTU2LCJleHAiOjE2OTk1NDU1NDh9.lQx8l88uIu7tCQZmWzByOfG9o92r3s4qN8weGP\\n62O_I',
        message: 'Successfully',
      }),
    );
  }),
  rest.get('images', (req, res, context) => {
    const headers = req.headers;

    const authToken = headers.get('Authorization');

    return authToken
      ? res(
          context.status(200),
          context.delay(800),
          context.json({
            img: Images,
            message: 'Successfully',
          }),
        )
      : res(
          context.status(401),
          context.json({
            message: 'Unauthorized',
          }),
        );
  }),
  rest.get('comments/:id', (req, res, context) => {
    const { id } = req.params;
    const newComments = Comments.filter(el => el.imageId === +id);
    const headers = req.headers;

    const authToken = headers.get('Authorization');

    return authToken
      ? res(
          context.status(200),
          context.delay(800),
          context.json({
            comments: newComments,
          }),
        )
      : res(
          context.status(401),
          context.json({
            message: 'Unauthorized',
          }),
        );
  }),
  rest.post('comments/:id', (req, res, context) => {
    const s = req.body;
    const { id } = req.params;

    const newComments = Comments.filter(el => el.imageId === +id);
    const arr = [...newComments, s];
    const headers = req.headers;

    const authToken = headers.get('Authorization');

    return authToken
      ? res(
          context.status(200),
          context.delay(200),
          context.json({
            body: arr,
            message: 'Successfully',
          }),
        )
      : res(
          context.status(401),
          context.json({
            message: 'Unauthorized',
          }),
        );
  }),
];
