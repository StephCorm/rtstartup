// MainForm.jsx
import React, { Component } from 'react';
import ProjectInfo from './ProjectInfo';
import Confirmation from './Confirmation';
import Success from './Success';
import PrelimInspection from './PrelimInspection';
import ReactorAssembly from './ReactorAssembly';
import ElectAndContr from './ElectAndContr';
import SystemOperation from './SystemOperation';

import '../App.css'

class MainForm extends Component {

    state = {
        step: 1, projectNumber: '', projectName: '', numberOfSystems: '', buildSheet: '', controlPhilosophy: '', projectLayoutDrawing: '', projSoftwareValidation: '', CppDrawing: '',
        preInsp21: '', preInsp22: '', preInsp23: '', preInsp24: '', preInsp25: '', preInsp26: '', preInsp27: '', preInsp28: '', preInsp29: '', preInsp210: '', preInsp211: '', preInsp212: '', preInsp213: '', preInsp214: '', preInsp215: '',
        reactAss31: '', reactAss32: '', reactAss33: '', reactAss34: '', reactAss35: '', reactAss36: '', reactAss37: '', reactAss38: '',
        cppElect39: '', cppElect310: '', cppElect311: '', cppElect312: '',
        contrComs313: '', contrComs314: '',
        systOp315: '', systOp316: '', systOp317: '', systOp318: '', systOp319: '', systOp320: '', systOp321: '', systOp322: '', systOp323: '',
        addEquip324: '', addEquip325,
        sysComm40: '', sysComm41: '', sysComm42: '', sysComm43: '', sysComm44: '', sysComm45: '',
        cppV_NL_AB: '', cppV_NL_AG: '', cppV_NL_BG: '', cppV_FL_AB: '', cppV_FL_AG: '', cppV_FL_BG: '', cppA_FL_A: '', cppA_FL_B: '', cppA_FL_G: '',
        suComments: '',
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    handleRadio = input => (event, obj) => {
        this.setState({ [input]: obj.value })
    }

    render() {
        const { step } = this.state;
        const { projectNumber, projectName, numberOfSystems, buildSheet, controlPhilosophy, projectLayoutDrawing, projSoftwareValidation, CppDrawing, preInsp21, preInsp22, preInsp23, preInsp24, preInsp25, preInsp26, preInsp27, preInsp28, preInsp29, preInsp210, preInsp211, preInsp212, preInsp213, preInsp214, preInsp215, reactAss31, reactAss32, reactAss33, reactAss34, reactAss35, reactAss36, reactAss37, reactAss38, cppElect39, cppElect310, cppElect311, cppElect312,contrComs313, contrComs314,systOp315, systOp316, systOp317, systOp318, systOp319, systOp320, systOp321, systOp322, systOp323, addEquip324, addEquip325 } = this.state;
        const values = { projectNumber, projectName, numberOfSystems, buildSheet, controlPhilosophy, projectLayoutDrawing, projSoftwareValidation, CppDrawing, preInsp21, preInsp22, preInsp23, preInsp24, preInsp25, preInsp26, preInsp27, preInsp28, preInsp29, preInsp210, preInsp211, preInsp212, preInsp213, preInsp214, preInsp215, reactAss31, reactAss32, reactAss33, reactAss34, reactAss35, reactAss36, reactAss37, reactAss38, cppElect39, cppElect310, cppElect311, cppElect312,contrComs313, contrComs314,systOp315, systOp316, systOp317, systOp318, systOp319, systOp320, systOp321, systOp322, systOp323, addEquip324, addEquip325  };
        switch (step) {
            case 1:
                return <ProjectInfo
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
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
                    handleRadio={this.handleRadio}
                    values={values}
                />
            case 3:
                return <ReactorAssembly
                    valPar31={this.state['reactAss31']}
                    valPar32={this.state['reactAss32']}
                    valPar33={this.state['reactAss33']}
                    valPar34={this.state['reactAss34']}
                    valPar35={this.state['reactAss35']}
                    valPar36={this.state['reactAss36']}
                    valPar37={this.state['reactAss37']}
                    valPar38={this.state['reactAss38']}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleRadio={this.handleRadio}
                    values={values}
                />
            case 4:
                return <ElectAndContr
                    valPar39={this.state['cppElect39']}
                    valPar310={this.state['cppElect310']}
                    valPar311={this.state['cppElect311']}
                    valPar312={this.state['cppElect312']}
                    valPar313={this.state['contrComs313']}
                    valPar314={this.state['contrComs314']}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleRadio={this.handleRadio}
                    values={values}
                />
            case 5:
                return <SystemOperation
                    valPar315={this.state['systOp315']}
                    valPar316={this.state['systOp316']}
                    valPar317={this.state['systOp317']}
                    valPar318={this.state['systOp318']}
                    valPar319={this.state['systOp319']}
                    valPar320={this.state['systOp320']}
                    valPar321={this.state['systOp321']}
                    valPar322={this.state['systOp322']}
                    valPar323={this.state['systOp323']}
                    valPar322={this.state['addEquip324']}
                    valPar323={this.state['addEquip325']}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleRadio={this.handleRadio}
                    values={values}
                />
            case 6:
                return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
            case 7:
                return <Success />
        }
    }
}

export default MainForm;