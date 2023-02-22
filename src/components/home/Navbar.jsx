import React from 'react';


function Navbar() {
    return (
        <>
            <header className='navbar'>
                <div className='nb-logopage'>
                    <img src='img/logo-Rikkei-footer.7e90750a.png' alt='' />
                </div>
                <div className='nb-pages'>
                    <a className='pagess' href='/'>
                        <i class="fa-solid fa-house"></i>
                        <p>Trang chủ</p>
                    </a>
                    <a className='pagess' href='/roadmap-list'>
                        <i class="fa-solid fa-book"></i>
                        <p>Lộ trình</p>
                    </a>
                    <a className='pagess' href='/course-list'>
                        <i class="fa-solid fa-book-open"></i>
                        <p>Khóa học</p>
                    </a>
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

