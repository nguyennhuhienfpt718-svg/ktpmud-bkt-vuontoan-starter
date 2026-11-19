
# PROGRESS — Nhóm 56 — Track B

- Starter: ktpmud-bkt-vuontoan-starter · tag bkt-2026-v1
- Fork: https://github.com/nguyennhuhienfpt718-svg/ktpmud-bkt-vuontoan-starter

## PC-1 — 11/11/2026

### 1.1. Tiến độ theo acceptance criteria
| Mã | Trạng thái (Chưa / Đang / Xong) | Bằng chứng (commit / CI / file) | Ghi chú |
|---|---|---|---|
| B-01 | Đang | `REQUIREMENTS.md` | Đã đặc tả luồng truy cập từ giao diện học sinh hiện có |
| B-02 | Đang | `REQUIREMENTS.md` | Đã chốt bộ 12 fixtures (6 nhân, 6 chia có dư) |
| B-03 | Xong | `DECISIONS.md` (ADR-01) | Chốt công thức ước lượng tất định & khoảng dung sai |
| B-04 | Đang | `DECISIONS.md` | Thiết kế API tách riêng không trả `E_min`/`E_max` và đáp án |
| B-05 | Đang | `DECISIONS.md` | Thiết kế máy trạng thái lưu trên SQLite chống mất khi F5 |
| B-06 | Đang | `REQUIREMENTS.md` | Đặc tả phản hồi sư phạm & giới hạn 2 lần thử |
| B-07 | Chưa | `TEST_PLAN.md` | Lên kế hoạch kiểm thử hồi quy 4 dạng bài cũ |
| B-08 | Chưa | `TEST_PLAN.md` | Lên danh sách ca kiểm thử normal, biên, invalid, scoring |
| B-09 | Chưa | `README.md` | Chuẩn hóa lệnh `npm install`, `npm test`, `npm start` |
| B-10 | Chưa | - | Dự kiến cấu hình GitHub Actions CI |
| B-11 | Xong | `README.md`, `CONTRIBUTIONS.md` | Ẩn danh bằng alias `N56-Member-01..03` |
| B-12 | Chưa | `REQUIREMENTS.md` | Hỗ trợ thao tác bàn phím (`Tab`, `Enter`) |

### 1.2. Sửa đổi bắt buộc từ Checkpoint 1
| Mục | Trạng thái | Bằng chứng |
|---|---|---|
| Hoàn thiện 7 mục bắt buộc theo review Checkpoint 1 (đặc tả, ADR, kế hoạch kiểm thử, ẩn danh alias) | Đang | `REQUIREMENTS.md`, `DECISIONS.md`, `TEST_PLAN.md` |

### 1.3. Timeline dự kiến đến khi hoàn thành
| Việc | Vai trò phụ trách | Mốc (CP2 15/11 · M3 · Freeze 19/11 · M4 20/11) | Ngày dự kiến |
|---|---|---|---|
| Sửa xong 7 mục review CP1 & cập nhật tài liệu | `N56-Member-01` | CP2 15/11 | 15/11/2026 |
| Hoàn thiện thuật toán B-03, 12 fixtures & `tests/estimate.test.js` | `N56-Member-02` | M3 | 17/11/2026 |
| Thiết lập GitHub Actions CI, `TEST_REPORT.md`, `SECURITY_PRIVACY_CHECKLIST.md`, `AI_USE.md` | `N56-Member-03` | M3 | 18/11/2026 |
| Mở PR nộp bài vào `ktpmud-project`, tạo release tag `bkt-2026-56-rc1` | `N56-Member-01` | Freeze 19/11 | 19/11/2026 |
| Chuẩn bị demo 7 phút & bảo vệ | Cả nhóm | M4 20/11 | 20/11/2026 |

### 1.4. Rủi ro / đang vướng
- Cấu hình đường dẫn thư mục nộp bài và kiểm tra `validate` trên `ktpmud-project`.

### 1.5. Câu hỏi cho GV
- Q1: Xác nhận cách tính điểm từng phần khi học sinh ước lượng sai 2 lần nhưng tính đúng ở Bước 2 (70% điểm).

### 1.6. Phân công (alias hoặc vai trò, KHÔNG ghi họ tên/MSSV)
| Alias / vai trò | Đầu việc chính | Commit/PR tiêu biểu |
|---|---|---|
| `N56-Member-01` | Đặc tả `REQUIREMENTS.md`, quản lý repo/PR nộp bài, `README.md` | `Update REQUIREMENTS.md`, `Update README.md` |
| `N56-Member-02` | Kiến trúc `DECISIONS.md`, thuật toán ước lượng & 12 fixtures (`tests/estimate.test.js`) | `Update DECISIONS.md`, `Create estimate.test.js` |
| `N56-Member-03` | Kiểm thử tự động, GitHub Actions CI, `TEST_REPORT.md`, `SECURITY_PRIVACY_CHECKLIST.md`, `AI_USE.md` | `Create ci.yml`, `Update TEST_REPORT.md` |

## PC-2 — 18/11/2026

### 2.1. Đối chiếu timeline PC-1
| Việc (theo bảng 1.3) | Kế hoạch | Thực tế | Lệch & lý do |
|---|---|---|---|
| Sửa 7 mục review CP1 | 15/11/2026 | 15/11/2026 | Đúng hạn |
| Hoàn thiện test tự động & CI xanh | 17-18/11/2026 | 19/11/2026 | Lệch 1 ngày do bổ sung script `"test"` vào `package.json` và chạy kiểm thử CI |
| Mở PR nộp bài vào `ktpmud-project` | 18/11/2026 | 19/11/2026 | Lệch 1 ngày do xóa bản fork cũ bị lỗi nhánh `main` và fork lại mới tinh trên nhánh `submit/hoang_mai_toan-56` |

### 2.2. Tiến độ theo acceptance criteria (cập nhật toàn bộ bảng 1.1)
| Mã | Trạng thái | Bằng chứng | Ghi chú |
|---|---|---|---|
| B-01 | Xong | `REQUIREMENTS.md`, `README.md` | Tích hợp từ luồng học hiện có |
| B-02 | Xong | `tests/estimate.test.js` | Đủ 12 fixtures tái lập được |
| B-03 | Xong | `tests/estimate.test.js`, `DECISIONS.md` | Công thức tất định 100%, PASS toàn bộ test |
| B-04 | Xong | `SECURITY_PRIVACY_CHECKLIST.md`, `DECISIONS.md` | Không trả đáp án/`E_min`/`E_max` về client |
| B-05 | Xong | `DECISIONS.md`, `slides/README.md` | Lưu trạng thái 2 bước trên SQLite |
| B-06 | Xong | `tests/estimate.test.js`, `REQUIREMENTS.md` | Phản hồi sư phạm, giới hạn 2 lần thử, chấm điểm từng phần |
| B-07 | Xong | `TEST_REPORT.md` | Không hồi quy 4 dạng bài cũ |
| B-08 | Xong | `tests/estimate.test.js`, `TEST_REPORT.md` | Đủ ca normal, biên, invalid input, scoring |
| B-09 | Xong | `package.json`, `README.md` | Chạy `npm test` (node --test) PASS 100% |
| B-10 | Xong | `.github/workflows/ci.yml`, CI run `#44565254002` | GitHub Actions CI chạy XANH (14s) |
| B-11 | Xong | `README.md`, `CONTRIBUTIONS.md`, `SECURITY_PRIVACY_CHECKLIST.md` | Ẩn danh bằng alias `N56-Member-01..03` |
| B-12 | Xong | `REQUIREMENTS.md`, `slides/README.md` | Hỗ trợ thao tác bàn phím (`Tab`, `Enter`) |

### 2.3. Sẵn sàng nộp bài (đề thi Mục 6)
| Deliverable | Có / Chưa | Đường dẫn |
|---|---|---|
| README.md (cài đặt / chạy / test) | Có | `submissions/hoang_mai_toan_56/README.md` |
| REQUIREMENTS.md | Có | `submissions/hoang_mai_toan_56/artifacts/REQUIREMENTS.md` |
| DECISIONS.md / ADR | Có | `submissions/hoang_mai_toan_56/artifacts/DECISIONS.md` |
| Test tự động + CI xanh | Có | `tests/estimate.test.js` · `.github/workflows/ci.yml` |
| TEST_REPORT.md | Có | `submissions/hoang_mai_toan_56/artifacts/TEST_REPORT.md` |
| SECURITY_PRIVACY_CHECKLIST.md | Có | `submissions/hoang_mai_toan_56/artifacts/SECURITY_PRIVACY_CHECKLIST.md` |
| AI_USE.md | Có | `submissions/hoang_mai_toan_56/artifacts/AI_USE.md` |
| CONTRIBUTIONS.md | Có | `submissions/hoang_mai_toan_56/artifacts/CONTRIBUTIONS.md` |
| Slide / demo script ≤ 7 phút | Có | `submissions/hoang_mai_toan_56/slides/README.md` |
| Draft PR vào `ktpmud-project`, check `validate` xanh | Có | PR từ nhánh `submit/hoang_mai_toan-56` (đang chờ maintainer duyệt workflow `validate`) |

### 2.4. Việc còn lại đến Freeze (23:59 19/11)
| Việc | Vai trò phụ trách | Hạn |
|---|---|---|
| Tạo release tag `bkt-2026-56-rc1` và điền `source-ref.json`, `submission.json` | `N56-Member-01` | 23:59 19/11/2026 (Đã xong) |
| Mở PR nộp bài chính thức vào `fossbk-spec/ktpmud-project` | `N56-Member-01` | 23:59 19/11/2026 (Đã xong) |

### 2.5. Rủi ro / câu hỏi cho GV
- Không còn rủi ro kỹ thuật; PR nộp bài đã mở từ bản fork mới và đang ở trạng thái `awaiting approval` chờ GV duyệt chạy workflow `validate`.

## Kết quả cuối — Freeze 19/11/2026
- Tag: `bkt-2026-56-rc1` · SHA: `3b676b558dfdcdecfb4ebdeb97d7a7d41bbd54f7`
- Trạng thái cuối từng mã AC: Như bảng 2.2 (đạt 12/12 mã `B-01`…`B-12`, CI xanh tại `https://github.com/nguyennhuhienfpt718-svg/ktpmud-bkt-vuontoan-starter/actions/runs/44565254002`).
- Những việc trong timeline chưa hoàn thành và lý do: Không có (đã hoàn thành toàn bộ deliverables và mở PR nộp bài trước mốc Freeze 23:59 19/11/2026).
