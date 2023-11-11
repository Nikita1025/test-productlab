import React, { forwardRef } from 'react';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import {
  appResponseMessageSelector,
  setResponseMessageAC,
  setErrorMessageAC,
  appErrorMessageSelector,
  useAppDispatch,
  useAppSelector,
} from 'src/services';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarInfo = () => {
  const dispatch = useAppDispatch();
  const message = useAppSelector(appResponseMessageSelector);
  const errorMessage = useAppSelector(appErrorMessageSelector);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setResponseMessageAC(null));
    dispatch(setErrorMessageAC(null));
  };

  return (
    <Snackbar
      open={!!message || !!errorMessage}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={errorMessage ? 'error' : 'success'}
        sx={{ width: '100%' }}
      >
        {errorMessage ? errorMessage : message}
      </Alert>
    </Snackbar>
  );
};
