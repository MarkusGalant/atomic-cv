import React from 'react'

import CvPage from '../components/templates/cv-page'

import useMe from '../hooks/useMe'

function HomePage () {
  const me = useMe()

  return (<CvPage {...me} />)
}

export default HomePage
