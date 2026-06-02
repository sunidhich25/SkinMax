import "../styles/login.css";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();

    // Firebase Email Login Here Later
    console.log("Login Clicked");
  };

  const handleGoogleLogin = () => {
    // Firebase Google Login Here Later
    console.log("Google Login");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">
          <h1>SkinMax</h1>
          <p>AI SKINCARE RITUAL</p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>EMAIL ADDRESS</label>

            <input
              type="email"
              placeholder="name@example.com"
            />
          </div>

          <div className="input-group">

            <div className="password-row">
              <label>PASSWORD</label>

              <a href="#">
                Forgot Password?
              </a>
            </div>

            <input
              type="password"
              placeholder="••••••••"
            />

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            LOGIN
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button
          className="google-btn"
          onClick={handleGoogleLogin}
        >
          <span className="google-icon">
            G
          </span>

          Google Sign In
        </button>

        <p className="signup-text">
          Don't have an account?

          <span> Sign Up</span>
        </p>

      </div>

      <footer className="login-footer">

        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sustainability</a>
        </div>

        <p>
          © 2026 SkinMax. Premium AI Skincare.
        </p>

      </footer>

    </div>
  );
}