import React from 'react'
import {
   Input
  } from "@material-ui/core";
const counter = () => {
  return (
    <div>
        <Input
                    type="number"
                    defaultValue={2.5}
                    slotProps={{
                        input: {
                    
                        step: 1 ,
                        },
                    }}
        />
    </div>
  )
}

export default counter
