import React, { Component } from 'react';
import { Form, Button, Radio } from 'semantic-ui-react';
import { throws } from 'assert';

import '../App.css'

class SystemOperation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, valPar315, valPar316, valPar317, valPar318, valPar319, valPar320, valPar321, valPar322, valPar323, } = this.props
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
                <Form.Field>
                    <Form.Field>2.7 CPP Doors Opens Without Obstructions:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio27'}
                        value={'Yes'}
                        checked={valPar27 === 'Yes'}
                        onChange={this.props.handleRadio('preInsp27')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio27'}
                        value={'No'}
                        checked={valPar27 === 'No'}
                        onChange={this.props.handleRadio('preInsp27')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio27'}
                        value={'N/A'}
                        checked={valPar27 === 'N/A'}
                        onChange={this.props.handleRadio('preInsp27')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>2.8 Power Terminated but Not Energized</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio28'}
                        value={'Yes'}
                        checked={valPar28 === 'Yes'}
                        onChange={this.props.handleRadio('preInsp28')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio28'}
                        value={'No'}
                        checked={valPar28 === 'No'}
                        onChange={this.props.handleRadio('preInsp28')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio28'}
                        value={'N/A'}
                        checked={valPar28 === 'N/A'}
                        onChange={this.props.handleRadio('preInsp28')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>2.9 Correct Transformer:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio29'}
                        value={'Yes'}
                        checked={valPar29 === 'Yes'}
                        onChange={this.props.handleRadio('preInsp29')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio29'}
                        value={'No'}
                        checked={valPar29 === 'No'}
                        onChange={this.props.handleRadio('preInsp29')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio29'}
                        value={'N/A'}
                        checked={valPar29 === 'N/A'}
                        onChange={this.props.handleRadio('preInsp29')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>2.10 Correct Conductor Size:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio210'}
                        value={'Yes'}
                        checked={valPar210 === 'Yes'}
                        onChange={this.props.handleRadio('preInsp210')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio210'}
                        value={'No'}
                        checked={valPar210 === 'No'}
                        onChange={this.props.handleRadio('preInsp210')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio210'}
                        value={'N/A'}
                        checked={valPar210 === 'N/A'}
                        onChange={this.props.handleRadio('preInsp210')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default SystemOperation