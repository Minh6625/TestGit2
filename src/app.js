// Ứng dụng mẫu
function sum(a, b) {
  return a + b;
}

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  console.log(`App started on port ${PORT}. sum(1,2)=`, sum(1, 2));
  
  // Tạo HTTP server với HTML đẹp hơn
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TestGit2 - CI/CD Demo</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            padding: 40px;
            max-width: 600px;
            width: 100%;
            animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        h1 {
            color: #667eea;
            margin-bottom: 10px;
            font-size: 2.5em;
            text-align: center;
        }
        .subtitle {
            text-align: center;
            color: #666;
            margin-bottom: 30px;
            font-size: 1.1em;
        }
        .badge {
            display: inline-block;
            background: #10b981;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9em;
            margin: 5px;
        }
        .badges {
            text-align: center;
            margin: 20px 0;
        }
        .feature {
            background: #f3f4f6;
            padding: 15px;
            border-radius: 10px;
            margin: 10px 0;
            border-left: 4px solid #667eea;
        }
        .feature h3 {
            color: #333;
            margin-bottom: 5px;
        }
        .feature p {
            color: #666;
            font-size: 0.95em;
        }
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        .stat {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        .stat-number {
            font-size: 2em;
            font-weight: bold;
        }
        .stat-label {
            font-size: 0.9em;
            opacity: 0.9;
        }
        footer {
            text-align: center;
            margin-top: 30px;
            color: #999;
            font-size: 0.9em;
        }
        a {
            color: #667eea;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 TestGit2</h1>
        <p class="subtitle">CI/CD Pipeline Demo với GitHub Actions & Render</p>
        
        <div class="badges">
            <span class="badge">✅ Tests Passed</span>
            <span class="badge">🚀 Auto Deploy</span>
            <span class="badge">📊 Coverage Reports</span>
        </div>

        <div class="feature">
            <h3>🔄 Continuous Integration</h3>
            <p>Tự động chạy test với Jest trên Node.js 18 & 20</p>
        </div>

        <div class="feature">
            <h3>🚢 Continuous Deployment</h3>
            <p>Deploy tự động lên Render khi push vào main branch</p>
        </div>

        <div class="feature">
            <h3>📧 Email Notifications</h3>
            <p>Gửi email thông báo kết quả CI/CD qua Gmail SMTP</p>
        </div>

        <div class="feature">
            <h3>📈 Test Reports</h3>
            <p>Tạo báo cáo JUnit & Coverage tự động</p>
        </div>

        <div class="stats">
            <div class="stat">
                <div class="stat-number">${sum(1, 2)}</div>
                <div class="stat-label">sum(1, 2)</div>
            </div>
            <div class="stat">
                <div class="stat-number">2</div>
                <div class="stat-label">Node Versions</div>
            </div>
            <div class="stat">
                <div class="stat-number">100%</div>
                <div class="stat-label">Test Coverage</div>
            </div>
        </div>

        <footer>
            Made with ❤️ using <a href="https://github.com/Minh6625/TestGit2" target="_blank">GitHub Actions</a> & <a href="https://render.com" target="_blank">Render</a>
            <br><small>Port: ${PORT}</small>
        </footer>
    </div>
</body>
</html>
    `);
  });
  
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = { sum };