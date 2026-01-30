function MAINPAGE() {
  return (
    <div>
      <div className="text-center mt-9 p-9">
        <h1 className="text-6xl">ยินไม่ต้อนรับสู่เว็บฉัน</h1>
        <p className="text-2xl text-blue-800">นี้คือ Next.js ที่ฉันเขียนเพื่อส่งงาน</p>
      </div>
      <div className="text-center">
        <h1 className="">บทเรียนที่1 State ของการเปิด-ปิดหลอดไฟ</h1>
        <a href="/light">ไปหน้าไฟ</a>
        <br></br>
        <a href="/count">เปิดวาร์ป</a>
      </div>
    </div>
  );
}

export default MAINPAGE
 