import React from 'react'

type PageProps = React.PropsWithChildren;

function Page ({ children }: PageProps) {
  return (
    <div className="container">
      <div className="rounded shadow-lg bg-white my-lg-4">
        {children}
      </div>
    </div>
  )
}

export default Page
