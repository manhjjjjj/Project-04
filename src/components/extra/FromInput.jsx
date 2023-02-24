import React from 'react'
import CheckBox from '../extra/CheckBox'

export default function FromInput() {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <span>*</span>
                        <p>Họ và tên</p>
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <div>
                        <p>Địa Chỉ</p>
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <div>
                        <p>Ngày sinh</p>
                    </div>
                    <div>
                        <input type='text'  />
                    </div>
                </div>
                <CheckBox />
            </div>
            <div>
                <div>
                    <div>
                        <p>Trường học</p>
                    </div>
                    <div>
                        <input type='text'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
