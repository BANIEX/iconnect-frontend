import FacebookLogin from '@greatsumini/react-facebook-login';




const Facebook = () => {

  

  return (
    <FacebookLogin
      appId="1336749817261894"
      onSuccess={(response) => {
        console.log("Login Success!", response);
      }}
      onFail={(error) => {
        console.log("Login Failed!", error);
      }}
      onProfileSuccess={(response) => {
        console.log("Get Profile Success!", response);
      }}
    />
  );
}

export default Facebook