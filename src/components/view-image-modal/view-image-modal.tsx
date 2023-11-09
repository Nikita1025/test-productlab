import React, { useState } from 'react';

import { BaseModal } from 'src/components/ui/base-modal';
import { Button } from 'src/components/ui/button';
import { TexField } from 'src/components/ui/text-field';
import { Typography } from 'src/components/ui/typography';

import s from './view-image-modal.module.scss';

type ViewImageModalType = {
  onClickModal: () => void;
  openModal: boolean;
  image: string;
};

export const ViewImageModal = ({
  openModal,
  onClickModal,
  image,
}: ViewImageModalType) => {
  const [value, setValue] = useState('');
  const comments = [
    {
      id: 1,
      username: 'Alex',
      comment: 'dasdadasdas dasdasdasdasd dasdadasdas asdasdasdasd',
    },
    { id: 2, username: 'dima', comment: '1aasda' },
    { id: 3, username: 'Nik', comment: 'jhkky ukyk k uy kuy kuy ' },
    { id: 4, username: 'Alexandr', comment: ' bv nvbn  xcv xvcx ' },
    { id: 5, username: 'Pavel', comment: 'ssa dw ea s ' },
    { id: 6, username: 'Pavel', comment: 'ssa dw ea s ' },
    { id: 7, username: 'Pavel', comment: 'ssa dw ea s ' },
  ];
  const onChangeValue = (newValue: string) => {
    setValue(newValue);
  };
  const onClick = () => {
    //submit data
    console.log(value);
    setValue('');
  };

  return (
    <BaseModal onClose={onClickModal} title="View image" open={openModal}>
      <img src={image} className={s.image} />
      <div>
        <div className={s.comment_container}>
          {comments.map(el => (
            <div className={s.text_container} key={el.id}>
              <Typography variant="bold14">{el.username}</Typography>
              <Typography variant="regular14">{el.comment}</Typography>
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
