'use client';

import { useRouter } from 'next/navigation';

import { css } from '../../../../styled-system/css';
import { center } from '../../../../styled-system/patterns';
import { authClient } from '../../../lib/auth-client';

const DashboardContent = () => {
  const { data: session, isPending, error } = authClient.useSession();
  const router = useRouter();

  if (isPending) {
    return <div className={center({ h: '100vh' })}>Loading...</div>;
  }

  if (error) {
    return <div className={center({ h: '100vh' })}>Error: {error.message}</div>;
  }

  if (!session) {
    // Ideally this should be handled by middleware or redirect
    return (
      <div className={center({ h: '100vh', flexDirection: 'column', gap: '4' })}>
        <div>Not signed in</div>
        <button
          className={css({
            bg: 'blue.600',
            color: 'white',
            p: '2',
            borderRadius: 'md',
          })}
          onClick={() => router.push('/login')}
        >
          Go to Login
        </button>
      </div>
    );
  }

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/login');
        },
      },
    });
  };

  return (
    <div className={css({ p: '8', maxWidth: '4xl', margin: '0 auto' })}>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '8',
        })}
      >
        <h1 className={css({ fontSize: '3xl', fontWeight: 'bold' })}>Dashboard</h1>
        <button
          className={css({
            bg: 'red.600',
            color: 'white',
            px: '4',
            py: '2',
            borderRadius: 'md',
            cursor: 'pointer',
            _hover: { bg: 'red.700' },
          })}
          onClick={handleLogout}
        >
          Sign Out
        </button>
      </div>

      <div
        className={css({
          border: '1px solid token(colors.gray.200)',
          borderRadius: 'lg',
          p: '6',
          bg: 'white',
          boxShadow: 'sm',
        })}
      >
        <h2 className={css({ fontSize: 'xl', fontWeight: 'semibold', mb: '4' })}>User Profile</h2>
        <div className={css({ display: 'grid', gap: '4' })}>
          <div className={css({ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '4' })}>
            <span className={css({ fontWeight: 'medium', color: 'gray.600' })}>ID:</span>
            <span className={css({ fontFamily: 'mono' })}>{session.user.id}</span>
          </div>
          <div className={css({ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '4' })}>
            <span className={css({ fontWeight: 'medium', color: 'gray.600' })}>Name:</span>
            <span>{session.user.name}</span>
          </div>
          <div className={css({ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '4' })}>
            <span className={css({ fontWeight: 'medium', color: 'gray.600' })}>Email:</span>
            <span>{session.user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
