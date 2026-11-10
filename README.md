# Đại Thiên Tông — Nghe Truyện Audio

App web nghe truyện bằng giọng đọc của máy (Text-to-Speech của trình duyệt), chạy tĩnh trên GitHub Pages — không cần server, không sợ bị treo như Render.

## Cách dùng
- **Thư viện**: chọn truyện → chọn chương → app tự đọc, đọc hết chương tự sang chương sau. Nghe dở thì lần sau mở lại, app nhớ vị trí tới từng câu.
- **Dán truyện**: dán nội dung bất kỳ chương truyện nào (hoặc mở file .txt từ máy) → bấm "Nghe ngay".
- Thanh nghe: play/dừng, lùi/tới 1 câu, chuyển chương, hẹn giờ tắt (15–60 phút), chọn giọng (ưu tiên giọng tiếng Việt), chỉnh tốc độ 0.7×–1.6×.
- Trên điện thoại: mở link app bằng Chrome → menu ⋮ → "Thêm vào màn hình chính" để dùng như app thật.

## Thêm truyện mới
1. Bỏ file chương vào `truyen/<ten-truyen>/chuong-N.txt`.
2. Thêm truyện vào `books.json` (id, title, author, danh sách chapters trỏ tới file).
3. Đẩy lên GitHub — Pages tự cập nhật sau ~1 phút.

Giọng đọc dùng giọng TTS có sẵn trong máy người nghe (Android: Google Text-to-Speech tiếng Việt; iPhone: giọng tiếng Việt trong Cài đặt → Trợ năng → Nội dung được nói).
