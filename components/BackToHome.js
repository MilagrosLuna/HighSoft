import Link from 'next/link';
import { useRouter } from 'next/router';

function BackToHome() {
  const router = useRouter();

  const isHomePage = (router.pathname === '/home' || router.pathname === '/');

  if (!isHomePage) {
    return (
        <>
            <Link className='back-to-home btn btn-danger' href="/home">Home</Link>
        </>
    );
  }
}

export default BackToHome;
