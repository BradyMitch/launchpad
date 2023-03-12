import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';
import React, { SyntheticEvent } from 'react';

type TransitionProps = Omit<SlideProps, 'direction'>;

const TransitionRight = (props: TransitionProps) => {
  return <Slide {...props} direction="right" />;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface INotifyProps {
  type?: 'success' | 'info' | 'warning' | 'error';
  message: string;
  open: boolean;
  onClose: (event?: SyntheticEvent | Event, reason?: string) => void;
}

/**
 * A reusable notification component using MUI's Snackbar.
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca | braden.jr.mitch@gmail.com>
 * @param {('success'|'info'|'warning'|'error')} type - (optional, default = 'info') Defines the color.
 * @param {string} message - The message to display.
 * @param {boolean} open - If the notification is open.
 * @param {(event?: SyntheticEvent | Event, reason?: string) => void} onClose - Function to close notication.
 *
 * @example
 * const ParentComponent = () => {
 *  const [openNotify, setOpenNotify] = useState(false);
 *  const handleClick = () => setOpenNotify(true);
 *  const handleNotifyClose = () => setOpenNotify(false);
 *
 *  return (
 *    <>
 *      <Button onClick={handleClick}>Show Notification</Button>
 *      <Notify
 *        open={openNotify}
 *        onClose={handleNotifyClose}
 *        message="This is a message"
 *       />
 *    </>
 *  );
 * };
 */
const Notify = (props: INotifyProps) => {
  const { type = 'info', message, open, onClose } = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={9000}
      TransitionComponent={TransitionRight}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={type}
        sx={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          width: '100%',
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notify;
