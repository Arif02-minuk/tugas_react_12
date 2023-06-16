import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Grid,
  Image,
  Header,
  Form,
  Checkbox,
  Button,
  Segment,
  Input,
} from "semantic-ui-react";


class App extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <Grid columns={4} centered>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2" color="teal" textAlign="center">
                <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" />{" "}
                Member Login
              </Header>
              <Segment stacked padded centered>
                <Form>
                  <Form.Field>
                    <Input
                      icon="user"
                      iconPosition="left"
                      placeholder="E-mail Address"
                    />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox centered label="I agree to the Terms and Conditions" />
                  </Form.Field>
                  <Button type="submit" fluid color="teal">
                    Login
                  </Button>
                </Form>
              </Segment>

              <Segment textAlign="center">
                <p>Tidak Meiliki Akun?Silahkan <a href="http:/register">Register</a></p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default App;
