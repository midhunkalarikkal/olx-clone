import Box from "@mui/material/Box";
import Context from "../utils/Context";
import Modal from "@mui/material/Modal";
import { auth, provider } from "../utils/firebase";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { validateUserData } from "../utils/validations";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import toast from "react-hot-toast";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};

const inputStyle = {
  width: "100%",
  mb: 2,
};

export default function Login() {
  const { loginOpen, setLoginOpen, setUserLoggedIn, setUserInfo } =
    useContext(Context);

  const [isSignIn, setSignIn] = useState(false);
  const [isSignUp, setSignUp] = useState(false);
  const [errMesage, setErrMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleClose = () => setLoginOpen(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const moveToSignIn = () => {
    setSignIn(isSignIn ? false : true);
    setSignUp(false);
  };

  const moveToSignUp = () => {
    setSignUp(true);
    setSignIn(true);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = async () => {
    const data = {
      name: isSignUp && !isSignIn ? name.current.value : null,
      email: email.current.value,
      password: password.current.value,
      isSignUp,
      isSignIn,
    };

    const errors = validateUserData(data);
    if (errors) {
      setErrMessage(Object.values(errors).join(" "));
      return;
    }

    try {
      if (isSignIn && isSignUp) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: "https://example.com/jane-q-user/profile.jpg",
            })
              .then(() => {
                setLoginOpen(false);
                setUserLoggedIn(true);
                setUserInfo(auth.currentUser);
                toast.success("Registered successfully.");
              })
              .catch((error) => {
                toast.error("Registration failed, please try again.");
                setErrMessage(error.message);
              });
          })
          .catch((error) => {
            toast.error("Registration failed, please try again.");
            setErrMessage(error.code);
          });
      } else if (isSignIn && !isSignUp) {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            setLoginOpen(false);
            setUserLoggedIn(true);
            setUserInfo(user);
            toast.success("Loggined successfully.");
          })
          .catch((error) => {
            toast.error("Login failed, please try again.");
            setErrMessage(error.code);
          });
      }
    } catch (error) {
      console.log("error");
    }
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const { user } = data;
        setLoginOpen(false);
        setUserLoggedIn(true);
        setUserInfo(user);
        toast.success("LoggedIn successfully.");
      })
      .catch((error) => {
        toast.error("Login failed, please try again.");
      });
  };

  return (
    <Modal
      open={loginOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <CloseIcon
            onClick={handleClose}
            sx={{ color: "#002f34", fontSize: "2rem", cursor: "pointer" }}
          />
        </Box>

        <Box
          className="flex flex-col w-full"
          alignItems="center"
          justifyContent="center"
          sx={{
            padding: 2,
            marginBottom: "2rem",
          }}
        >
          <Box
            component="img"
            src="https://statics.olx.in/external/base/img/loginEntryPointPost.png"
            alt="Placeholder Image"
            sx={{
              width: 80,
              height: 80,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "semibold",
              fontSize: ".9rem",
              textAlign: "Center",
            }}
          >
            Help us to become one of the besta places to buy and sell
          </Typography>
        </Box>

        <Box sx={{ border: "none" }}>
          {isSignIn && (
            <Box>
              {isSignIn && isSignUp && (
                <TextField
                  inputRef={name}
                  id="outlined-name"
                  label="Name"
                  variant="outlined"
                  sx={inputStyle}
                />
              )}
              <TextField
                inputRef={email}
                id="outlined-email"
                label="Email"
                variant="outlined"
                sx={inputStyle}
              />
              <TextField
                inputRef={password}
                id="outlined-password"
                label="Password"
                variant="outlined"
                sx={inputStyle}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  fontWeight: "semibold",
                  fontSize: ".9rem",
                  color: "red",
                }}
              >
                {errMesage}
              </Typography>
              <Button
                onClick={handleSubmit}
                fullWidth
                className="hover:bg-[#002f34] hover:text-white"
                variant="outlined"
                sx={{
                  borderColor: "#002f34",
                  color: "#002f34",
                  fontWeight: "600",
                  borderWidth: "2px",
                  mb: 2,
                  height: "40px",
                }}
              >
                Submit
              </Button>
              <Typography
                variant="p"
                component="h4"
                align="center"
                onClick={moveToSignIn}
                sx={{
                  color: "#002f34",
                  fontWeight: "500",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <ArrowBackIcon className="mx-2 mb-1" />
                Back
              </Typography>
            </Box>
          )}

          {!isSignIn && !isSignUp && (
            <Box>
              <Button
                fullWidth
                variant="outlined"
                onClick={moveToSignUp}
                sx={{
                  borderColor: "#002f34",
                  color: "#002f34",
                  fontWeight: "600",
                  borderWidth: "2px",
                  mb: 2,
                  "&:hover": {
                    borderWidth: "3px",
                  },
                }}
              >
                Continue with Email
              </Button>

              <Button
                onClick={handleGoogleSignIn}
                fullWidth
                variant="outlined"
                sx={{
                  borderColor: "#002f34",
                  color: "#002f34",
                  fontWeight: "500",
                  fontSize: ".7rem",
                  borderWidth: "2px",
                  mb: 2,
                  "&:hover": {
                    borderWidth: "3px",
                  },
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    id="Capa_1"
                    version="1.1"
                    viewBox="0 0 150 150"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <style type="text/css">
                      {`
                  .st14 { fill: #4285F4; }
                  .st15 { fill: #34A853; }
                  .st12 { fill: #FBBC05; }
                  .st13 { fill: #EA4335; }
                  `}
                    </style>
                    <g>
                      <path
                        className="st14"
                        d="M120,76.1c0-3.1-0.3-6.3-0.8-9.3H75.9v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5C115,101.8,120,90,120,76.1L120,76.1z"
                      />
                      <path
                        className="st15"
                        d="M75.9,120.9c12.4,0,22.8-4.1,30.4-11.1L91.5,98.4c-4.1,2.8-9.4,4.4-15.6,4.4c-12,0-22.1-8.1-25.8-18.9L34.9,95.6C42.7,111.1,58.5,120.9,75.9,120.9z"
                      />
                      <path
                        className="st12"
                        d="M50.1,83.8c-1.9-5.7-1.9-11.9,0-17.6L34.9,54.4c-6.5,13-6.5,28.3,0,41.2L50.1,83.8z"
                      />
                      <path
                        className="st13"
                        d="M75.9,47.3c6.5-0.1,12.9,2.4,17.6,6.9L106.6,41C98.3,33.2,87.3,29,75.9,29.1c-17.4,0-33.2,9.8-41,25.3l15.2,11.8C53.8,55.3,63.9,47.3,75.9,47.3z"
                      />
                    </g>
                  </svg>
                  Continue with Google
                </span>
              </Button>

              <Divider sx={{ my: 2 }}>OR</Divider>

              <Typography
                variant="p"
                component="h4"
                align="center"
                onClick={moveToSignIn}
                sx={{
                  color: "#002f34",
                  fontWeight: "500",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Login with Email
              </Typography>
            </Box>
          )}

          <Typography
            sx={{
              fontSize: ".8rem",
              marginTop: "4rem",
              textAlign: "Center",
              color: "#002f34",
              opacity: "80%",
            }}
          >
            All your personal details are safe with us.
          </Typography>

          <Typography
            sx={{
              fontSize: ".8rem",
              marginTop: "1rem",
              textAlign: "Center",
              color: "#002f34",
              opacity: "80%",
            }}
          >
            If you continue, you are accepting{" "}
            <span className="text-blue-600">
              OLX Terms and Conditions and Privacy Policy
            </span>
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
