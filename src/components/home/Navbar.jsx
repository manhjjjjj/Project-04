import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <>
            <header className='navbar'>
                <Link to={"/"}>
                    <div className='nb-logopage'>
                        <img src='img/logo-Rikkei-footer.7e90750a.png' alt='' />
                    </div>
                </Link>
                <div className='nb-pages'>
                    <Link to={'/'} className='pagess'>
                        <i class="fa-solid fa-house"></i>
                        <p>Trang chủ</p>
                    </Link>
                    <Link to={'/roadmap-list'} className='pagess'>
                        <i class="fa-solid fa-book"></i>
                        <p>Lộ trình</p>
                    </Link>
                    <Link to={'/course-list'} className='pagess'>
                        <i class="fa-solid fa-book-open"></i>
                        <p>Khóa học</p>
                    </Link>
                </div>
                <div className='nb-logReg'>
                    <div className='from-login'>Đăng kí</div>
                    <div className='from-register'>Đăng nhập</div>
                </div>
            </header>
        </>
    );
}

export default Navbar;

