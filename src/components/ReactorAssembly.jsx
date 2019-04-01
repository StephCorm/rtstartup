import React, { Component } from 'react';
import { Form, Button, Radio } from 'semantic-ui-react';


import '../App.css'

class ReactorAssembly extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, valPar31, valPar32, valPar33, valPar34, valPar35, valPar36, valPar37, valPar38 } = this.props
        return (
            <Form color='blue'>
                <h1 className="ui centered">Preliminary Inspection</h1>
                <h3 className="ui centered">Reactor Assembly</h3>
                <Form.Field>
                    <Form.Field>3.1 Lamps /& Sleeves installed:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio31'}
                        value={'Yes'}
                        checked={valPar31 === 'Yes'}
                        onChange={this.props.handleRadio('reactAss31')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio31'}
                        value={'No'}
                        checked={valPar31 === 'No'}
                        onChange={this.props.handleRadio('reactAss31')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio31'}
                        value={'N/A'}
                        checked={valPar31 === 'N/A'}
                        onChange={this.props.handleRadio('reactAss31')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>3.2 UV Sensors Installed and Connected:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio32'}
                        value={'Yes'}
                        checked={valPar32 === 'Yes'}
                        onChange={this.props.handleRadio('reactAss32')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio32'}
                        value={'No'}
                        checked={valPar32 === 'No'}
                        onChange={this.props.handleRadio('reactAss32')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio32'}
                        value={'N/A'}
                        checked={valPar32 === 'N/A'}
                        onChange={this.props.handleRadio('reactAss32')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>3.3 Lamp Holders Installed and Connected:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio33'}
                        value={'Yes'}
                        checked={valPar33 === 'Yes'}
                        onChange={this.props.handleRadio('reactAss33')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio33'}
                        value={'No'}
                        checked={valPar33 === 'No'}
                        onChange={this.props.handleRadio('reactAss33')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio33'}
                        value={'N/A'}
                        checked={valPar33 === 'N/A'}
                        onChange={this.props.handleRadio('reactAss33')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>3.4 Rev Counter properly installed:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio34'}
                        value={'Yes'}
                        checked={valPar34 === 'Yes'}
                        onChange={this.props.handleRadio('reactAss34')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio34'}
                        value={'No'}
                        checked={valPar34 === 'No'}
                        onChange={this.props.handleRadio('reactAss34')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio34'}
                        value={'N/A'}
                        checked={valPar34 === 'N/A'}
                        onChange={this.props.handleRadio('reactAss34')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>3.5 Temperature Switch Installed:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio35'}
                        value={'Yes'}
                        checked={valPar35 === 'Yes'}
                        onChange={this.props.handleRadio('reactAss35')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio35'}
                        value={'No'}
                        checked={valPar35 === 'No'}
                        onChange={this.props.handleRadio('reactAss35')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio35'}
                        value={'N/A'}
                        checked={valPar35 === 'N/A'}
                        onChange={this.props.handleRadio('reactAss35')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>3.6 Wiper Motor Power Installed:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio36'}
                        value={'Yes'}
                        checked={valPar36 === 'Yes'}
                        onChange={this.props.handleRadio('reactAss36')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio36'}
                        value={'No'}
                        checked={valPar36 === 'No'}
                        onChange={this.props.handleRadio('reactAss36')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio36'}
                        value={'N/A'}
                        checked={valPar36 === 'N/A'}
                        onChange={this.props.handleRadio('reactAss36')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>3.7 Reactor Filled without Leaks:</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio37'}
                        value={'Yes'}
                        checked={valPar37 === 'Yes'}
                        onChange={this.props.handleRadio('reactAss37')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio37'}
                        value={'No'}
                        checked={valPar37 === 'No'}
                        onChange={this.props.handleRadio('reactAss37')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio37'}
                        value={'N/A'}
                        checked={valPar37 === 'N/A'}
                        onChange={this.props.handleRadio('reactAss37')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Form.Field>
                    <Form.Field>3.8 Safety Cover Installed</Form.Field>
                    <Radio
                        label={'Yes'}
                        name={'radio38'}
                        value={'Yes'}
                        checked={valPar38 === 'Yes'}
                        onChange={this.props.handleRadio('reactAss38')}
                    />
                    <Radio
                        label={'No'}
                        name={'radio38'}
                        value={'No'}
                        checked={valPar38 === 'No'}
                        onChange={this.props.handleRadio('reactAss38')}
                    />
                    <Radio
                        label={'N/A'}
                        name={'radio38'}
                        value={'N/A'}
                        checked={valPar38 === 'N/A'}
                        onChange={this.props.handleRadio('reactAss38')}
                    />
                </Form.Field>
                <div className = 'ui divider'></div>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default ReactorAssembly;