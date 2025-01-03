import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // Check if the user is authenticated
      const isLoggedIn = !!auth?.user;
      // Initialize protected routes
      // Here, all routes except the login page is protected
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        //return Response.redirect(new URL('/login', nextUrl)); // Redirect unauthenticated users to login page
        return false;// redirect to /login
      } else if (isLoggedIn && nextUrl.pathname === '/login') {
        console.log(nextUrl.pathname);
        // redirected to homepage
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;