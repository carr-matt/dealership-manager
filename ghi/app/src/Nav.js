import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
            <li className='nav-item dropdown bg-primary'>
                <a className="nav-link dropdown-toggle" id="navbarSales" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
                </a>
                <ul className='dropdown-menu bg-primary' aria-labelledby="navbarSales">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/sales/person">
                    Enroll Sales Person</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/sales/customer">
                    Add Customer</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/sales/new">
                    New Sale</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/sales/list">
                    List All Sales</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/sales/history">
                    Sales Person History</NavLink>
                    </li>
                </ul>
            </li>
            <li className='nav-item dropdown bg-primary'>
                <a className="nav-link dropdown-toggle" id="navbarInventory" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
                </a>
                <ul className='dropdown-menu bg-primary' aria-labelledby="navbarInventory">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/manufacturer/lists">
                    Manufacturer List</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/manufacturer/new">
                    Add a Manufacturer</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/manufacturer/list">
                    Model List</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/manufacturer/model">
                    Add a Model</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/manufacturer/autolist">
                    Automobile List</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/manufacturer/autoform">
                    Add an Automobile</NavLink>
                    </li>
                </ul>
            </li>
            <li className='nav-item dropdown bg-primary'>
                <a className="nav-link dropdown-toggle" id="navbarService" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Service
                </a>
                <ul className='dropdown-menu bg-primary' aria-labelledby="navbarInventory">
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
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/service/history">
                    Service History
                    </NavLink>
                    </li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
