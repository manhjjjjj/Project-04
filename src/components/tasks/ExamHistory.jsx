import React from 'react'
import { Table, Divider } from 'antd';


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
  ];

export default function ExamHistory() {
    return (
        <div>
            <div className='route-search'>
                <h2>
                    Lịch Sử Bài Thi
                </h2>
                <div className='div-search'>
                    <input type="text" placeholder='Search' style={{ backgroundColor: '#f5f5f5' }} />
                    <button><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div>
                <Divider>Middle size table</Divider>
                <Table columns={columns} dataSource={data} size="middle" />
            </div>
        </div>
    )
}
