
  
  const loginBtn = document.getElementById('login-btn');
  const loginForm = document.getElementById('login-form');
  const closeLoginForm = document.getElementById('close-login-form');

  
  loginBtn.addEventListener('click', () => {
    loginForm.style.display = 'block'; 
  });

  
  closeLoginForm.addEventListener('click', () => {
    loginForm.style.display = 'none';
  });

