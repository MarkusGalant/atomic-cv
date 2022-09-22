import React from 'react'

type IconProps = {
  title: string;
  name: 'github' | 'linkedin'
}

function Icon ({ name, title }: IconProps) {
  return (
    <i className={`fab fa-${name}`}>
      <span className="menu-title sr-only">{title}</span>
      </i>
  )
}

export default Icon
