<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1">
  <title>Login</title>
  <link rel="stylesheet" href="/test/text.css">
  <script defer src="/test/test.js"></script>
</head>
<body>
  <div class="login-container">
    <h1>MyApp</h1>
    <h2>Login</h2>
    <form onsubmit="return loginUsuario(event)">
      <div class="input-group">
        <span class="icon">&#128100;</span>
        <input type="text" id="username" placeholder="Username" required>
      </div>

      <div class="input-group senha-grupo">
        <div class="senha-wrapper">
          <span class="icon">&#128274;</span>
          <input type="password" id="password" placeholder="Senha" required>
        </div>
        <button type="button" id="togglePassword">&#128065;</button>
      </div>

      <div class="options">
        <label><input type="checkbox" id="remember"> Remember me</label>
        <a href="#">Forgot password?</a>
      </div>

      <button class="login-btn" type="submit">Entrar</button>

      <div class="register">
        <p>Don’t have an account? <a href="#">Register</a></p>
        <p class="termos"><a href="#">Termos</a> • <a href="#">Ajuda</a></p>
      </div>
    </form>
  </div>
</body>
</html>
