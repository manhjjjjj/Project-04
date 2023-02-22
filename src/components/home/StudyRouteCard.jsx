import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function StudyRouteCard() {
    return (
        <div style={{ margin: '130px 100px 100px 100px' }}>
            <div className='pageName'>
                <h1>
                    Lộ trình
                </h1>
                <p>
                    <a>
                        Trang chủ
                    </a>
                    /
                    <span>
                        lộ trình
                    </span>
                </p>
            </div>
            <div className='titel-item'>
                <div className='titel-route'>
                    <span>Rikkei Academy</span>
                    <p>có sẵn</p>
                    <span style={{ textDecoration: 'underline' }}>12 lộ trình</span>
                    <p>cho bạn</p>
                </div>
                <div className='ip-bt'>
                    <input type="text" placeholder='Tìm kiếm khóa học ' />
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <CardGroup style={{ width: '100%', margin: '10px' }}>
                <Card style={{ margin: '10px', padding:'7px', border:'1px solid rgba(0, 0, 0, 0.267)', borderRadius: '7px', boxShadow: '2px 3px 4px -3px' }}>
                    <Card.Img variant="top" src="../img/ảnh 1.jpg" />
                    <Card.Body >
                        <Card.Title>Web Fullstack Java (Beta)</Card.Title>
                        <Card.Text className='cards-text'>
                            Chương trình đào tạo Lập trình Web Full-stack dành cho những ai muốn tạo dựng sự nghiệp trong lĩnh vực phát triển ứng dụng Web. Trở thành lập trình viên chuyên nghiệp, làm chủ một ngôn ngữ lập trình, có khả năng đảm nhiệm vị trí lập trình viên full-stack, back-end, front-end tại doanh nghiệp.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{backgroundColor:'#ffff'}}>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card style={{ margin: '10px', padding:'7px', border:'1px solid rgba(0, 0, 0, 0.267)', borderRadius: '7px', boxShadow: '2px 3px 4px -3px' }}>
                    <Card.Img variant="top" src="../img/ảnh 1.jpg" />
                    <Card.Body >
                        <Card.Title>Web Fullstack Java (Beta)</Card.Title>
                        <Card.Text className='cards-text'>
                            Chương trình đào tạo Lập trình Web Full-stack dành cho những ai muốn tạo dựng sự nghiệp trong lĩnh vực phát triển ứng dụng Web. Trở thành lập trình viên chuyên nghiệp, làm chủ một ngôn ngữ lập trình, có khả năng đảm nhiệm vị trí lập trình viên full-stack, back-end, front-end tại doanh nghiệp.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{backgroundColor:'#ffff'}}>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card style={{ margin: '10px', padding:'7px', border:'1px solid rgba(0, 0, 0, 0.267)', borderRadius: '7px', boxShadow: '2px 3px 4px -3px' }}>
                    <Card.Img variant="top" src="../img/ảnh 1.jpg" />
                    <Card.Body >
                        <Card.Title>Web Fullstack Java (Beta)</Card.Title>
                        <Card.Text className='cards-text'>
                            Chương trình đào tạo Lập trình Web Full-stack dành cho những ai muốn tạo dựng sự nghiệp trong lĩnh vực phát triển ứng dụng Web. Trở thành lập trình viên chuyên nghiệp, làm chủ một ngôn ngữ lập trình, có khả năng đảm nhiệm vị trí lập trình viên full-stack, back-end, front-end tại doanh nghiệp.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{backgroundColor:'#ffff'}}>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card style={{ margin: '10px', padding:'7px', border:'1px solid rgba(0, 0, 0, 0.267)', borderRadius: '7px', boxShadow: '2px 3px 4px -3px' }}>
                    <Card.Img variant="top" src="../img/ảnh 1.jpg" />
                    <Card.Body >
                        <Card.Title>Web Fullstack Java (Beta)</Card.Title>
                        <Card.Text className='cards-text'>
                            Chương trình đào tạo Lập trình Web Full-stack dành cho những ai muốn tạo dựng sự nghiệp trong lĩnh vực phát triển ứng dụng Web. Trở thành lập trình viên chuyên nghiệp, làm chủ một ngôn ngữ lập trình, có khả năng đảm nhiệm vị trí lập trình viên full-stack, back-end, front-end tại doanh nghiệp.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{backgroundColor:'#ffff'}}>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
          
            </CardGroup>
        </div>
    );
}

export default StudyRouteCard;