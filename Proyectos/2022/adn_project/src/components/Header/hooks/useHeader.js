import { useResize } from "hooks/useResize";
import { createRef, useRef, useState } from "react";
import { useSelector } from "react-redux";

export const useHeader = () => {
  const { user, userToken } = useSelector((store) => store.user);

  const clickToggleBtn = useRef();
  const clickNavAdminFullSizeBtn = createRef();

  const { isPhone } = useResize();

  const [showPrivateOptionsNav, setShowPrivateOptionsNav] = useState(false);

  const handleCloseToggle = () => {
    if (isPhone) clickToggleBtn.current.click();
  };

  const handleNavAdminFullSize = () => {
    setShowPrivateOptionsNav((prevValue) => !prevValue);
  };

  return {
    user,
    userToken,
    showPrivateOptionsNav,
    clickToggleBtn,
    clickNavAdminFullSizeBtn,
    isPhone,
    handleCloseToggle,
    handleNavAdminFullSize,
  };
};
