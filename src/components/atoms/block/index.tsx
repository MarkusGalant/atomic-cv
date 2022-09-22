import React from 'react'

import './index.css'

type BlockProps = React.PropsWithChildren & {
  title: string;
};

function Block ({ title, children }: BlockProps) {
  return (
    <div className="block px-2 px-lg-4">
      <h2 className="h3 mb-2">{title}</h2>
        {children}
    </div>
  )
}

export default Block
