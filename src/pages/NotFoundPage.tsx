import React from 'react'
import { NavLink } from 'react-router-dom'
import SeoHead from '@components/common/SeoHead/SeoHead'

const NotFoundPage: React.FC = () => {
  
  return (
    <>
      <SeoHead
        pageKey='404'
      />
      
      <div className="page-404">
        <div className="error-container">
          <div className="error-content">
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Page Not Found</h2>
            <p className="error-message">
              Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
            </p>
            <div className="error-actions">
              <NavLink to="/" className="btn-primary">
                Về Trang Chủ
              </NavLink>
              <button onClick={() => window.history.back()} className="btn-secondary">
                Quay Lại
              </button>
            </div>
          </div>
          <div className="error-illustration">
            <div className="illustration-404">
              <span>🔍</span>
              <span>❓</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage