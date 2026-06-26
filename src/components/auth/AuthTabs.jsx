import React from 'react'

export default function AuthTabs({activeTab, onSwitch}) {

  return (
    <div className='tab-switcher'>
        <button
            className={`tab-btn ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => onSwitch("signup")}
            >
                Create Account
            </button>
            <button
            className={`tab-btn${activeTab === "login" ? "active" : ""}`}
            onClick={() => onSwitch("login")}>
                Log in
            </button>
    </div>
  )
}
