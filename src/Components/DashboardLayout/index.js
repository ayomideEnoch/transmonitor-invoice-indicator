/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./dashboardlayout.scss";
const DashboardLayout = ({ children }) => {
  const [show, setShow] = useState(false);
  const [userOptions, setUserOptions] = useState(false);
  const toggleClick = () => {
    console.log("here");
    setShow(previousShow => {
      return !previousShow;
    });
  };
  const toggleUserOptions = () => {
    setUserOptions(userOptions => {
      return !userOptions;
    });
  };
  return (
    <div className={show ? "dashboard show" : "dashboard"}>
      <div className="dashboard__nav">
        <header className="dashboard__header">
          <div className="dashboard__header-container">
            <p className="dashboard__logo">TransMonitor</p>
            <nav className={userOptions ? "nav show" : "nav"}>
              <a href="#" className="nav__item">
                Support
              </a>
              <a href="#" className="nav__item">
                FAQ
              </a>
              <a href="#" className="nav__item notification">
                <img src="/bell.svg" alt="notification" />
                <div className="notification-count">8</div>
              </a>
              <div className="user nav__item">
                <div className="user__text">
                  <p className="user__greeting">Hello</p>
                  <p className="user__name">Oluwaleke Ojo</p>
                </div>
                <img src="/user.png" className="user__img" alt="user avatar" />
              </div>
            </nav>
            <button className="btn options" onClick={toggleUserOptions}>
              <img src="/dots.svg" alt="dots" />
            </button>
          </div>
        </header>
      </div>
      <aside className="dashboard__side-nav">
        <button className="mobile-hamburger" onClick={toggleClick}>
          &#x2630;
        </button>
        <button className="btn btn--green btn--radius btn--bold m-side invoice-btn">
          GENERATE INVOICE
        </button>
        <nav className="side-nav">
          <div className="side-nav__group">
            <h4 className="side-nav__heading">Main</h4>
            <a href="#" className="side-nav__item active">
              <img src="/overview.svg" alt="overview" />
              <span>Overview</span>
            </a>
          </div>
          <div className="side-nav__group">
            <h4 className="side-nav__heading">Payments</h4>
            <a href="#" className="side-nav__item">
              <img src="/all-payments.svg" alt="All payments" />
              <span>All Payments</span>
            </a>
            <a href="#" className="side-nav__item">
              <img src="/reconcilled-payments.svg" alt="reconcilled payments" />
              <span>Reconcilled Payments</span>
            </a>
            <a href="#" className="side-nav__item">
              <img
                src="/unreconcilled-payments.svg"
                alt="un-reconcilled-payments"
              />
              <span>Un-Reconcilled Payments</span>
            </a>
            <a href="#" className="side-nav__item">
              <img src="/manual-payments.svg" alt="manual payments" />
              <span>Manual Payments</span>
            </a>
          </div>
          <div className="side-nav__group">
            <h4 className="side-nav__heading">Orders</h4>
            <a href="#" className="side-nav__item">
              <img src="/all-orders.svg" alt="All orders" />
              <span>All Payments</span>
            </a>
            <a href="#" className="side-nav__item">
              <img src="/pending-orders.svg" alt="pending orders" />
              <span>Pending Orders</span>
            </a>
            <a href="#" className="side-nav__item">
              <img src="/reconcilled-orders.svg" alt="reconciled orders" />
              <span>Reconcilled Payments</span>
            </a>
            <a href="#" className="side-nav__item">
              <img src="/profile.svg" alt="Marchat profile" />
              <span>Merchant Profile</span>
            </a>
          </div>
        </nav>
      </aside>
      <main className="dashboard__main">{children}</main>
    </div>
  );
};

export default DashboardLayout;
