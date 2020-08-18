import React from "react";

function HelloBootstrap() {
  return (
    <header>
      <nav class="nav wrapper transparent">
        <div class="container">
          <a href="#" class="brand-logo">
            Diane Candler
          </a>
          <a href="#" class="sidenav-trigger" data-target="mobile-menu">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="index.html">About Me</a>
            </li>
            <li>
              <a href="portfolio2.html">Coding Portfolio</a>
            </li>
            <li>
              <a href="prodMgmt.html">Product Management</a>
            </li>
            <li>
              <a href="contact2.html">Contact</a>
            </li>
          </ul>
          <ul class="sidenav grey lighten-2" id="mobile-menu">
            <li>
              <a href="portfolio2.html">Coding Portfolio</a>
            </li>
            <li>
              <a href="prodMgmt.html">Product Management</a>
            </li>
            <li>
              <a href="index.html">About Me</a>
            </li>
            <li>
              <a href="contact2.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HelloBootstrap;
