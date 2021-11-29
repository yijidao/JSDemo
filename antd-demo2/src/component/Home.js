import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './Home.less';
import SwitchLinePanel from './SwitchLinePanel';
import EventStatistics from './EventStatistics';
import bg from '../image/bg.png';
import TestTs from './TestTs';

const { Header, Content, Footer, Sider } = Layout;

export default class Home extends Component {
  changeMenu(e) {

  }

  render() {
    return (

      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={(e) => this.changeMenu(e)}>
            <Menu.Item>
              <Link to='/switchLinePanel'>
                线路菜单
              </Link>
            </Menu.Item>
            <Menu.Item >
              <Link to='/eventStatistics'>
                事件统计
              </Link>
            </Menu.Item>
            <Menu.Item >
              <Link to='/TestTs'>
                TestTs
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{backgroundImage: `url(${bg})`}}>
          <Routes>
            <Route path='/switchLinePanel' element={<SwitchLinePanel />} />
            <Route path='/eventStatistics' element={<EventStatistics />} />
            
          </Routes>
        </Content>
      </Layout>

    )
  }
}
