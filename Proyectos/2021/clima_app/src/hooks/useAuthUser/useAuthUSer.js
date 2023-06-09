import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/firebase/AuthProvider";

export const useAuthUSer = () => {
  const userGoogle = useContext(AuthContext);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    if (userGoogle) {
      setRedirect("/");
    }
  }, [userGoogle]);

  return { redirect };
};
