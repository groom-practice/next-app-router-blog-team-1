import './globals.css';

export const metadata = {
  title: 'Team1',
  description: 'Team1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <a href="/" style={{ marginRight: '1rem' }}>홈</a>
          <a href="/posts" style={{ marginRight: '1rem' }}>글 목록</a>
          <a href="/create">글 작성</a>
        </nav>
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
