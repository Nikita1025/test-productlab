import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@radix-ui/react-dialog';
import { Separator } from '@radix-ui/react-separator';
import { clsx } from 'clsx';
import { CloseIcon } from 'src/assets/icon/close-icon';
import { Typography } from 'src/components/ui/typography';

import s from './base-modal.module.scss';

export type ModalProps = {
  open: boolean;
  onClose?: () => void;
  showSeparator?: boolean;
  title?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<'div'>;

export const BaseModal = ({
  showSeparator = true,
  onClose,
  open,
  title,
  className,
  children,
  ...rest
}: ModalProps) => {
  const classNames = {
    separator: clsx(s.separator, !showSeparator && s.separatorHide),
  };
  const onCloseHandler = () => {
    onClose?.();
  };

  return (
    <Dialog open={open}>
      <DialogPortal>
        <DialogOverlay className={s.dialog_overlay} />
        <DialogContent className={s.content} {...rest}>
          <div className={s.titleWrapper}>
            <button className={s.icon_button} onClick={onCloseHandler}>
              <CloseIcon />
            </button>
            <DialogTitle>
              <Typography variant={'h1'}>{title}</Typography>
              <Separator className={classNames.separator} />
            </DialogTitle>
          </div>
          <div className={s.content_box}>{children}</div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
