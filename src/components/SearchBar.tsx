import React from 'react'

export default function SearchBar() {
  return (
    <div className="container input-group m-4">
  
  <input type="text" className="form-control text-center" placeholder='Movie name...'/>
  <input type="text" className="form-control text-center" placeholder='Year...'/>
</div>
  )
}
