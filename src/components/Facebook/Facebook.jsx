import FacebookLogin from '@greatsumini/react-facebook-login';
import api from "../../api";


// import FacebookLogin from 'react-facebook-login';


const Facebook = () => {

//   const responseFacebook = (response) => {
//   console.log(response);
// }

  

  return (
   

    <FacebookLogin
      appId="1278028466239797"
      onSuccess={async (response) => {
        console.log("Login Success!", response);
        const sendFacebookResponseInformation = await api.post(
          "/send-facebook-response",
          response
        );
        console.log(sendFacebookResponseInformation)

      }}
      onFail={(error) => {
        console.log("Login Failed!", error);
      }}
      onProfileSuccess={(response) => {
        console.log("Get Profile Success!", response);
      }}

      // render={({ onClick, logout }) => (
      //   <CustomComponent onClick={onClick} onLogoutClick={logout} />
      // )}
    />
  );
}

export default Facebook