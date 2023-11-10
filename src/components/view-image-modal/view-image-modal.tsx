import React, { useEffect, useState } from 'react';

import { DeleteIcon } from 'src/assets/icon/delete-icon';
import { BaseModal } from 'src/components/ui/base-modal';
import { Button } from 'src/components/ui/button';
import { SkeletonComments } from 'src/components/ui/skeletons/skeleton-comments';
import { TexField } from 'src/components/ui/text-field';
import { Typography } from 'src/components/ui/typography';
import {
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useGetCommentsQuery,
} from 'src/services/comments';
import { CommentsType } from 'src/services/mocks';

import s from './view-image-modal.module.scss';

type ViewImageModalType = {
  onClickModal: () => void;
  openModal: boolean;
  image: string;
  imageId: number;
};

export const ViewImageModal = ({
  openModal,
  onClickModal,
  image,
  imageId,
}: ViewImageModalType) => {
  const [value, setValue] = useState('');
  const [comments, setComments] = useState<CommentsType[]>([]);
  const { data, isLoading } = useGetCommentsQuery(imageId);
  const [deleteComment, { isSuccess: isSuccessDelete, data: deleteData }] =
    useDeleteCommentMutation();
  const [createComment, { isSuccess: isSuccessCreate, data: newData }] =
    useCreateCommentMutation();

  const onChangeValue = (newValue: string) => {
    setValue(newValue);
  };
  const onClick = () => {
    createComment({ imageId: imageId, name: 'Nikita', body: value, admin: true });
    setValue('');
  };

  useEffect(() => {
    if (isSuccessCreate) {
      setComments(newData?.body!);
    } else if (isSuccessDelete) {
      setComments(deleteData?.body!);
    } else {
      setComments(data?.comments!);
    }
  }, [newData, data, deleteData]);
  const onDeleteComment = (id: number) => {
    deleteComment({ id, imageId: imageId });
  };

  return (
    <BaseModal onClose={onClickModal} title="View image" open={openModal}>
      <img src={image} className={s.image} />
      <div>
        <div className={s.comment_container}>
          {isLoading && <SkeletonComments />}
          {comments?.map(el => (
            <div className={s.text_container} key={el.id}>
              <div className={s.header_block}>
                <Typography variant="bold14">{el.name}</Typography>
                {el.admin && (
                  <DeleteIcon onClick={() => onDeleteComment(el.id)} className={s.icon} />
                )}
              </div>
              <Typography variant="regular14">{el.body}</Typography>
            </div>
          ))}
        </div>
        <div className={s.add_comment}>
          <TexField
            value={value}
            onChangeText={onChangeValue}
            placeholder="Add a comment..."
          />
          <Button onClick={onClick} variant="link">
            Publish
          </Button>
        </div>
      </div>
    </BaseModal>
  );
};
