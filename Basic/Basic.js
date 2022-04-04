// Variable
    var a="Chào em, anh đứng đây từ chiều";
    alert(a);
    // Global vs local
    var bien_a = 5 ;
    
    function HamABC(_thamso1, _thamso2){
        var tong = _thamso1 + _thamso2 + bien_a;
        return tong;
    }
    var ketqua = HamABC(5, 6);
    console.log("Ket qua ham ABC :",ketqua);


// Math
// var a=5, b=4;
//     // Cộng
//     console.log(a+b)
//     // Trừ
//     console.log("a-b=",a-b)
//     //Nhân
//     console.log("a*b", a*b)
//     //Chia
//     console.log("a/b", a/b)
//     //+=
//     console.log("a+=5", a+=5)
//     //Cộng chuỗi 
//     var c="Xin";d="chào"
//     console.log("c+d",c+d)
//     //Cộng dồn chuỗi
//     console.log("Cộng dồn",c+=" 65")
// Toán tử so sánh 
var a=9, b=10;
    //Nhỏ hơn
    console.log("a<b ->", a<b)
    //Lớn hơn
    console.log("a>b ->", a>b)
    //Nhỏ hơn hoặc bằng
    console.log("a<=b ->", a<=b)
    // nhỏ hơn hoặc bằng
    console.log('a>= => ', a>=b);
    // bằng
    console.log('a==b => ', a==b);
    // bằng tuyệt đối
    console.log('a===b => ', a===b);
    // không bằng
    console.log('a!= => ', a!=b);
// Toán tử logic
console.log('Logic');

a = 10, b = 20;
console.log('Cho a=10, b=20');
// AND
    console.log('a&&b => ', a&&b);
// OR
    console.log('a||b => ', a||b);
// NOT
    console.log('!a => ', !a);
// If...else
var a=5, b=6, c=(a*b)/2
if(a>c)
    alert('a lớn hơn c')
else
    alert('c lớn hơn a')

// kết hợp nhiều điều kiện
// ví dụ 1
var a=5, b=6, c=(a*b)/2
if(a>c && b>6)
    alert('A lớn hơn C và B cũng lớn hơn C')
// ví dụ 2
var a=5, b=6, c=(a*b)/2
if(a>=c || b>=c){
    a--;
    b--;
    alert('B hoặc A đã lớn hơn hoặc bằng C')
}
// Nhiều if lồng nhau
    var a=5, b=6, c=7;
    var _max = a;
    if(_max < b){
        _max=b;
        if(_max < c) _max = c;
    }else{
        if(_max < c) _max = c;
    }

    alert(_max);

// for
var tong = 0;

for (var i = 0; i < 100; i++) {
    tong +=i;
}

console.log(tong);
// while

var i = 1;
var tong = 0;

while (i <= 100) {
    tong += i;
    i++
}

console.log(tong)
// do...while
var i = 1;
var tong = 0;
do{
    tong += i;
    i++
}
while (i <= 100);

console.log(tong);
// break
var i = 1;
var k = 1;

while (i<=100){
    i++
    if(i==50){
        break;
    }
    k++
}

console.log(k)

// switch...case
var bien = 15;

switch (bien){
    case 1 :{
        bien += 10;
        break;
    }
    case 10 :{
        bien += 10;
        break;
    }
    default: {
        bien += 30;
        break;
    }
}

console.log(bien)

// Function
    function HamDauTien() {
        alert("Hello world");
    }

    HamDauTien();

    // Hàm có tham số
    function TongAB(a, b){
        var tong = a + b;
        alert(tong);
    }

    TongAB(15,10);

    // Hàm có giá trị trả về
    function tongavsb(a, b){
        return a+b;
    }

// Array
    var xemay = ["Wave","YAMAHA","Suzuki"];
    var bien_a = ["thư viện lập trình",15,100];
    // Khai báo
    // Dạng 1
    var xe_may = new Array();
    xe_may[0] = "Yamaha";
    xe_may[1] = "Wave"

    // Dạng 2
    var xe_may = new Array();
    xe_may["key1"] = "Yamaha";
    xe_may["key2"] = "Wave";
    
