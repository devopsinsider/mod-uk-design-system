import React from 'react'
import { IconChevronRight } from '@defencedigital/icon-library'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { getId } from '../../helpers'
import { StyledItem } from './partials/StyledItem'
import { StyledItemContent } from './partials/StyledItemContent'
import { StyledItemTitle } from './partials/StyledItemTitle'
import { StyledItemDescription } from './partials/StyledItemDescription'
import { StyledItemAction } from './partials/StyledItemAction'

export interface ListItemProps extends ComponentWithClass {
  /**
   * Description text to display for an individual item.
   */
  children: string | string[]
  /**
   * Toggles whether the item is in an active state.
   */
  isActive?: boolean
  /**
   * Optional handler called when the item is clicked.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /**
   * Optional handler called when the mouse enters the item area.
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /**
   * Optional handler called when the mouse leaves the item area.
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /**
   * Text title to display for an individual item.
   */
  title: string
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
  title,
  ...rest
}) => {
  const titleId = getId('list-title')

  return (
    <StyledItem
      $isInactive={isActive === false}
      data-testid="list-item"
      role="presentation"
      {...rest}
    >
      <StyledItemContent
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div role="listitem" aria-labelledby={titleId}>
          <StyledItemTitle id={titleId} data-testid="list-item-heading">
            {title}
          </StyledItemTitle>
          <StyledItemDescription>{children}</StyledItemDescription>
        </div>
        <div>
          <StyledItemAction>
            <IconChevronRight />
          </StyledItemAction>
        </div>
      </StyledItemContent>
    </StyledItem>
  )
}

ListItem.displayName = 'ListItem'
