import React, { useState } from 'react';

import { Card } from 'src/components/ui/card-temporary';
import { ViewImageModal } from 'src/components/view-image-modal';

import s from './image.module.scss';
type ImageType = {
  id: number;
  image: string;
};
export const Image = ({ id, image }: ImageType) => {
  const [openModal, setOpenModal] = useState(false);
  const onClickModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <Card className={s.card}>
        <img src={image} onClick={onClickModal} className={s.image} />
      </Card>
      {openModal && (
        <ViewImageModal
          image={image}
          id={id}
          onClickModal={onClickModal}
          openModal={openModal}
        />
      )}
    </div>
  );
};
