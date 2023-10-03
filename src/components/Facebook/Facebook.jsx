// import FacebookLogin from '@greatsumini/react-facebook-login';

import FacebookLogin from 'react-facebook-login';


const Facebook = () => {

  const responseFacebook = (response) => {
  console.log(response);
}

  

  return (
    // <FacebookLogin
    //   appId=""
    //   onSuccess={(response) => {
    //     console.log("Login Success!", response);
    //   }}
    //   onFail={(error) => {
    //     console.log("Login Failed!", error);
    //   }}
    //   onProfileSuccess={(response) => {
    //     console.log("Get Profile Success!", response);
    //   }}
    // />
     <FacebookLogin
    appId="1336749817261894"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />,
  );
}

export default Facebook