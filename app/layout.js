import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Team1',
  description: 'Team1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <Link href="/" style={{ marginRight: '1rem' }}>홈</Link>
          <Link href="/posts" style={{ marginRight: '1rem' }}>글 목록</Link>
          <Link href="/write">글 작성</Link>
        </nav>
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
