var firebaseConfig = {
    apiKey: "AIzaSyDVJn6ER2ATaspHaHFHVB0jU_s53tMlHJM",
    authDomain: "javaproject-86658.firebaseapp.com",
    databaseURL: "https://javaproject-86658-default-rtdb.firebaseio.com",
    projectId: "javaproject-86658",                                        //เป็นการ Config การใช้ firebase
    storageBucket: "javaproject-86658.appspot.com",
    messagingSenderId: "449604717569",
    appId: "1:449604717569:web:19059f5a8333a0901fc400",
    measurementId: "G-SZ5KKGTP0S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);                             //เป็นการเรียกใช้ function
firebase.analytics();                                               //เป็นการเรียกใช้ function

//Program 
function insertData(username,product){                              //function การเพิ่มข้อมูล ขึ้น firebase โดยมี parameter เป็น username และ product
    var firebaseRef=firebase.database().ref("historyWEB");          //สร้างตัวแปร firebaseRef = เรียกใช้ firebase database ไปเก็บที่ historyWEB
    firebaseRef.push({                                              // push ข้อมูลขึ้น firebase
        'username':username,                                        // เก็บค่าเป็นตัวแปร username : ค่า username ที่รับมา
        'product':product                                           // เก็บค่าเป็นตัวแปร product : ค่า product ที่รับมา
    });
    console.log("insertData")                                       // ไว้เช็คการใช้ฟังก์ชัน
}

