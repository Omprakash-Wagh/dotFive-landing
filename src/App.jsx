import React, { useEffect } from 'react';
import './App.css';

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const TimerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const FilterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const BellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const DiscordLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6081 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
  </svg>
);

function App() {
  useEffect(() => {
    console.log("%cDude go play valorant no point inspecting", "font-size: 20px; font-weight: bold; color: #a855f7;");
    console.log("%cBuilt by me and two friends are trying to take credit - every 'group' project ever", "font-size: 16px; color: #3b82f6;");
    console.log("https://discord.gg/PpYB8W8Va join discord for free memes ... if you're into that kinda stuff");
  }, []);

  return (
    <>
      <header className="header fade-in">
        <div className="container header-content">
          <a href="#" className="brand">
            <img src="/favicon.png" alt="dotFive Logo" className="brand-logo" />
            dot<span>Five</span>
          </a>
          <a href="https://github.com/Omprakash-Wagh/dotFive-landing/releases/latest/download/dotFive.apk" className="btn-primary">
            <DownloadIcon /> Download .apk
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <h1 className="fade-in delay-1">LFG Made Simple.</h1>
              <p className="fade-in delay-2">
                A matchmaking utility for competitive shooters. Find players in your rank and queue up instantly.
              </p>
              <div className="hero-action fade-in delay-3">
                <a href="https://github.com/Omprakash-Wagh/dotFive-landing/releases/latest/download/dotFive.apk" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                  <DownloadIcon /> Download .apk
                </a>
                <span className="sub-text">Android only.</span>
              </div>
            </div>
            
            <div className="hero-visual">
              <img src="/Lobby-Create-Join.png" alt="dotFive Lobbies Index" className="mockup-img" />
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="features-grid">
              <div className="feature-card fade-in delay-1">
                <div className="feature-icon">
                  <TimerIcon />
                </div>
                <h3>Active Lobbies</h3>
                <p>
                  Lobbies include automated expiration timers to ensure all listed groups are currently active and seeking players.
                </p>
              </div>
              
              <div className="feature-card fade-in delay-2">
                <div className="feature-icon">
                  <FilterIcon />
                </div>
                <h3>Role & Rank Filtering</h3>
                <p>
                  Filter available lobbies by specific player ranks and in-game roles to meet your team requirements.
                </p>
              </div>
              
              <div className="feature-card fade-in delay-3">
                <div className="feature-icon">
                  <BellIcon />
                </div>
                <h3>Squad Notifications</h3>
                <p>
                  Receive standard push notifications for incoming friend requests and lobby invitations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flow">
          <div className="container">
            <h2 className="section-title fade-in">How It Works</h2>
            <div className="flow-steps">
              <div className="flow-step-item fade-in delay-1">
                <div className="flow-text">
                  <span className="step-num">01</span>
                  <h4>Connect Profile</h4>
                  <p>Create your gaming profile to verify your rank securely.</p>
                </div>
                <div className="flow-image">
                  <img src="/Login.jpg" alt="Login Page" />
                </div>
              </div>
              
              <div className="flow-step-item reverse fade-in delay-2">
                <div className="flow-text">
                  <span className="step-num">02</span>
                  <h4>Browse or Create</h4>
                  <p>Browse the active lobby index or create a new listing for your squad.</p>
                </div>
                <div className="flow-image">
                  <img src="/Lobby-Create-Join.png" alt="Lobby Index" />
                </div>
              </div>
              
              <div className="flow-step-item fade-in delay-3">
                <div className="flow-text">
                  <span className="step-num">03</span>
                  <h4>Queue Up</h4>
                  <p>Group with matched players in-game, monitor squad chat, and start playing immediately.</p>
                </div>
                <div className="flow-image">
                  <img src="/Lobby_Joined.png" alt="Lobby Joined" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-bottom">
          <div className="container">
            <h2 className="fade-in">Ready to queue?</h2>
            <div className="fade-in delay-1">
              <a href="https://github.com/Omprakash-Wagh/dotFive-landing/releases/latest/download/dotFive.apk" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                <DownloadIcon /> Download .apk
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <a href="https://omprakash-wagh.github.io/dotfive-legal/#privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <a href="https://omprakash-wagh.github.io/dotfive-legal/#terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
              <a href="https://omprakash-wagh.github.io/dotfive-legal/#eula" target="_blank" rel="noopener noreferrer">EULA</a>
            </div>
            <div className="social-links">
              <a href="https://discord.gg/PpYB8W8Va" target="_blank" rel="noopener noreferrer" aria-label="Discord" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <DiscordLogo /> Discord
              </a>
            </div>
          </div>
          <div className="footer-disclaimer">
            dotFive is an independent application and is not affiliated with Riot Games.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
