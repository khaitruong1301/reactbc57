/*
    Sau khi rcredux thi sẽ xoá 
    1/ export trên class
    2/ mapDispatchToProps dưới hàm mapStateToProps
    3/ xoá mapDispatchToProps trong connect
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import GioHangRedux from './GioHangRedux'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'

class BaiTapGioHangRedux extends Component {
  render() {
    return (
      <div className='container'>
        <GioHangRedux />
     
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(BaiTapGioHangRedux)