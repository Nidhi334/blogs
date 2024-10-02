import React from 'react'
import PublicSection from './(front)/components/public-section'
import { CategoriesList } from './(front)/components/categories-list'

const page = () => {
  return (
    <div className='flex flex-1'>
      <CategoriesList />
      <PublicSection />
    </div>
  );
}

export default page