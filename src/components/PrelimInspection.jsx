import React, { Component } from 'react';
import { Form, Button, Radio } from 'semantic-ui-react';
import { throws } from 'assert';

class PrelimInspection extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
        <Form color='blue' >
            <h1 className="ui centered">System Installation</h1>
            <Form.Field inline>
              <Form.Field>System Properly Supported</Form.Field>
              <Radio
                label = {'Yes'}
                name = {'radio21'}
                value = {'Yes'}
                onChange={this.props.handleChange('radioGroup21')}
                defaultValue={values.radioGroup21}
                />
              <Radio
                label = {'No'}
                name = {'radio21'}
                value = {'No'}
                onChange={this.props.handleChange('radioGroup21')}
                defaultValue={values.radioGroup21}
                />
            </Form.Field>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        </Form>
        )
    }
}

export default PrelimInspection
