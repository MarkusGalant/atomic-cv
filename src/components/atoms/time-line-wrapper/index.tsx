import React from 'react'

import './index.css'

export type TimelineWrapperProps = React.PropsWithChildren & {}

export function TimelineWrapper ({ children }: TimelineWrapperProps) {
  return (
        <div className="timeline">
            {children}
        </div>
  )
}

export default TimelineWrapper
