import Link from 'next/link';
import { useRouter } from 'next/router';

function BackToHome() {
  const router = useRouter();

  const isHomePage = router.pathname === '/home';

  if (!isHomePage) {
    return (
        <>
            <Link href="/home">Home</Link>
        </>
    );
  }
}

export default BackToHome;
