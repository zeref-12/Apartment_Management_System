import '... @/styles/globals.css';
import '... @/styles/profile.css';
import '... @/styles/card1.css';
import '... @/styles/contact.css';
import '... @/styles/mocard1.css';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    
  )
}