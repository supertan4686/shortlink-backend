# shortlink-backend

> เป็นส่วนหลังบ้าน (API) ที่ใช้ในการ test เว็บย่อลิงค์ ใช้ node.js, hapi.js และ mysql ในการทำครับ

## วิธีการใช้
``` เมื่อ clone หรือติดตั้งมาแล้วให้ทำตามดังนี้ 
เข้าไปที่ folder project นี้แล้วพิมพ์คำสั่งดังนี้
npm install
node index.js หรือ nodemon index.js

หลังจากนั้นจะสามารถทดลองใช้ทดสอบ API ของระบบนี้ได้ ตามนี้
1. api การเอาลิงค์จริงจากลิงค์ย่อ
GET | http://localhost:3000/api/get/{shortlink} ; shortlink เช่น kMbH0
ผลลัพธ์ (response)
{
  reallink: 'facebook.com'
}

2. api การloginเข้าระบบสำหรับ admin
POST | http://localhost:3000/api/login
เวลาส่ง (request)
{
  username: 'admin',
  password: 'password'
}
ผลลัพธ์ (response)
{
  reallink: 'facebook.com'
}

3. api ดูข้อมูลถิติการกดลิงค์ย่อ
GET | http://localhost:3000/api/getstatlinks
ผลลัพธ์ (response)
[
    {
        "id": 1,
        "shortlink": "http://localhost:8080/kMbH0",
        "reallink": "facebook.com",
        "amount": 8
    },
    {
        "id": 2,
        "shortlink": "http://localhost:8080/mh7X1",
        "reallink": "facebook.com",
        "amount": 0
    },
    {
        "id": 3,
        "shortlink": "http://localhost:8080/Dn01t",
        "reallink": "facebook.com",
        "amount": 1
    }
]

4. api การเพิ่มข้อมูลลิงค์และสร้างลิงค์ย่อ
POST | http://localhost:3000/api/add
เวลาส่ง (request)
{
  reallink: 'facebook.com'
}
ผลลัพธ์ (response)
{
  reallink: 'kMbH0'
}


 

