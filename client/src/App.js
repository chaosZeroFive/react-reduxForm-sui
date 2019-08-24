import React, { Fragment, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { Container, Form, FormGroup, Header, Segment } from "semantic-ui-react";

const App = () => {
  const [textInput, handleChange] = useState("");

  return (
    <Fragment>
      <Container>
        <Segment>
          <Header>Semantic UI Form Input</Header>
        </Segment>
        <Form>
          <Segment>
            <Header>Text Input</Header>
            <FormGroup>
              <Field
                label="Text Input"
                placeholder="Text Input..."
                name="textInput"
                component="input"
                onChange={e => handleChange(e.target.value)}
                value={textInput}
              />
            </FormGroup>
            <strong>Input Value: {textInput}</strong>
          </Segment>
        </Form>
      </Container>
    </Fragment>
  );
};

export default reduxForm({
  form: "simpleForm"
})(App);
