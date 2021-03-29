import React, { Component } from "react";
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import Screen from "../../../components/Screen";
import styles from "./styles";

class SignIn extends Component {
  render() {
    return (
      <Screen>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>

        <Button primary full
          style={styles.button}
        >
          <Text> Sign In </Text>
        </Button>
      </Screen>
    )
  }
}

export default SignIn;