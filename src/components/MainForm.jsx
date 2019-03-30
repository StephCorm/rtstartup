// MainForm.jsx
import React, { Component } from 'react';
import ProjectInfo from './ProjectInfo';
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
            preInsp21: '',
            preInsp22: '',
            preInsp23: '',
            preInsp24: '',
            preInsp25: '',
            preInsp26: '',
            preInsp27: '',
            preInsp28: '',
            preInsp29: '',
            preInsp210: '',
            preInsp211: '',
            preInsp212: '',
            preInsp213: '',
            preInsp214: '',
            preInsp215: '',
            sysStart31: '',
            sysStart31: '',
            sysStart31: '',
            sysStart31: '',
            sysStart31: '',
            sysStart31: '',
            sysStart31: '',
            sysStart31: '',
            sysStart31: '',
            sysStart31: '',
            sysStart31: '',
            sysStart31: '',
            sysStart31: ''
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

    handleRadio = input => (event, obj) => {
        this.setState({[input]: obj.value})
    }

    render(){
        const {step} = this.state;
        const { projectNumber, projectName, numberOfSystems, buildSheet , controlPhilosophy, projectLayoutDrawing, projSoftwareValidation, CppDrawing, preInsp21, preInsp22, preInsp23, preInsp24, preInsp25, preInsp26, preInsp27, preInsp28, preInsp29, preInsp210, preInsp211, preInsp212, preInsp213, preInsp214, preInsp215 } = this.state;
        const values = { projectNumber, projectName, numberOfSystems, buildSheet, controlPhilosophy, projectLayoutDrawing, projSoftwareValidation, CppDrawing, preInsp21, preInsp22, preInsp23, preInsp24, preInsp25, preInsp26, preInsp27, preInsp28, preInsp29, preInsp210, preInsp211, preInsp212, preInsp213, preInsp214, preInsp215 };
        switch(step) {
        case 1:
            return <ProjectInfo 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={ values }
                    />
        case 2:
            return <PrelimInspection 
                    valPar21={this.state['preInsp21']}
                    valPar22={this.state['preInsp22']}
                    valPar23={this.state['preInsp23']}
                    valPar24={this.state['preInsp24']}
                    valPar25={this.state['preInsp25']}
                    valPar26={this.state['preInsp26']}
                    valPar27={this.state['preInsp27']}
                    valPar28={this.state['preInsp28']}
                    valPar29={this.state['preInsp29']}
                    valPar210={this.state['preInsp210']}
                    valPar211={this.state['preInsp211']}
                    valPar212={this.state['preInsp212']}
                    valPar213={this.state['preInsp213']}
                    valPar214={this.state['preInsp214']}
                    valPar215={this.state['preInsp215']}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleRadio= {this.handleRadio}
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