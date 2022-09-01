export const Header = () => {
  function toggleNav() {
    // var sidebar = document.getElementById("sidebar");

    // if (sidebar.style.display === "none") {
    //   document.getElementById("main").style.marginLeft = "250px";
    //   document.getElementById("footer").style.marginLeft = "250px";
    //   sidebar.style.display = "block";
    // } else {
    //   sidebar.style.display = "none";
    //   sidebar.classList.remove("animation");
    //   document.getElementById("main").style.marginLeft = "0px";
    //   document.getElementById("footer").style.marginLeft = "0px";
    // }
    let toggle = document.querySelector(".toggle");
    let sidebar = document.querySelector(".sidebar");
    let main = document.querySelector(".main");
    let searchBar = document.querySelector(".search-bar");

    toggle.classList.toggle("active");
    sidebar.classList.toggle("active");
    main.classList.toggle("active");
    searchBar.classList.toggle("show");

    document
      .querySelectorAll(".menuTitle")
      .forEach(el => el.classList.toggle("show"));
  }

  return (
    <header
      id="header"
      className="header fixed-top d-flex justify-content-between"
    >
      {/* -------------- Toggle Button ----------------- */}
      <div className="d-flex align-items-center justify-content-between">
        {/* <i  className="bi bi-list toggle-sidebar-btn" /> */}
        <i
          onClick={toggleNav}
          className="bi bi-list toggle-sidebar-btn toggle"
        ></i>
      </div>
      {/* ------------ End Toggle Button ----------------*/}

      {/* -------------- User Profile ------------------- */}
      <div className="userProfile">
        <span className="userInformation">
          <div className="userName">Abdul Latif Erfan</div>
          <div className="userSetting">Account Setting</div>
        </span>
        <i className="bi bi-person-circle" />
      </div>
      {/* ---------------- End User Profile ---------------- */}
    </header>
  );
};
