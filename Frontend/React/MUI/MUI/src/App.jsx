import { Button, Skeleton, Stack } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import InputComponent from './components/Input';

function App() {
  return (
    <div>
      
{/* 
    <Stack spacing={2} direction="row">
      <Button variant="text" color='error' startIcon={<DeleteIcon />}>Text</Button>
      <Button sx={{
        color:"red",
        background:"green"
      }} >Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>


      <Stack>


    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />


<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={60} />
<Skeleton variant="rounded" width={210} height={60} />

      </Stack> */}

      <InputComponent title={"Type your cnic"} />

    </div>
  )
}

export default App
