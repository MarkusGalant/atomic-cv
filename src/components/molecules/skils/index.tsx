import React from 'react'

import './index.css'

type SkilItem = string;

type SkilsProps = React.PropsWithChildren & {
  title: string;
  items: SkilItem[];
};

function Skils ({ title, items }: SkilsProps) {
  const renderSkil = (item: string) =>
   <div key={item} >
    {item}
  </div>

  return (
    <div >
      <h2 className="h6 mb-2">{title}</h2>
      <div>
      {items.map(renderSkil)}
      </div>
    </div>
  )
}

export default Skils
