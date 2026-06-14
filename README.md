# Vertical Video Feed

Ứng dụng xem video dạng cuộn dọc, được xây dựng bằng Next.js, App Router, TypeScript và Tailwind CSS.

## Tính năng

- Video dạng dọc với CSS Scroll Snap
- Click video để Play/Pause
- Tự động phát và dừng video khi cuộn
- Like và cập nhật số lượt thích
- Thanh điều hướng responsive
- Giao diện mobile và desktop

## Auto-play khi cuộn

Mỗi `VideoCard` sử dụng `IntersectionObserver` để theo dõi mức độ xuất hiện của video trong viewport.

Khi ít nhất 75% video xuất hiện, ứng dụng gọi `video.play()`. Khi video bị cuộn khỏi vùng hiển thị, ứng dụng gọi `video.pause()`.

Video sử dụng thuộc tính `muted` và `playsInline` để hỗ trợ autoplay trên trình duyệt và thiết bị di động.

## Chạy project

```bash
npm install
npm run dev