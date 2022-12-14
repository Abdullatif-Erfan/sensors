import { Link } from "react-router-dom";

export const SidebarMenu = () => {
  return (
    <aside id="sidebar" className="sidebar">
      {/* --------------- Search Bar ---------------- */}
      <div className="search-bar">
          <input
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
          />
          <button type="submit" title="Search">
            <i className="bi bi-search" />
          </button>
      </div>
      {/* ---------------- End Search Bar --------------- */}

      {/* ---------------- Menu List --------------- */}
      <ul className="sidebar-nav  m-t-20" id="sidebar-nav">
        <li className="nav-item">
          <span className="nav-link collapsed">
            <Link to="/">
              <i className="bi bi-house-door-fill" />
              <span className="menuTitle">DASHBOARD</span>
            </Link>
          </span>
        </li>
        {/* --- End Dashboard Menu --- */}

        <li className="nav-item">
          <span className="nav-link collapsed">
            <a href="#">
              <i className="bi bi-file-earmark-richtext" />
              <span className="menuTitle">REPORTS</span>
            </a>
          </span>
        </li>
        {/* --- End REPORTS Menu --- */}

        <li className="nav-item">
            <span className="nav-link collapsed">
              <Link to="/sensors">
              <i className="bi bi-graph-up" />
              <span className="menuTitle">SENSORS</span>
               </Link>
            </span>
        </li>
        {/* --- End SENSORS Menu --- */}

        <li className="nav-item">
          <span className="nav-link collapsed">
            <a href="#">
              <i className="bi bi-people-fill" />
              <span className="menuTitle">USERS</span>
            </a>
          </span>
        </li>
        {/* --- End USERS Menu --- */}

        <li className="nav-item">
          <span className="nav-link collapsed">
            <a href="#">
              <i className="bi bi-gear" />
              <span className="menuTitle">SETTINGS</span>
            </a>
          </span>
        </li>
        {/* --- End SETTINGS Menu --- */}
      </ul>
      {/* ---------------- End Menu List --------------- */}
    </aside>
  );
};
