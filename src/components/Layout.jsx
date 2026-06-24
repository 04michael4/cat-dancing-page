function Layout({ children }) {
  return (
    <div className="page-layout">
      <header className="page-header">
        <h1>🐱 댄싱 캣</h1>
        <p>버튼을 눌러 고양이를 춤추게 해보세요!</p>
      </header>
      <main className="page-main">{children}</main>
      <footer className="page-footer">
        <p>Space 또는 Enter 키로도 춤을 시작/정지할 수 있어요</p>
      </footer>
    </div>
  )
}

export default Layout
