//@ts-ignore
import { ReactComponent as User } from "../../../assets/images/user.svg";
import { getAuth, signInWithPopup } from "firebase/auth";
import "./authButton.scss";
import { app, myGoogleAuthProvider } from "../../../firebase";
import { useEffect, useState } from "react";

export const AuthButton = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const signInWithEmail = () => {
    signInWithPopup(auth, myGoogleAuthProvider)
      .then((result) => {
        // Успішний вхід в систему
        const LoggedUser = result.user;
        setUser(LoggedUser);
      })
      .catch((error) => {
        // Помилка аутентифікації
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Authentication error:", errorCode, errorMessage);
      });
  };
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser !== null) {
        return setUser(maybeUser);
      }
    });
    return unsub;
  }, [auth]);
  const authHander = (e) => {
    signInWithEmail();
    console.log(user);
  };
  return (
    <div className="auth-btn">
      {!user ? (
        <div className="auth-btn_icon" onClick={authHander}>
          <User />
        </div>
      ) : (
        <></>
      )}
      {user ? (
        <div className="auth-btn_username">{user.displayName}</div>
      ) : (
        <></>
      )}
    </div>
  );
};
