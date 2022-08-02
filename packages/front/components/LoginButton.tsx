import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import Logout from '../components/Logout';
import Image from 'next/image';

export const LoginButton = () => {
  const { user, error, isLoading } = useUser();

  console.log(user);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="flex flex-row cursor-pointer">
      {user ? (
        <Link href="/api/auth/logout">
          <div className="flex flex-row align-middle">
            <img alt="" src={user.picture} width="38" className="rounded" />
            {user && <Logout />}
            <div>Logout {user.name || user.nickname}</div>
          </div>
        </Link>
      ) : (
        <Link href="/api/auth/login">
          <a>
            <p>Login</p>
          </a>
        </Link>
      )}
    </div>
  );
};
