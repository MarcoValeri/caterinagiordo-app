import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
