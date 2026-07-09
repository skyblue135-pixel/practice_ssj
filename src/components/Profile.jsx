import './Profile.css'

function Profile() {
  return (
    <section className="profile-section">
      <p className="profile-eyebrow">PROFILE</p>

      <div className="profile-card">
        <div className="profile-avatar" aria-hidden="true">홍</div>
        <div className="profile-info">
          <p className="profile-name">홍길동</p>
          <p className="profile-detail">010-1234-5678</p>
          <p className="profile-detail">abcd@abcd.com</p>
        </div>
      </div>
    </section>
  )
}

export default Profile
