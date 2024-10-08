import React from 'react'
import classNames from 'classnames'

import { NavItem } from '../../../common/Nav'

export interface SidebarNavItemProps extends NavItem {
  /**
   * Optional image component to display to the left of the navigation item.
   */
  Image?: React.ComponentType
  /**
   * Optional handler invoked when an item is clicked on.
   */
  onClick?: () => void
}

/**
 * @deprecated
 */
export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  Image,
  isActive,
  link,
  ...rest
}) => {
  const linkElement = link as React.ReactElement
  const classes = classNames('rn-sidebar__nav-link', { 'is-active': isActive })

  return React.cloneElement(linkElement, {
    ...link.props,
    children: (
      <>
        <span className="rn-sidebar__nav-icon">
          {Image && <Image aria-hidden data-testid="sidebar-nav-item-image" />}
        </span>
        <span className="rn-sidebar__nav-label">
          {linkElement.props.children}
        </span>
      </>
    ),
    className: classes,
    'data-testid': 'sidebar-nav-item',
    ...rest,
  })
}
