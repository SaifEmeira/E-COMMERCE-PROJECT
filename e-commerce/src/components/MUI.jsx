/* eslint-disable no-unused-vars */
import React from 'react'

import Typography from '@mui/material/Typography';
import { color } from 'framer-motion';
import { Button } from '@mui/material';

export default function MUI() {
  return (
    <div>
      <Typography variant="h1" component="h2" sx={{color:"violet",}}>
  h1. Heading
</Typography>

<Button variant='contained' component="button" sx={{color:'greenyellow'}} > OK</Button>
    </div>
  )
}
