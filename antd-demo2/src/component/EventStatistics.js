import React, { Component } from 'react';
import { Select } from 'antd';
import './EventStatistics.less';
import { DownOutlined } from '@ant-design/icons';


const Option = Select.Option;


export default class EventStatistics extends Component {

  constructor() {
    super();
    this.status = {
      drapdown: false
    }
  }


  changeDrapdownClass(e) {
    this.setState({ drapdown: !this.state?.drapdown })
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%', padding: '16px 24px' }}>
        <div style={{ width: '100%', height: '32px' }} >
          <Select style={{ width: '176px' }}  >
            <Option value='warn' >预警信息</Option>
            <Option value='emergency' >应急信息</Option>
          </Select>
        </div>

        <div style={{ width: '200px', height: '36px', border: '1px solid lightgray', marginTop: '24px', justifyContent: 'space-between', display: 'flex', position: 'relative' }}>
          <div style={{ width: '80%', background: 'green', height: '100%', display: 'inline-block' }}></div>
          {/**/}
          <div onClick={e => this.changeDrapdownClass(e)} style={{ width: '20%', background: 'lightgreen', height: '100%', marginTop: '0px', display: 'flex', alignItems: 'center' }}>
            <DownOutlined style={{ color: '#ffffff', width: '16px', height: '16px', margin: 'auto' }} />
          </div>
          <div className={this.state?.drapdown ? 'test enter' : 'test leave'} style={{ width: '100%', height: '280px', border: '1px solid gray', background: 'gray', position: 'absolute', top: '100%', marginTop: '8px', zIndex: '99' }}></div>
        </div>


      </div>
    )
  }
}

