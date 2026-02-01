'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { css } from '../../../../styled-system/css';
import { center } from '../../../../styled-system/patterns';
import { authClient } from '../../../lib/auth-client';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    setLoading(true);
    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          router.push('/dashboard');
        },
        onError: (ctx) => {
          alert(ctx.error.message);
          setLoading(false);
        },
      },
    );
  };

  return (
    <div className={center({ h: '100vh' })}>
      <div
        className={css({
          w: 'sm',
          p: '8',
          borderWidth: '1px',
          borderRadius: 'lg',
          boxShadow: 'sm',
        })}
      >
        <h1 className={css({ fontSize: '2xl', fontWeight: 'bold', mb: '6', textAlign: 'center' })}>
          Sign In
        </h1>
        <div className={css({ display: 'flex', flexDirection: 'column', gap: '4' })}>
          <input
            className={css({
              p: '2',
              border: '1px solid token(colors.gray.300)',
              borderRadius: 'md',
            })}
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={css({
              p: '2',
              border: '1px solid token(colors.gray.300)',
              borderRadius: 'md',
            })}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={css({
              bg: 'blue.600',
              color: 'white',
              p: '2',
              borderRadius: 'md',
              cursor: 'pointer',
              _hover: { bg: 'blue.700' },
              _disabled: { opacity: 0.5, cursor: 'not-allowed' },
            })}
            disabled={loading}
            onClick={handleSignIn}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
          <div className={css({ textAlign: 'center', fontSize: 'sm', color: 'gray.600' })}>
            Don&apos;t have an account?{' '}
            <Link
              className={css({ color: 'blue.600', textDecoration: 'underline' })}
              href="/sign-up"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
