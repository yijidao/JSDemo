import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SwitchLinePanel.less';
import { Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import { HomeSvg, StarSvg, UnStarSvg } from './Svg.js';

export default class SwitchLinePanel extends Component {

  state = {
    lines: [],
    stations: [],
    starStations: []
  };

  componentDidMount() {
    let lines = [], stationId = 0;

    for (let i = 1;i <= 18;i++) {
      let stations = [];
      for (let j = 1;j <= 15;j++) {
        stations.push({
          id: ++stationId,
          lineId: i,
          name: `${i}号线_${j}站`,
          star: false
        })
      }

      lines.push(
        {
          id: i,
          name: `${i}号线`,
          selected: i === 1,
          stations: stations
        });
    }

    this.setState({
      lines: lines,
      stations: lines.filter(x => x.selected)[0].stations
    });

  }

  componentWillUnmount() {

  }

  changeSelected = (id, e) => {
    let lines = this.state.lines.map(x => x.id === id ? { ...x, selected: true } : { ...x, selected: false });
    this.setState({
      lines: lines,
      stations: lines.filter(x => x.selected)[0].stations
    });
  }

  star = (id, e) => {
    let lines = this.state.lines;
    lines.find(x => x.selected).stations.find(x => x.id === id).star = true;
    
    let star = lines.flatMap(x => x.stations).filter(x => x.star);
    this.setState({
      lines: lines,
      starStations: star
    });

  }

  unstarById = (id, e) => {
    let lines = this.state.lines;
    lines.find(x => x.selected).stations.find(x => x.id === id).star = false;
    let star = lines.flatMap(x => x.stations).filter(x => x.star);
    this.setState({
      lines: lines,
      starStations: star
    });
  }

  unstar2ByStation = (station, e) =>{
    let lines = this.state.lines;
    // debugger
    lines.find(x => x.id === station.lineId).stations.find(x => x.id === station.id).star = false;
    let star = lines.flatMap(x => x.stations).filter(x => x.star);

    this.setState({
      lines: lines,
      starStations: star
    });

  }

  render() {
    let lines, star = [];
    if (this.state.lines) {
      lines = this.state.lines;
    }


    if (this.state.starStations) {
      star = this.state.starStations;

    }

    return (
      <div className='container'  >
        <Row style={{ height: '48px', borderBottom: '1px solid #17557F', alignContent: 'center', paddingLeft: '18px', paddingRight: '18px' }}>
          <Icon component={HomeSvg} style={{ height: '16px', width: '16px', color: '#13FFF5', alignSelf: 'center' }} />
          <span style={{ margin: '0 16px', color: '#13FFF5' }}>线网全景</span>
        </Row>
        <Row>
          <Col span={8} style={{ borderRight: '1px solid #17557F' }}>
            <ul>
              {star.map(x =>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '32px', paddingRight: '16px' }} >
                  {x.name}
                  <Icon component={StarSvg} style={{ height: '16px', width: '16px', color: '#F8E71C' }} onClick={(e) => this.unstar2ByStation(x, e)} />
                </li>
              )}
            </ul>
          </Col>
          <Col span={8} >
            <ul>
              {lines.map(x => <li onClick={(e) => this.changeSelected(x.id, e)} className={x.selected ? 'selected' : ''}>{x.name}</li>)}
            </ul>
          </Col>
          <Col span={8} >
            <ul>
              {this.state.lines.find(x => x.selected)?.stations.map(x =>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '32px', paddingRight: '16px' }} >
                  {x.name}

                  {x.star ?
                    <Icon component={StarSvg} style={{ height: '16px', width: '16px', color: '#F8E71C' }} onClick={(e) => this.unstarById(x.id, e)} />
                    : <Icon className='unStarIcon' component={UnStarSvg} onClick={(e) => this.star(x.id, e)} />}
                </li>)}
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}
