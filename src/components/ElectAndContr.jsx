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
        const { values, valPar39, valPar310, valPar311, valPar312, valPar313, valPar314 } = this.props
        return (
            <Form color='blue'>
                <h1 className="ui centered">System Start-Up</h1>
                <h3 className="ui centered">Cpp Electrical</h3>
                <Form.Field>
                    <Form.Field>3.9 CPP Main Disconnect Turned Off:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio39'}
                        value={'Yes'}
                        checked={valPar39 === 'Yes'}
                        onChange={this.props.handleRadio('cppElect39')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio39'}
                        value={'No'}
                        checked={valPar39 === 'No'}
                        onChange={this.props.handleRadio('cppElect39')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio39'}
                        value={'N/A'}
                        checked={valPar39 === 'N/A'}
                        onChange={this.props.handleRadio('cppElect39')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>3.10 Main Power Supply to CPP Disconnect:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio310'}
                        value={'Yes'}
                        checked={valPar310 === 'Yes'}
                        onChange={this.props.handleRadio('cppElect310')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio310'}
                        value={'No'}
                        checked={valPar310 === 'No'}
                        onChange={this.props.handleRadio('cppElect310')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio310'}
                        value={'N/A'}
                        checked={valPar310 === 'N/A'}
                        onChange={this.props.handleRadio('cppElect3101')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>3.11 Measure and Record CPP No-Load Voltage:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio311'}
                        value={'Yes'}
                        checked={valPar311 === 'Yes'}
                        onChange={this.props.handleRadio('cppElect311')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio311'}
                        value={'No'}
                        checked={valPar311 === 'No'}
                        onChange={this.props.handleRadio('cppElect311')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio311'}
                        value={'N/A'}
                        checked={valPar311 === 'N/A'}
                        onChange={this.props.handleRadio('cppElect311')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>3.12 Energize CPP Main Disconnect:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio312'}
                        value={'Yes'}
                        checked={valPar312 === 'Yes'}
                        onChange={this.props.handleRadio('cppElect312')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio312'}
                        value={'No'}
                        checked={valPar312 === 'No'}
                        onChange={this.props.handleRadio('cppElect312')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio312'}
                        value={'N/A'}
                        checked={valPar312 === 'N/A'}
                        onChange={this.props.handleRadio('cppElect312')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <h3 className="ui centered">System Controls and Comms</h3>
                <Form.Field>
                    <Form.Field>3.13 Energize and Verify Operations of Controller:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio313'}
                        value={'Yes'}
                        checked={valPar313 === 'Yes'}
                        onChange={this.props.handleRadio('cppElect313')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio313'}
                        value={'No'}
                        checked={valPar313 === 'No'}
                        onChange={this.props.handleRadio('cppElect313')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio313'}
                        value={'N/A'}
                        checked={valPar313 === 'N/A'}
                        onChange={this.props.handleRadio('cppElect313')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>3.14 Verify and Record Controller Settings:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio314'}
                        value={'Yes'}
                        checked={valPar314 === 'Yes'}
                        onChange={this.props.handleRadio('cppElect314')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio314'}
                        value={'No'}
                        checked={valPar314 === 'No'}
                        onChange={this.props.handleRadio('cppElect314')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio314'}
                        value={'N/A'}
                        checked={valPar314 === 'N/A'}
                        onChange={this.props.handleRadio('cppElect314')}
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