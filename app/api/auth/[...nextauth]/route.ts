// /app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/discord";

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
        (session.user as any).id = token.sub!;
session.user.name = token.name!;
session.user.image = token.picture!;

      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
