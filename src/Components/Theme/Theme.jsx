import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Moon from "../../images/icon-moon.svg";
import Sun from "../../images/icon-sun.svg";
import { changeTheme } from "../../redux/reducers/theme";

const Theme = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector(state => state.theme);
  return (
    <div>
      {
        theme === 'dark' ? <img src={Moon}   alt="moon" onClick={()=>dispatch(changeTheme('light'))}/>
        : <img src={Sun} alt="sun"  onClick={()=>dispatch(changeTheme('dark'))}/>
      }
    
      
      
    </div>
  );
};

export default Theme;
