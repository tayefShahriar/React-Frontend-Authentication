import { Grid, TextField, Button, Box, Alert } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ChangePassword = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  // const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const actualData = {
      password: data.get('password'),
      confirm_password: data.get('password_confirmation'),
    }
    if (actualData.confirm_password && actualData.password) {
      if(actualData.confirm_password === actualData.password){
      console.log(actualData)
      document.getElementById('password-change-form').reset()
      setError({ status: true, msg: "Password Changed Successfully.", type: 'success' })
      }else{
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match.", type: 'success' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return (
    <>
      <Box sx={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 600, mx: 4}}>
          <h1>Reset Password</h1>
          <Box component='form' noValidate sx={{ mt: 1 }} id='password-change-form' onSubmit={handleSubmit}>
            <TextField margin="normal" required fullWidth id='password' name='password' label='New Password' type="password" />
            <TextField margin="normal" required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm New Password' type="password" />
            <Box textAlign='center'>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Update</Button>
            </Box>
            {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
          </Box>
      </Box>
    </>
  )
}

export default ChangePassword