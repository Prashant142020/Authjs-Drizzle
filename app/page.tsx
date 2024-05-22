import getSession from '@/lib/getSession';

export default async function Home() {
  const session = await getSession();
  const user = session?.user;
  return (
    <main>
      <h1>Home</h1>
      <p> {user ? `Hello, ${user.name}` : ' Hello, You are not login'}</p>
    </main>
  );
}
