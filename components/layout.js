export const Header = () => {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main> {children} </main>
    </>
  );
};

export default Layout;
