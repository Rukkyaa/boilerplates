export const nextAuthLayout = `import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { Providers } from './providers';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className='min-h-screen'>
        <Providers session={session}>
          {children}
        </Providers>
      </body>
    </html >
  );
}`;
