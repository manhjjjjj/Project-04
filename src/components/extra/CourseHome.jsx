import React from 'react'
import Carousels from '../tasks/Carousel'

export default function CourseHome() {
    return (
        <div style={{marginTop: '50px',}}>   
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '27px'}}>
                <h4>Những khóa học mới nhất</h4>
                <div>
                    Xem Tất Cả
                </div>
            </div>
            <Carousels />
        </div>
    )
}
