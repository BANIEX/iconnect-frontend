import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <GoogleOAuthProvider clientId="">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwt_decode(credentialResponse.credential);
              console.log(decoded);
              axios
                .post(`http://localhost:9000/google-sign-in`, decoded)
                .then((res) => {
                  console.log(res);
                  console.log(res.data);
                });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
        ;
      </div>
    </>
  );
}

export default App;
