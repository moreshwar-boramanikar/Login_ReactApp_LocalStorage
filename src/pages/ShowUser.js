import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Table, Button } from 'antd';

const columns = [{
    title: 'First Name',
    dataIndex: 'firstname',
  }, {
    title: 'Last Name',
    dataIndex: 'lastname',
  }, {
    title: 'User Name',
    dataIndex: 'username',
  }];

  const userData = [];
    Object.values(localStorage).map((loc,i)=>{
        if(JSON.parse(localStorage.getItem('saveData'+i)) !== null){
            // console.log('c-->',loc+"-->",i+"-->",JSON.parse(loc)['username']);
            userData.push({
                key: i,
                firstname: JSON.parse(loc)['firstname'],
                lastname: JSON.parse(loc)['lastname'],
                username: JSON.parse(loc)['username']
            });

        }
    })

class NewUser extends Component {
    
  render() {
    return (
        <div>
            <h1 style={{ width:"350px",margin:'auto', marginTop: "30px"}}> List of Users</h1>
            <Table columns={columns} dataSource={userData} size="middle"/>
            <Button type="primary">
                <Link to="/">Back</Link>
            </Button>
        </div>
    );
  }
}

export default NewUser;
