import React from 'react';
import { Box, Link, FormControl, FormLabel, Input, Stack, Checkbox, Button} from '@chakra-ui/react'

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      email: '',
      password: '',
    };
 
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
 
  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value
      }
    })
  }
 
  onPasswordChangeHandler(event) {
    this.setState(() => {
      return {
        password: event.target.value
      };
    });
  }
 
  onSubmitHandler(event) {
    event.preventDefault();
 
    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }
 
  render() {
    return (
      <Box my={8} textAlign='left'>
      <form onSubmit={this.onSubmitHandler} >
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type='email' placeholder='Enter your email address' value={this.state.email} onChange={this.onEmailChangeHandler} />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type='password' placeholder='Enter your password' value={this.state.password} onChange={this.onPasswordChangeHandler}/>
        </FormControl>

        <Stack isInline justifyContent='space-between' mt={4}>
            <Box>
              <Checkbox>Remember Me</Checkbox>
            </Box>
            <Box>
              <Link color={`teal.300`}>Forgot your password?</Link>
            </Box>
        </Stack>

        <Button variantcolor='teal'  width='full' mt={4} type='submit'>Sign In</Button>
      </form>
    </Box>

    );
  }
}
 
export default LoginInput;