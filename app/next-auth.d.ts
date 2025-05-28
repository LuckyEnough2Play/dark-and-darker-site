// /app/next-auth.d.ts

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
    };
  }

  interface User {
    id: string;
  }
}
