import './Board.css'

const POSTS = [
  { id: 5, title: '공지사항: 서비스 이용 안내', author: '관리자', date: '2026-07-08', views: 128 },
  { id: 4, title: 'React + Vite 프로젝트 세팅 가이드', author: '홍길동', date: '2026-07-07', views: 87 },
  { id: 3, title: '디자인 시스템 토큰 정리', author: '김디자인', date: '2026-07-05', views: 54 },
  { id: 2, title: '게시판 UI 컴포넌트 리뷰 요청', author: '이개발', date: '2026-07-03', views: 41 },
  { id: 1, title: '첫 게시글입니다', author: '홍길동', date: '2026-07-01', views: 12 },
]

function Board() {
  return (
    <section className="board-section">
      <p className="board-eyebrow">BOARD</p>
      <h2 className="board-headline">게시판</h2>

      <div className="board-card">
        <table className="board-table">
          <thead>
            <tr>
              <th className="col-id">번호</th>
              <th className="col-title">제목</th>
              <th className="col-author">작성자</th>
              <th className="col-date">작성일</th>
              <th className="col-views">조회수</th>
            </tr>
          </thead>
          <tbody>
            {POSTS.map((post) => (
              <tr key={post.id}>
                <td className="col-id">{post.id}</td>
                <td className="col-title">{post.title}</td>
                <td className="col-author">{post.author}</td>
                <td className="col-date">{post.date}</td>
                <td className="col-views">{post.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Board
