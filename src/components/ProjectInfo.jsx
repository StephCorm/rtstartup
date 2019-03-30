// ProjectInfo.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class ProjectInfo extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">Project Information</h1>
                <Form.Field>
                    <label>Project Number</label>
                    <input
                    placeholder='Project Number'
                    onChange={this.props.handleChange('projectNumber')}
                    defaultValue={values.projectNumber}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Project Name</label>
                    <input
                    placeholder='Project Name'
                    onChange={this.props.handleChange('projectName')}
                    defaultValue={values.projectName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Number of System</label>
                    <input
                    type= {Number}
                    placeholder='Number of System'
                    onChange={this.props.handleChange('numberOfSystems')}
                    defaultValue={values.numberOfSystems}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Build Sheet</label>
                    <input
                    type= {Number}
                    placeholder='Build Sheet'
                    onChange={this.props.handleChange('buildSheet')}
                    defaultValue={values.buildSheet}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Control Philosophy</label>
                    <input
                    type= {Number}
                    placeholder='Control Philosophy'
                    onChange={this.props.handleChange('controlPhilosophy')}
                    defaultValue={values.controlPhilosophy}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Project Layout Drawing</label>
                    <input
                    type= {Number}
                    placeholder='Project Layout Drawing'
                    onChange={this.props.handleChange('projectLayoutDrawing')}
                    defaultValue={values.projectLayoutDrawing}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Project Software Validation</label>
                    <input
                    type= {Number}
                    placeholder='Project Software Validation'
                    onChange={this.props.handleChange('projSoftwareValidation')}
                    defaultValue={values.projSoftwareValidation}
                    />
                </Form.Field>
                <Form.Field>
                    <label>CPP Electrical Drawing</label>
                    <input
                    type= {Number}
                    placeholder='CPP Electrical Drawing'
                    onChange={this.props.handleChange('CppDrawing')}
                    defaultValue={values.CppDrawing}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default ProjectInfo;