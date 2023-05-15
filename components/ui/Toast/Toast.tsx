import React from 'react';
import style from './Toast.module.css';
import { useToast } from '@/utils/use-toast';
import { Toast } from '@/types';

const Toast = () => {
  const { isOpen, message, variant } = useToast();
  return (
    <div>
      {isOpen && <div
        className={`${style[`${variant}`]} ${style.toast}`}
      >
        <div className='text-white mr-3'>
          <ToastIcon variant={variant} />
        </div>
        <p className='text-white max-w-xs text-sm'>{message}</p>
      </div>}
    </div>
  );
};

const ToastIcon = ({ variant }: { variant: Toast['variant'] }): JSX.Element => {
  switch (variant) {
    case 'success':
    case 'info':
    case 'warning':
    default:
      return <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='currentColor'
        viewBox='0 0 256 256'
      >
        <path
          d='M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z'></path>
      </svg>;
  }
};

export default Toast;
