/**
 * @typedef {object} navMenuLink
 * @property {string} path - route of the page
 * @property {string} name - name of the page
 */

import { NavLink } from "react-router-dom"

/**
 *
 * @param {object} props
 * @param {navMenuLink[]} props.links
 * @param {string} [props.className=""]
 * @returns
 */
function NavMenu(props) {
  const {links, className} = props
  
  return (
    <div className={className}>
      {links.map(({ path, name }, index) => (
        <NavLink
          key={`nav-menu-${index}`}
          to={path}
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : "inactive-link"}`
          }>
          {name}
        </NavLink>
      ))}
    </div>
  )
}

export default NavMenu
