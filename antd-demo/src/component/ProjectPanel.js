import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProjectPanel.less';
import { Row, Col } from 'antd';

export default class ProjectPanel extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {

    return (

      <div className='container'  >
        {/* <div className='header'>
          <span >线网全景</span>
        </div> */}
        <Row style={{ height: '48px', borderBottom: '1px solid #17557F', alignContent:'center', paddingLeft:'18px', paddingRight:'18px'}}>
          <svg  t="1636106405250" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7201" width="16" height="16"><path d="M0.099987 455.792136v65.77165h86.379034v502.436214h277.934716V694.301856h300.191889v329.698144h274.805113v-497.136887h84.559265v-71.070977L512.034996 0.129983z" fill="#13FFF5" p-id="7202"></path></svg>
          <span style={{ margin: '0 16px', color: '#13FFF5'}}>线网全景</span>
        </Row>
          <Row>
            <Col span={8}>
              <ul>
                <li>坑口</li>
                <li>烈士陵园</li>
                <li>东山口</li>
              </ul>
            </Col>
            <Col span={8}>
              <ul>
                <li>一号线</li>
                <li>二号线</li>
                <li>三号线</li>
                <li>四号线</li>
              </ul>
            </Col>
            <Col span={8}>
              <ul>
                <li>西朗</li>
                <li>坑口</li>
                <li>花地湾</li>
                <li>芳村</li>
                <li>黄沙</li>
              </ul>
            </Col>

          </Row>
        
      </div>
    )
  }
}
