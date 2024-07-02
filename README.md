## Hướng Dẫn Sử Dụng

**Tiêu đề:** VCS MANAGEMENT

**Giới thiệu:**

Đây là đồ án báo cáo môn học IE103,mục tiêu tạo ra web để người dùng có thể xem thông tin về giải đấu,người quản lý giải có thể quản lý thông tin tốt hơn.
<div>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/06/Vietnam_Championship_Series.png" style="width:80%;height:auto"/>
  
</div>


**Cài đặt:**

**Yêu cầu hệ thống:**

* Hệ điều hành: Windows, macOS
* Node.js
* npm 

**Hướng dẫn cài đặt:**

1. Cài đặt Node.js và npm/yarn nếu chưa có.
2. Clone dự án: `git clone https://github.com/tuananh1006/QLTT_APP.git`
3. Di chuyển vào thư mục dự án: `cd QLTT_app`
4. Cài đặt các phụ thuộc: `npm install`
5. Mở file `/07_22520055_22520125_22520126_22520979.SQL` trong sql_file và thực thi file (có thể ctrl a rồi execute),sau đó mở file `createdata.sql` ctrl a rồi execute để load data
6. Ghi lại thông số về server,driver,database (user,password nếu có), sau đó điều chỉnh config.json trong folder config
7. Khởi động ứng dụng: `npm start`
8. Tạo terminal mới,`python app.py` để có thể thực hiện chức năng AI dự đoán(Optional)

**Tính năng chính:**

* Xem lịch thi đấu
* Xem thông tin tuyển thủ
* Xem thông tin phân tích
...


