# 🌅 Golden Hour Bloom — Thiệp Hoa Nghệ Thuật 20/10

> *“Một chút nắng chiều, một vườn hoa nhỏ và những lời chúc dành riêng cho bạn.”*

Website thiệp hoa kỹ thuật số nghệ thuật mừng ngày Phụ nữ Việt Nam 20/10, được thiết kế và chế tác riêng dành tặng cho **Mai Thủy Tiên**. 

Sản phẩm kết hợp giữa phong cách **Editorial Floral** và **Golden Hour Photography**, tái hiện không gian một studio hoa vào cuối buổi chiều: ánh nắng vàng dịu chiếu xiên qua từng cánh hoa, những nhành hoa được cắm có chủ đích, cánh hoa trôi nhẹ trong gió và một tấm thiệp giấy mỹ thuật cao cấp ở trung tâm.

---

## ✨ Điểm Nhấn Nghệ Thuật & Công Nghệ

### 1. Trải nghiệm 3 giai đoạn (Emotional Journey)
- **Giai đoạn A — The Invitation**: Phong bì giấy mỹ thuật tông kem `Warm Ivory` đóng kín với con dấu sáp vàng kim dập nổi chữ *T*. Nút "Mở thiệp" kích hoạt hoạt cảnh mở nắp 3D chân thực, thiệp nhô lên và chuyển đổi ánh sáng hoàng hôn bừng sáng.
- **Giai đoạn B — The Golden Hour Garden**: Khu vườn hoàng hôn ngập tràn hoa đa tầng (*Back*, *Mid*, *Front*). Bầu trời chuyển sắc từ kem sáng sang peach và lavender dịu êm, quầng sáng thái dương thở nhẹ, vệt nắng xiên và bóng silhouette thảo mộc xa xăm.
- **Giai đoạn C — The Personal Card**: Tấm thiệp giấy mỹ thuật nằm giữa khu vườn với viền dát vàng 4 góc, hiệu ứng máy ảnh cổ điển gợi nhớ sở thích chụp ảnh hoàng hôn của Tiên, cùng thông điệp cốt lõi:
  > **“Chúc bạn luôn xinh đẹp, vui tươi, trẻ mãi không già.”**

### 2. Thư viện các loài hoa SVG vẽ độc quyền (Không dùng emoji làm hoa chính)
- 🪻 **Hydrangea (Hoa Cẩm Tú Cầu Xanh Dương)**: Chùm hoa quả cầu tròn đầy gồm nhiều cánh hoa xanh ngọc / periwinkle (*Hydrangea Blue*) đón nắng hoàng hôn.
- 🌼 **Narcissus (Hoa Thủy Tiên - Mang tên bạn Mai Thủy Tiên)**: 6 cánh hoa trắng ngà ngọc trai cùng cốc nhụy hoa vương miện (*Corona*) vàng cam rực rỡ, lá dẹt thanh khiết.
- 🌷 **Tulip**: Thân dài thanh thoát, cánh hoa ôm hình ly xếp lớp mềm mại với các sắc thái *Blush Pink*, *Champagne*, *Peach*, *Mauve*.
- 🌹 **Rose (Hoa Hồng Đa Tầng)**: Đóa hoa hồng nhiều tầng cánh nở rộ tự nhiên, thân gai nhỏ và lá thảo mộc với các tông màu hồng phấn, đào, hồng tro.
- 🌼 **Daisy (Cúc Họa Mi)**: 16 cánh hoa trắng/kem tỏa tròn quanh nhụy hoa vàng ấm có kết cấu phấn hoa.
- 🌸 **Cherry Blossom**: Cánh hoa anh đào 5 cánh chẻ ngọn tinh tế, nhụy chỉ đỏ đầu hạt phấn vàng.
- ✨ **Fantasy Flower**: Đóa hoa cách điệu ánh sáng hoàng hôn lung linh, được sử dụng tiết chế và tao nhã.

### 3. Tương tác & Âm thanh
- **Acoustic Piano Hoàng Hôn**: Kích hoạt tức thì ngay khi nhấn nút "Mở thiệp" hoặc nút âm nhạc. Chơi chuỗi hợp âm *Cmaj9 - Am9 - Fmaj7 - G6* ấm áp, có nốt bass trầm sâu lắng và các nốt rải ngón ngân vang du dương.
- **Clickable Flowers**: Các bông hoa có chấm sáng có thể click/tap để nở lớn nhẹ kèm hiệu ứng sparkle và hiện lên lời chúc nhỏ dịu dàng.
- **Falling Petals**: Cánh hoa rơi bồng bềnh uốn lượn theo gió với CSS 3D keyframes, tự động tắt khi người dùng bật `prefers-reduced-motion`.
- **Typewriter Text**: Dòng đề từ ngắn tự động gõ chữ và dừng lại gọn gàng, nội dung gốc luôn sẵn sàng trong DOM cho công nghệ đọc màn hình.

---

## 🛠️ Công Nghệ Sử Dụng

- **React 19 + TypeScript (Strict Mode)**
- **Vite 8**
- **Web Audio API** (Acoustic Piano Lofi Synthesis)
- **Vanilla CSS Tokens & Modern CSS Animations**
- **Google Fonts**: Cormorant Garamond, Playfair Display, Great Vibes & Be Vietnam Pro
- **Oxlint & TypeScript Compiler** (0 warning, 0 error)

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Local

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy môi trường phát triển (Dev Server)
```bash
npm run dev
```
Mở trình duyệt tại đường link hiển thị (ví dụ: `http://localhost:5173/` hoặc `http://localhost:5174/`).

### 3. Build bản Production
```bash
npm run build
```

---

## ☁️ Hướng Dẫn Triển Khai (Deploy) Lên Vercel

1. Đưa mã nguồn lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Golden Hour Bloom for Mai Thuy Tien"
   git branch -M main
   git remote add origin https://github.com/<your-username>/golden-hour-bloom.git
   git push -u origin main
   ```
2. Đăng nhập vào [Vercel Dashboard](https://vercel.com/new) và chọn **Import** repository vừa tạo.
3. Vercel tự động nhận diện framework **Vite** (`dist`). Nhấn nút **Deploy**.
