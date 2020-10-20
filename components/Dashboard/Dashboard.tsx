import React from 'react';
import Router from 'next/router'
import Cookies from 'js-cookie';

import { Row, Col, message } from 'antd';

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

        if(!Cookies.get("token")){
            Router.push("/login");
        }
        // console.log(Cookies.get("token"));
        // Make a fetch request here
        const res = await fetch(urls.ENTRIES_URL, {
            method: "POST",
            body: JSON.stringify({
                token: Cookies.get("token")
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const entries = await res.json();
        if(res.status !== 200){
            message.error(entries.message);
        }
        else{
            this.setState((prev) => ({
                ...prev,
                data: [
                    ...entries.data.map(obj => ({
                        ...obj,
                        applied_on: obj.applied_on.split("T")[0]
                    }))
                ]
            }))
        }
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