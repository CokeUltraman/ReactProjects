import React, { Component } from 'react'
import {Button} from 'antd' ;
import 'antd/dist/antd.css'
export default class App extends Component {
    render() {
        return (
            <div>
                App...
                <button>touch me </button>
                <Button type='primary'>Primary Button</Button>
            </div>
        )
    }
}
