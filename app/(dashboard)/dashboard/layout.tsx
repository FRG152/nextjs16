const Layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Navbar dashboard</h1>
      {children}
    </div>
  )
}

export default Layout