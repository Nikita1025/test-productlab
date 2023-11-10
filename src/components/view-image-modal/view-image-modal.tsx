import React, { useState } from 'react';

import { BaseModal } from 'src/components/ui/base-modal';
import { Button } from 'src/components/ui/button';
import { TexField } from 'src/components/ui/text-field';
import { Typography } from 'src/components/ui/typography';

import {
  useCreateCommentMutation,
  useGetCommentsQuery,
} from '../../services/comments/comments-api';

import s from './view-image-modal.module.scss';

type ViewImageModalType = {
  onClickModal: () => void;
  openModal: boolean;
  image: string;
  id: number;
};

export const ViewImageModal = ({
  openModal,
  onClickModal,
  image,
  id,
}: ViewImageModalType) => {
  const [value, setValue] = useState('');
  const { data } = useGetCommentsQuery(id);
  const [createCommit] = useCreateCommentMutation();

  const onChangeValue = (newValue: string) => {
    setValue(newValue);
  };
  const onClick = () => {
    //submit data
    createCommit({ id: id, imageId: id, name: 'Nikita', newMessage: value, admin: true });
    setValue('');
  };

  return (
    <BaseModal onClose={onClickModal} title="View image" open={openModal}>
      <img src={image} className={s.image} />
      <div>
        <div className={s.comment_container}>
          {data?.comments?.map(el => (
            <div className={s.text_container} key={el.id}>
              <Typography variant="bold14">{el.name}</Typography>
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
