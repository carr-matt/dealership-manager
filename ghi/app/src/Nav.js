import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/sales/person">Add an new sales employee</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/sales/customer">Add an customer</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/manufacturer/new">Add an manufacturer</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/manufacturer">Manufacturer List</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/sales/new">New Sale!</NavLink>
              </li>
            <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/service/tech">
            Enroll Tech
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/service/appt">
            Schedule Service
            </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
