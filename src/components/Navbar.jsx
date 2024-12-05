
const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'white' }}>
      <h1>MERA Bestie</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
