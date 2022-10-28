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
                  <NavLink className="nav-link" aria-current="page" to="/sales/person">Enroll Sales Employee</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/sales/customer">Add Customer</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/manufacturer/new">Add Manufacturer</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/manufacturer/lists">Manufacturer List</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/manufacturer/list">Model List</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/manufacturer/autolist">Automobile List</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/manufacturer/autoform">Automobile Form</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/manufacturer/model">Add Model</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/sales/new">New Sale</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/sales/list">List Sales</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/sales/history">Employee Sale History</NavLink>
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
            <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/service/appt/list">
            Appointments List
            </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
