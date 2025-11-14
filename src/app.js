// Ứng dụng mẫu
function sum(a, b) {
  return a + b;
}

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  console.log(`App started on port ${PORT}. sum(1,2)=`, sum(1, 2));
  
  // Tạo HTTP server đơn giản cho Render
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>TestGit2 App Running!</h1><p>sum(1,2) = ' + sum(1, 2) + '</p>');
  });
  
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = { sum };