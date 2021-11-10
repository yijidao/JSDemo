import React, { Component } from 'react';
import { Select } from 'antd';
import './EventStatistics.less';

const Option = Select.Option;


export default class EventStatistics extends Component {

  

  render() {
    return (
      <div style={{ height: '100%', width: '100%',  padding:'16px 24px'}}>
        <div style={{ width: '100%', height: '32px' }} >
          
          <Select style={{ width: '176px' }}  >
            <Option value='warn' >预警信息</Option>
            <Option value='emergency' >应急信息</Option>
          </Select>
        </div>        
      </div>
    )
  }
}

