import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import {
  Container,
  Form,
  FormButton,
  FormCheckbox,
  FormDropdown,
  FormGroup,
  FormInput,
  FormRadio,
  FormSelect,
  FormTextArea,
  Header,
  Segment,
  Grid,
  GridRow,
  GridColumn
} from "semantic-ui-react";

const App = formProps => {
  const { handleSubmit, reset, pristine, submitting, value } = formProps;

  handleChange(e){
    e.preventDefault()
    
  }

  return (
    <Fragment>
      <Container>
        <Header>React / Redux Form / Semantic UI</Header>
        <Form onSubmit={handleSubmit}>
          <Segment>
            <Grid columns={2} celled="internally">
              <Header>Text Input</Header>
              <GridRow>
                <GridColumn>
                  <FormGroup>
                    <Field
                      component={FormInput}
                      label="Text Input"
                      placeholder="Text Input..."
                      name="textInput1"
                      value={value}
                      onChange={e => onChange(e)}
                    />
                  </FormGroup>
                </GridColumn>
                <GridColumn>
                  <div>{formProps.textInput1}</div>
                </GridColumn>
              </GridRow>
            </Grid>
          </Segment>
        </Form>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  value: state.value
})

const mapDispatchToProps = {
  
}


export default reduxForm({
  form: "simpleForm"
})(App);
