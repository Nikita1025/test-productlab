import { CommentsType } from 'src/services/mocks/types-mock-data';

export type GetCommentsResponseType = {
  comments: CommentsType[];
};
export type CreateCommentResponseType = {
  message: string;
};
export type CreateCommentRequestType = {
  id?: number;
  imageId: number;
  name: string;
  newMessage: string;
  admin: boolean;
};
