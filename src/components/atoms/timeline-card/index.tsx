import React from 'react'

import './index.css'

export type TimelineCardProps = React.PropsWithChildren & {
    header: React.ReactNode;
    subHeader: React.ReactNode;
}

export function TimelineCard ({ header, subHeader, children }: TimelineCardProps) {
  return (
        <div className="timeline-card timeline-card-primary card shadow-sm">
            <div className="card-body">
                <div className="h5 mb-1">{header}</div>
                <div className="text-muted text-small mb-2">{subHeader}</div>
                <div>{children}</div>
            </div>
        </div>
  )
}

export default TimelineCard
