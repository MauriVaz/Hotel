import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import Image from 'next/image';
import Logout from '../components/Logout';

export const LoginButton = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);
  return (
    <div className="flex flex-row cursor-pointer">
      {user ? (
        <Link href="/api/auth/logout">
          <div className="flex flex-row align-middle">
            <picture className="mr-3 rounded-full">
              {user && <Logout />}
            </picture>
            <div>Logout {user.email || user.nickname}</div>
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
