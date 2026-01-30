function FormPage (){
    return(
         <div className="h-screen">
      <div className="p-5">
        <h1 className="text-3xl text-center">ลงทะเบียนเข้าสู่ระบบ</h1>
        <p className="text-center">กรุณากรอกข้อมูลของคุณ</p>
      </div>
      <div className="flex justify-center">
        <form>
            <h2>กรุณาระบุ E-MAIL</h2>
            <input type="text" placeholder="Type here" className="input" />
            <h2>กรุณาระบุ รหัสผ่าน</h2>
            <input type="text" placeholder="Type here" className="input" />
            <br/>
            <br/>
            <button className="btn btn-soft btn-primary">ลงทะเบียน</button>
        </form>
      </div>
    </div>
    );
}

export default FormPage;