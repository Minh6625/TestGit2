# CI/CD với GitHub Actions

Tài liệu này mô tả pipeline đã được thiết lập và cách cấu hình Secrets để triển khai + thông báo.

## Workflow: `.github/workflows/main.yml`

- Kích hoạt khi push vào `main`, `development` và khi tạo PR vào `main`.
- Job `build-and-test` chạy song song trên ma trận Node.js: 16, 18, 20.
  - Cache npm, cài dependencies (`npm ci` nếu có lockfile, fallback `npm install`).
  - Chạy Jest với coverage và xuất báo cáo JUnit (`test-results/junit.xml`).
  - Upload artifact: JUnit và coverage mỗi bản Node.
- Job `deploy` (chỉ chạy trên nhánh `main`):
  - Build và triển khai Heroku nếu có đủ Secrets.
  - Tuỳ chọn: triển khai server riêng qua SSH nếu đặt biến `DEPLOY_TARGET=custom` (Repository Variables) và cung cấp Secrets SSH.
- Job `notify`: gửi email kết quả (thành công/thất bại), luôn chạy sau build/test và deploy.

## Secrets/Variables cần cấu hình

### Deploy lên Render (Miễn phí - Khuyên dùng)

**Bước 1: Tạo tài khoản và Web Service**

1. Đăng ký tại: https://render.com (dùng GitHub login)
2. New + → Web Service → Chọn repo `TestGit2`
3. Cấu hình:
   - Name: `testgit2-app`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: **Free**
4. Create Web Service

**Bước 2: Lấy Deploy Hook**

1. Vào Settings của service vừa tạo
2. Phần Deploy Hook → Create Deploy Hook
3. Copy URL deploy hook

**Bước 3: Thêm secret vào GitHub**

- Secret name: `RENDER_DEPLOY_HOOK`
- Value: URL deploy hook từ Render

### Email thông báo (SMTP)

- `SMTP_SERVER` (ví dụ: `smtp.gmail.com`)
- `SMTP_PORT` (ví dụ: `465`)
- `SMTP_USERNAME`
- `SMTP_PASSWORD`
- `NOTIFY_TO_EMAIL`
- `NOTIFY_FROM_EMAIL`

Cách thêm Secrets/Variables: Settings > Secrets and variables > Actions.

## Scripts npm

- `npm test`: chạy Jest, sinh coverage + báo cáo JUnit theo `jest.config.cjs`.
- `npm run build`: placeholder (có thể thay bằng build thực tế của app).
- `npm start`: chạy ứng dụng mẫu.

## Báo cáo thử nghiệm

- JUnit: `test-results/junit.xml` (được upload thành artifact theo mỗi phiên bản Node).
- Coverage: thư mục `coverage/` (cũng được upload thành artifact).

## Gợi ý mở rộng

- Bật status checks bắt buộc với branch protection cho `main`.
- Thêm badge CI vào README.
- Tích hợp thông báo Slack/Discord thay cho email nếu cần.
