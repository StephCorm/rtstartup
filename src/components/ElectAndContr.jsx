import React, { Component } from 'react';
import { Form, Button, Radio } from 'semantic-ui-react';
import { throws } from 'assert';

import '../App.css'

class ElectAndContr extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, valPar21, valPar22, valPar23, valPar24, valPar25, valPar26, valPar27, valPar28, valPar29, valPar210, valPar211, valPar212, valPar213, valPar214, valPar215 } = this.props
        return (
            <Form color='blue'>
                <h1 className="ui centered">Preliminary Inspection</h1>
                <Form.Field>
                    <Form.Field>2.1 Reactor Installed Correct and Level:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio21'}
                        value={'Yes'}
                        checked={valPar21 === 'Yes'}
                        onChange={this.props.handleRadio('preInsp21')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio21'}
                        value={'No'}
                        checked={valPar21 === 'No'}
                        onChange={this.props.handleRadio('preInsp21')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio21'}
                        value={'N/A'}
                        checked={valPar21 === 'N/A'}
                        onChange={this.props.handleRadio('preInsp21')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>2.2 System Sufficiently Supported:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio22'}
                        value={'Yes'}
                        checked={valPar22 === 'Yes'}
                        onChange={this.props.handleRadio('preInsp22')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio22'}
                        value={'No'}
                        checked={valPar22 === 'No'}
                        onChange={this.props.handleRadio('preInsp22')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio22'}
                        value={'N/A'}
                        checked={valPar22 === 'N/A'}
                        onChange={this.props.handleRadio('preInsp22')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>2.3 Water Flowing through inlet then outlet:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio23'}
                        value={'Yes'}
                        checked={valPar23 === 'Yes'}
                        onChange={this.props.handleRadio('preInsp23')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio23'}
                        value={'No'}
                        checked={valPar23 === 'No'}
                        onChange={this.props.handleRadio('preInsp23')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio23'}
                        value={'N/A'}
                        checked={valPar23 === 'N/A'}
                        onChange={this.props.handleRadio('preInsp23')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>2.4 Sufficient Service Clearance:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio24'}
                        value={'Yes'}
                        checked={valPar24 === 'Yes'}
                        onChange={this.props.handleRadio('preInsp24')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio24'}
                        value={'No'}
                        checked={valPar24 === 'No'}
                        onChange={this.props.handleRadio('preInsp24')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio24'}
                        value={'N/A'}
                        checked={valPar24 === 'N/A'}
                        onChange={this.props.handleRadio('preInsp24')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>2.5 Drain and Vent Installed:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio25'}
                        value={'Yes'}
                        checked={valPar25 === 'Yes'}
                        onChange={this.props.handleRadio('preInsp25')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio25'}
                        value={'No'}
                        checked={valPar25 === 'No'}
                        onChange={this.props.handleRadio('preInsp25')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio25'}
                        value={'N/A'}
                        checked={valPar25 === 'N/A'}
                        onChange={this.props.handleRadio('preInsp25')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>2.6 CPP Instaled:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio26'}
                        value={'Yes'}
                        checked={valPar26 === 'Yes'}
                        onChange={this.props.handleRadio('preInsp26')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio26'}
                        value={'No'}
                        checked={valPar26 === 'No'}
                        onChange={this.props.handleRadio('preInsp26')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio26'}
                        value={'N/A'}
                        checked={valPar26 === 'N/A'}
                        onChange={this.props.handleRadio('preInsp26')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default ElectAndContr