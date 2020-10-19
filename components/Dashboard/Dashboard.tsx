import React from 'react';

import { Row, Col } from 'antd';

import AddEntryDrawer from '../AddEntry';
import TableView from '../TableView';

import * as urls from '../../utils/urls';

interface IState {
    data: Array<any>,
}

interface IProps {

}

export class Dashboard extends React.Component<IProps, IState> {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
    }

    async componentDidMount(){
        // Make a fetch request here
        const res = await fetch(urls.ENTRIES_URL, {
            method: "POST"
        });
        if(res.status !== 200){
            
        }
        const entries = await res.json();
        console.log(entries, res.status);
        this.setState((prev) => ({
            ...prev,
            data: [
                ...entries.data.map(obj => ({
                    ...obj,
                    role: obj.name
                }))
            ]
        }))
    }

    addData = (company_name, role, applied_on, stage) => {
        this.setState((prev) => ({
            ...prev,
            data: [
                ...prev.data,
                {
                    company_name,
                    role,
                    applied_on,
                    stage
                }
            ]
        }))
    }

    render(){

        return (
            <Row justify="center">
                <Col span={20} className="application-head">
                        <span id="application-head-title">Your Saved Applications</span>
                        <AddEntryDrawer addData={this.addData}/>
                </Col>
                <Col span={20} style={{margin: "0 auto"}}>
                    <TableView data = {this.state.data}/>
                </Col>
            </Row>
        )
    }
}