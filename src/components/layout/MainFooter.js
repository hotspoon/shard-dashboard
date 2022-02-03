import React from "react";
import PropTypes from "prop-types";

const MainFooter = ({ contained, menuItems, copyright }) => (
  <>
    <footer className="main-footer d-flex bg-white border-top">
      <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
    </footer>
  </>
);

MainFooter.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: PropTypes.bool,
  /**
   * The menu items array.
   */
  menuItems: PropTypes.array,
  /**
   * The copyright info.
   */
  copyright: PropTypes.string,
};

MainFooter.defaultProps = {
  contained: false,
  copyright: "Copyright © 2018 DesignRevision",
  menuItems: [
    {
      title: "Home",
      to: "#",
    },
    {
      title: "Services",
      to: "#",
    },
    {
      title: "About",
      to: "#",
    },
    {
      title: "Products",
      to: "#",
    },
    {
      title: "Blog",
      to: "#",
    },
  ],
};

export default MainFooter;
