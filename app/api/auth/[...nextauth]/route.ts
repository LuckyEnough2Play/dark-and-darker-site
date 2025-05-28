import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
callbacks: {
  async session({ session, token }) {
    if (token && session.user) {
      session.user = {
        ...session.user,
        id: token.sub!,
        image: token.picture!,
        name: token.name!,
      };
    }
    return session;
  },
},

});

export { handler as GET, handler as POST };
