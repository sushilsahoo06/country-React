import React from 'react'

export default function ContextMenu({position}) {
  if(!position) return null;
  return (
    <div className="context-menu" style={{...position}}>
      <div>Edit</div>
      <div>Delete</div>
    </div>
  )
}
