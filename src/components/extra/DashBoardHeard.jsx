import React from 'react'

import { ReadOutlined, WalletOutlined, HistoryOutlined, ClockCircleOutlined, UnorderedListOutlined, SettingOutlined, LockOutlined, ScheduleOutlined, InsertRowBelowOutlined } from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
// import DashboardContent from '../tasks/DashboardContent';
// import MyCourseList from '../tasks/MyCourseList'
// import ExamHistory from '../tasks/ExamHistory';
// import PointHistory from '../tasks/PointHistory'
// import AssignmentList from '../tasks/AssignmentList'
import Account from '../tasks/Account'


const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Lộ trình của tôi', '1', <ReadOutlined />),
    getItem('Khóa học gần đây', '2', <WalletOutlined />),
    getItem('Lịch sử bài thi', '3', <HistoryOutlined />),
    getItem('Lịch sử điểm', '4', <ClockCircleOutlined />),
    getItem('Danh sách bài tập', '5', <UnorderedListOutlined />),
    getItem('Cài đặt', '6', <SettingOutlined />),
    getItem('Đổi mật khẩu', '7', <LockOutlined />),
    getItem('Điểm danh', '8', <ScheduleOutlined />),
    getItem('Thời khóa biểu', '9', <InsertRowBelowOutlined />),
];

export default function DashBoard() {
    
    return (
        <div>
            <Layout>
                <Sider breakpoint="lg" collapsedWidth="0">
                    <div className="logo" />
                    <Button
                        type="primary"  
                        
                        
                    >
                        {/* {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} */}
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        theme="dark"
                        
                        items={items}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, height: '60px' }} />
                    <Content style={{ margin: '34px 38px 0px', padding: '59px', }}>
                        <div style={{ minHeight: 360, background: '#f5f5f5', borderRadius: '30px' }}>
                            {/* <DashboardContent/> */}
                            {/* <MyCourseList/> */}
                            {/* <ExamHistory/> */}
                            {/* <PointHistory/> */}
                            {/* <AssignmentList/> */}
                            <Account/>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}
