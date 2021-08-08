import React from 'react';
import '../css/Header.css'
import {Input} from 'antd'
import {ShoppingCartOutlined} from '@ant-design/icons'
import {SearchOutlined } from '@ant-design/icons'
import {UserOutlined} from '@ant-design/icons'
import {AppstoreOutlined} from '@ant-design/icons';
const Header=()=>{
  const suffix = (
    <SearchOutlined />
  );
  
  return(
      <header>
      <nav>
          MART
          
          <a><AppstoreOutlined/>Home</a>
         
          <a>Shop</a>
          <a>About mart</a>
          <a>Contact us</a>
        
          <a><Input type="text" placeholder="Search.."style={{width:'15%'}} suffix={<SearchOutlined/>}></Input></a>
          
          <a><ShoppingCartOutlined />Cart</a>
          
          <a><UserOutlined />Profile</a>
        
      </nav>
      </header>
  )
}
export default Header;