export type ImagesType = {
  id: number;
  img: string;
};
export type CommentsType = {
  id: number;
  imageId: number;
  name: string;
  body: string;
  admin?: boolean;
};
