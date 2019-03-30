// Confirmation.jsx
import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { projectNumber, projectName, radioGroup21, radioGroup22}} = this.props;

        return(
            <div>
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List>
                    <List.Item>
                        <List.Content>Project Number: {projectNumber}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>Project Name: {projectName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>2.1 System Installed Correctly and Level: {radioGroup21}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>2.1 System Supported: {radioGroup22}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Confirm</Button>
            </div>
        )
    }
}

export default Confirmation;