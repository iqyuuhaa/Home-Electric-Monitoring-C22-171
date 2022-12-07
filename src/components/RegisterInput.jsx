import React from 'react';
import { Box, FormControl, FormLabel, Input, Button} from '@chakra-ui/react'

class RegisterInput extends React.Component {
  constructor(props) {
    super(props)
 
    this.state = {
      name: '',
      email: '',
      password: '',
    }
 
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
 
  onNameChange(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }
 
  onEmailChange(event) {
    this.setState(() => {
      return {
        email: event.target.value
      };
    });
  }
 
  onPasswordChange(event) {
    this.setState(() => {
      return {
        password: event.target.value
      };
    })
  }
 
  onSubmitHandler(event) {
    event.preventDefault();
 
    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }
 
  render() {
    return (
      <Box my={8} textAlign='left'>
      <form onSubmit={this.onSubmitHandler} >

        <FormControl>
          <FormLabel>Your Name</FormLabel>
          <Input type='text' placeholder='Enter your name' value={this.state.name} onChange={this.onNameChange} />
        </FormControl>

        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type='email' placeholder='Enter your email address' value={this.state.email} onChange={this.onEmailChange} />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type='password' placeholder="Enter your new Password" autoComplete='current-password' value={this.state.password} onChange={this.onPasswordChange}/>
        </FormControl>

        <Button variantcolor='teal'  width='full' mt={4} type='submit'>Register</Button>
      </form>
    </Box>
    )
  }
}
 
export default RegisterInput;