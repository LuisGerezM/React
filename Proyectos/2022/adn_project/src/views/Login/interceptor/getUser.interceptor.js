import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "services/serviceFirebase/firebaseConfig.service";
import { chekingDocumentExists } from "services/serviceQueryFirebase/chekingDocumentExists.service";
import { adapterUserData } from "../adapter/adapterUserData";

const { REACT_APP...: USERCOLLECTION } = process.env;

const auth = getAuth(app);

export const getUser = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = await signInWithPopup(auth, googleProvider);

    const userIsAuth = await chekingDocumentExists(
      `${USERCOLLECTION}`,
      loginWithGoogle.user.email
    );

    if (userIsAuth.status !== "success") throw new Error(userIsAuth.status);

    const { userName, email, role } = userIsAuth.results.data().dataUser;

    const userDataAdapted = adapterUserData({
      userName,
      email,
      role,
      accessToken: loginWithGoogle.user.accessToken,
    });

    return { status: "success", data: { userIsAuth, userDataAdapted } };
  } catch (error) {
    console.error("error getUser", error.message);
    return { status: error.message };
  }
};
