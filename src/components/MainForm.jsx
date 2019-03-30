// MainForm.jsx
import React, { Component } from 'react';
import ProjectInfo from './ProjectInfo';
import PersonalDetails from './PrelimInspection';
import Confirmation from './Confirmation';
import Success from './Success';
import PrelimInspection from './PrelimInspection';

class MainForm extends Component {
    
        state = {
            step: 1,
            projectNumber: '',
            projectName: '',
            numberOfSystems: '',
            buildSheet: '',
            controlPhilosophy: '',
            projectLayoutDrawing: '',
            projSoftwareValidation: '',
            CppDrawing: '',
            radioGroup21: '',
        }
    

    

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const { projectNumber, projectName, numberOfSystems, buildSheet , controlPhilosophy, projectLayoutDrawing, projSoftwareValidation, CppDrawing, radioGroup21 } = this.state;
        const values = { projectNumber, projectName, numberOfSystems, buildSheet, controlPhilosophy, projectLayoutDrawing, projSoftwareValidation, CppDrawing, radioGroup21 };
        switch(step) {
        case 1:
            return <ProjectInfo 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <PrelimInspection 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 4:
            return <Success />
        }
    }
}

export default MainForm;