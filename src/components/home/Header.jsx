
import React, { Component } from 'react';


class Header extends Component {
    render() {

        return (
            <div className='header'>
                <div className='header-imagebackground'><img src='https://transvelo.github.io/skola-html/5.1/assets/img/illustrations/illustration-7.svg' alt='' /></div>
                <div className='header-tite'>
                    <div className='ant-col home-page-header ant-col-xs-24 ant-col-sm-12'>
                        <div className='title-content'>
                            <div className='content-cus1'>Tìm khoá học <span>phù hợp</span></div>
                            <div className='content-cus2'>LỰA CHỌN KHÓA HỌC YÊU THÍCH, <br/> CÙNG NHAU HỌC TẬP, NÂNG CAO TRÌNH ĐỘ <br/> </div>
                        </div>
                        <div className='title-input'>
                            <input type="text" placeholder='Bạn muốn học gì hôm nay?'/>
                            <button><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                    <div className='ant-col home-page-img-wrap ant-col-xs-24 ant-col-sm-12'>
                        <img className='home-page-content-img' src="https://transvelo.github.io/skola-html/5.1/assets/img/illustrations/illustration-5.png" alt="hình ảnh" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;