import React from 'react'

import './index.css'

type CoverProps = React.PropsWithChildren & {
  avatar: string;
  subTitle: React.ReactNode;
  title: React.ReactNode;
};

function Cover ({ avatar, title, subTitle, children }: CoverProps) {
  return (
    <div className="cover-bg p-3 p-lg-4 text-white">
    <div className="row">
      <div className="col-lg-4 col-md-5">
        <div className="avatar bg-white shadow-sm p-1">
          <img src={avatar} width="200" height="200" alt="Avatar"/></div>
      </div>
      <div className="col-lg-8 col-md-7 text-center text-md-start">
        <h2 className="h1 mt-2 cover-title">{title}</h2>
        <p className="cover-sub-title">{subTitle}</p>
        <div className="d-print-none">
          {children}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cover
