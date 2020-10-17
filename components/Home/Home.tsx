import React from 'react';

import { Layout, Row, Col } from 'antd';

import AddEntryDrawer from './../AddEntry';
import TableView from './../TableView';

import * as urls from './../../utils/urls';

interface IState {
    data: Array<any>
}

interface IProps {

}

export class Home extends React.Component<IProps, IState> {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
    }

    async componentDidMount(){
        // Make a fetch request here
        const res = await fetch(urls.ENTRIES_URL);
        const entries = await res.json();
        this.setState((prev) => ({
            ...prev,
            data: [
                ...entries.map(obj => ({
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
        const { Header, Content, Footer } = Layout;

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