import './LoginPanel.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { GoogleUserInfo, User } from '../../helpers/types/User';

export default function LoginPanel() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      {user ? (
        <div className='profile'>
          <p className='profile__name'>Hello, {user.givenName || 'user'}</p>
          <img
            className='profile__picture'
            src={user.picture}
            alt={user.givenName}
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            if (credentialResponse.credential) {
              const credDecoded: GoogleUserInfo = jwtDecode(credentialResponse.credential)

              const newUser = {
                id: credDecoded.email,
                givenName: credDecoded.given_name,
                picture: credDecoded.picture,
              };

              setUser(newUser);
            }
          }}
          onError={() => {
            alert('Login Failed');
          }}
        />
      )}
    </>
  );
}