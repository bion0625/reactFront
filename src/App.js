import './App.css';

function App() {
  return (
    <div className="login">
      <main className="login-container">
        <form className='login-form'>
          <h4>로그인</h4>
          <input placeholder='아이디' className='login-input'/>
          <input placeholder='비밀번호' className='login-input'/>
          <div className='login-button-container'>
            <button className='login-button'>로그인</button>
            <button className='login-button'>가입</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
