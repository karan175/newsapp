import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">NewsMonkey-M1 check</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light"  to="/">Home</Link>
            </li>
            <li className="nav-item"><Link className="nav-link text-light" to="/Business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/Entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/General">General</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/Health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/Science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/Sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link text-light" to="/Technology">Technology</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar