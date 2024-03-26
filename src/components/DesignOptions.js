import { useState, useEffect } from "react";

export default function DesignOptions({ heading, desc, options, value, onSelect, style }) {
  return <div className={ ['design-options', `__style-${ style }`] }>
    {
      options && 
      options.map(() => {
        return <div onClick={ e => onSelect() }>

        </div>
      })
    }
  </div>
}