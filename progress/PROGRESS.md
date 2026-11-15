# PROGRESS — 56 — Track B
Starter: ktpmud-bkt-vuontoan-starter · tag bkt-2026-v1
Fork: https://github.com/nguyennhuhienfpt718-svg/ktpmud-bkt-vuontoan-starter

## PC-1 — 11/11/2026

### 1.1. Tiến độ theo acceptance criteria
<!-- Track A: A-01…A-11 · Track B: B-01…B-10 (đề thi Mục 7.3 / 8.3). Đủ mọi mã. -->
| Mã | Trạng thái (Chưa / Đang / Xong) | Bằng chứng (commit / CI / file) | Ghi chú |
|---|---|---|---|
| B-01 | Đang | file `REQUIREMENTS.md` (commit `c91a911`) | Đang phân tích yêu cầu |
| B-02 | Đang | file `DECISIONS.md` (commit `bb875ae`) | Đang thiết kế kiến trúc |
| B-03 | Đang | file `TEST_PLAN.md` (commit `8e51f30`) | Đang lên kịch bản test |
| B-04 | Chưa | | |
| B-05 | Chưa | | |
| B-06 | Chưa | | |
| B-07 | Chưa | | |
| B-08 | Chưa | | |
| B-09 | Chưa | | |
| B-10 | Chưa | | |

### 1.2. Sửa đổi bắt buộc từ Checkpoint 1
## Mục 1.2 — Trạng thái và Bằng chứng sửa đổi sau Review Checkpoint 1 (Cập nhật 15/11/2026)

Nhóm 56 đã hoàn thành sửa đổi toàn bộ 7 mục theo nhận xét của giảng viên tại PR #6 trước hạn 23:59 ngày 15/11/2026:

| STT | Mục yêu cầu sửa của Giảng viên (PR #6) | Trạng thái | Bằng chứng giải quyết (File & Mục tương ứng trên Fork) |
|---|---|---|---|
| **1** | **Quy tắc ước lượng chưa tất định (B-03)** | ✅ Đã sửa | Đã viết công thức làm tròn $a_{est}$ và dung sai $\Delta$ cố định áp dụng cho mọi câu tại `REQUIREMENTS.md` (Mục 2.1). |
| **2** | **Phép chia chưa rõ & xử lý phép chia có dư** | ✅ Đã sửa | Đã định nghĩa công thức bội số tròn chục chia hết cho $b$ ($a_{comp} = \lfloor a/(10b) + 0.5 \rfloor \times 10b$) và quy tắc nhập/chấm 2 ô (`Thương`, `Số dư`) tại `REQUIREMENTS.md` (Mục 2.2). |
| **3** | **Chưa có 12 fixture (B-02) & quy tắc điểm** | ✅ Đã sửa | Đã bổ sung bảng 12 fixture (`B-F01` đến `B-F12`) và công thức tính điểm (100% / 70% / 30% / 0%) tại `REQUIREMENTS.md` (Mục 3.2 & Mục 4) và `data/seed.json`. |
| **4** | **Mô hình dữ liệu, Migration & Refresh (B-05)** | ✅ Đã sửa | Đã làm rõ việc mở rộng bảng `attempts`/`submissions` trong SQLite, migration `ALTER TABLE` tự động tại `server/db.js` và lưu `trang_thai_buoc = 'CALCULATING'` để giữ trạng thái khi F5 tại `DECISIONS.md` (ADR-01, Mục 2.2 & 2.3). |
| **5** | **Test plan thiếu ca biên, điểm, B-04, hồi quy** | ✅ Đã sửa | Đã bổ sung đủ 16 Test Cases gồm ca biên (`140, 160, 139, 161`), ca chấm điểm (`TC-09..12`), ca bảo mật B-04 (`TC-13`) và ca hồi quy 4 dạng bài cũ (`TC-16`) tại `TEST_PLAN.md`. |
| **6** | **Thử lại không giới hạn (Kịch bản 2)** | ✅ Đã sửa | Đã quy định rõ chính sách `MAX_ESTIMATE_RETRIES = 2` (sai 2 lần tự khóa ước lượng, hiện gợi ý và mở bước tính chính xác) tại `REQUIREMENTS.md` (Mục 3.1 & Kịch bản 2). |
| **7** | **Ẩn danh họ tên trong README (B-11)** | ✅ Đã sửa | Đã thay họ tên thật trong `README.md` bằng alias (`N56-Member-01..03`) và chuyển thông tin thành viên sang `CONTRIBUTIONS.md`. |

### 1.3. Timeline dự kiến đến khi hoàn thành
| Việc | Vai trò phụ trách | Mốc (CP2 15/11 · M3 · Freeze 19/11 · M4 20/11) | Ngày dự kiến |
|---|---|---|---|
| Hoàn thiện tài liệu, kiến trúc (B-01 đến B-03) | Dev 1 | CP2 15/11 | 13/11 |
| Triển khai code các tính năng (B-04 đến B-10) | Dev 2, Dev 3 | M3 | 17/11 |
| Cập nhật test tự động, CI và slide báo cáo | Cả nhóm | Freeze 19/11 | 19/11 |

### 1.4. Rủi ro / đang vướng
- Đã hoàn thành bộ khung tài liệu cơ bản, chuẩn bị bước vào giai đoạn code tính năng.

### 1.5. Câu hỏi cho GV
Q1: Không có.

### 1.6. Phân công (alias hoặc vai trò, KHÔNG ghi họ tên/MSSV)
| Alias / vai trò | Đầu việc chính | Commit/PR tiêu biểu |
|---|---|---|
| Dev 1 | Phân tích yêu cầu, lên kiến trúc và kế hoạch test | `8e51f30` (TEST_PLAN.md), `bb875ae` (DECISIONS.md), `c91a911` (REQUIREMENTS.md), `f0b65c9` (README.md) |
| Dev 2 | Code Backend / Database | |
| Dev 3 | Code Frontend / UI | |

## PC-2 — 18/11/2026

### 2.1. Đối chiếu timeline PC-1
| Việc (theo bảng 1.3) | Kế hoạch | Thực tế | Lệch & lý do |
|---|---|---|---|
| | | | |

### 2.2. Tiến độ theo acceptance criteria (cập nhật toàn bộ bảng 1.1)
| Mã | Trạng thái | Bằng chứng | Ghi chú |
|---|---|---|---|
| | | | |

### 2.3. Sẵn sàng nộp bài (đề thi Mục 6)
| Deliverable | Có / Chưa | Đường dẫn |
|---|---|---|
| README.md (cài đặt / chạy / test) | | |
| REQUIREMENTS.md | | |
| DECISIONS.md / ADR | | |
| Test tự động + CI xanh | | |
| TEST_REPORT.md | | |
| SECURITY_PRIVACY_CHECKLIST.md | | |
| AI_USE.md | | |
| CONTRIBUTIONS.md | | |
| Slide / demo script ≤ 7 phút | | |
| Draft PR vào `ktpmud-project`, check `validate` xanh | | |

### 2.4. Việc còn lại đến Freeze (23:59 19/11)
| Việc | Vai trò phụ trách | Hạn |
|---|---|---|
| | | |

### 2.5. Rủi ro / câu hỏi cho GV

## Kết quả cuối — Freeze 19/11/2026
Tag: bkt-2026-56-rc1 · SHA: 
Trạng thái cuối từng mã AC: (cập nhật bảng 2.2 hoặc ghi "như 2.2 trừ: …")
Những việc trong timeline chưa hoàn thành và lý do:
