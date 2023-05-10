const Header = () => {
  return ( 
    // <h1>i'm the header</h1>
    <nav className="header bg-orange-600 text-white border-2 border-pink-300 px-8 py-4 rounded-lg">
      <div>
      <p className="  text-xs">
          My balance
        </p>
        <span className="  text-2xl">
          $921.48
        </span>
      </div>
        <div className="circle">put circles here</div>
    </nav>
    
  );
}

export default Header;