import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProjectPanel.less';
import { Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import { HomeSvg, StarSvg, UnStarSvg } from './Svg.js';

export default class ProjectPanel extends Component {

  state = {
    lines: []
  };

  componentDidMount() {
    let lines = [];
    for (let i = 1;i <= 18;i++) {
      let stations = [];
      for (let j = 1;j <= 15;j++) {
        stations.push({
          id: j,
          name: `${i}号线_${j}站`,
        })
      }

      lines.push(
        {
          id: i,
          name: `${i}号线`,
          selected: false,
          stations: stations
        });
    }

    this.setState({ lines: lines });
  }

  componentWillUnmount() {

  }

  changeSelected = (id, e) => {
    let lines2 = this.state.lines.map(x => x.id === id ? { ...x, selected: true } : { ...x, selected: false });
    this.setState({ lines: lines2 });
  }


  render() {
    let lines = this.state.lines;
    let selectedLine = lines.filter(x => x.selected)[0];
    let stations = selectedLine ? selectedLine.stations : [];

    return (
      <div className='container'  >
        <Row style={{ height: '48px', borderBottom: '1px solid #17557F', alignContent: 'center', paddingLeft: '18px', paddingRight: '18px' }}>
          <Icon component={HomeSvg} style={{ height: '16px', width: '16px', color: '#13FFF5', alignSelf: 'center' }} />
          <span style={{ margin: '0 16px', color: '#13FFF5' }}>线网全景</span>
        </Row>
        <Row>
          <Col span={8} style={{ borderRight: '1px solid #17557F' }}>
            <ul>
              <li>坑口</li>
              <li>烈士陵园</li>
              <li>东山口</li>
            </ul>
          </Col>
          <Col span={8} >
            <ul>
              {lines.map(x => <li onClick={(e) => this.changeSelected(x.id, e)} className={x.selected ? 'selected' : ''}>{x.name}</li>)}
            </ul>
          </Col>
          <Col span={8} >
            <ul>
              {stations.map(x =>
                <li >
                  {x.name}
                  {/* <Icon component={UnStarSvg} style={{ height: '16px', width: '16px',alignSelf: 'center', justifySelf:'left' }} /> */}
                  

                  {/* <div className='station'  >
                    <div style={{height: '16px', width:'16px', background: 'lightgray', alignSelf: 'right'}}></div>
                    {/* <span>{x.name}</span> */}
                    
                  {/* </div>  */}
                  */}
                  {/* <Icon component={UnStarSvg} style={{ height: '16px', width: '16px', marginRight: '8px'}} /> */ }
                </li>)}
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}
