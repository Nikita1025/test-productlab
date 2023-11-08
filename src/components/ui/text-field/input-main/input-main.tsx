import React, { ChangeEvent, ComponentProps, useState } from 'react';

import EyeIcon from 'src/assets/icon/eye-icon';
import EyeOffIcon from 'src/assets/icon/eye-off-icon';
import { Typography } from 'src/components/ui/typography';

import s from './input-main.module.scss';

type UIInputPropsType = {
  value?: string;
  label?: string;
  errorMessage?: string;
  onChangeText?: (value: string) => void;
  isRequired?: boolean;
} & ComponentProps<'input'>;

export const InputMain: React.FC<UIInputPropsType> = props => {
  const {
    type = 'text',
    disabled,
    onChangeText,
    errorMessage,
    label,
    placeholder,
    value,
    isRequired,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onClickShowValue = () => {
    if (!disabled) {
      setShowPassword(!showPassword);
    }
  };

  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeText && onChangeText(e.currentTarget.value);
  };

  const showErrorMess = errorMessage && errorMessage.length > 0;

  return (
    <div className={s.textFieldWrap}>
      <label className={`${s.label} ${disabled && s.disabledLabel}`}>
        {label}
        {isRequired && <span className={s.star}>*</span>}
      </label>
      <input
        type={showPassword ? 'text' : type}
        value={value}
        onChange={onchangeHandler}
        placeholder={placeholder && placeholder}
        disabled={disabled}
        {...rest}
        className={`${s.textField} ${errorMessage && s.errorInput} ${
          disabled && s.disabledInput
        }`}
      />

      {type === 'password' && !showPassword && (
        <EyeIcon
          className={`${s.iconEye} ${disabled && s.disabledIconEye}`}
          onClick={onClickShowValue}
        />
      )}
      {type === 'password' && showPassword && (
        <EyeOffIcon
          className={`${s.iconEye} ${disabled && s.disabledIconEye}`}
          onClick={onClickShowValue}
        />
      )}

      {showErrorMess && (
        <Typography variant={'regular14'} className={s.errorWrap}>
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};
