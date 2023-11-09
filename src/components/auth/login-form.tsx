import React, { FC, useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { PATH } from 'src/app/routes';
import { createLoginSchema } from 'src/common/schemas';
import { Button } from 'src/components/ui/button';
import { Card } from 'src/components/ui/card-temporary';
import { ControlledTextField } from 'src/components/ui/controlled';
import { Typography } from 'src/components/ui/typography';
import { LoginArgsType, setIsAuth, useAppDispatch, useAppSelector } from 'src/services';
import { useGetUsersQuery, useLoginUserMutation } from 'src/services/auth/auth-api';

import s from './login-form.module.scss';

type LoginType = {
  onSubmitHandler?: (data: LoginArgsType) => void;
  errorServer?: string;
};
export const LoginForm: FC<LoginType> = ({ onSubmitHandler, errorServer }) => {
  const [loginUser] = useLoginUserMutation();

  const { data } = useGetUsersQuery();
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginArgsType>({
    resolver: zodResolver(createLoginSchema()),
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const submitData = (data: LoginArgsType) => {
    loginUser(data);
  };

  console.log(data);

  if (isAuth) {
    return <Navigate to={PATH.MAIN} />;
  }

  return (
    <Card className={s.card}>
      <div className={s.content}>
        <Typography variant="h1" className={s.title}>
          Sing in
        </Typography>
        <form onSubmit={handleSubmit(submitData)} className={s.form}>
          <ControlledTextField
            control={control}
            name="email"
            label="Email"
            className={`${s.field} ${errors.email && s.fieldWithError}`}
            fullWidth
          />

          <ControlledTextField
            control={control}
            name="password"
            label="Password"
            type="password"
            className={`${s.passField} ${
              errors.password && s.fieldWithError && errorServer
            }`}
            fullWidth
          />
          <Button type="submit" variant="primary" fullWidth className={s.singIn}>
            <Typography variant="bold16">Sing in</Typography>
          </Button>
        </form>
      </div>
    </Card>
  );
};
