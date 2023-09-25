import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

import AuthContext from '../../context/AuthContext';

const HeaderCartButton = (props) => {
  const ctx = useContext(AuthContext);

  const onClick=()=>{
    ctx.onModal()
  }

  return (
    <button onClick={onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
