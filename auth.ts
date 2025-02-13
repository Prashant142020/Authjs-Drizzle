import NextAuth from 'next-auth';

import { DrizzleAdapter } from '@auth/drizzle-adapter';
import db from './db/drizzle';
import google from 'next-auth/providers/google';
import github from 'next-auth/providers/github';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [google, github],
});
