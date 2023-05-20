//@ts-ignore
import { ReactComponent as User } from "../../../assets/images/user.svg";
import { getAuth, signInWithPopup } from "firebase/auth";
import "./authButton.scss";
import { app, myGoogleAuthProvider } from "../../../firebase";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../service/actions/actions";
export const AuthButton = () => {
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const signInWithEmail = () => {
    signInWithPopup(auth, myGoogleAuthProvider)
      .then((result) => {
        const LoggedUser = result.user;
        setUser(LoggedUser);
        dispatch(actions.setUser(LoggedUser));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Authentication error:", errorCode, errorMessage);
      });
  };
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser !== null) {
        dispatch(actions.setUser(maybeUser));

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
