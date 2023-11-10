import { CommentsType } from 'src/services/mocks';

export type GetCommentsResponseType = {
  comments: CommentsType[];
};
export type CommentResponseType = {
  message: string;
  body: CommentsType[];
};
export type CreateCommentRequestType = {
  id?: number;
  imageId: number;
  name: string;
  body: string;
  admin: boolean;
};
export type DeleteCommentRequestType = {
  imageId: number;
  id: number;
};
