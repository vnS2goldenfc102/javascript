// // Xử lý lỗi
// function ChiaAB(a, b){
//     var t = a / c;
//     return t;
// }

// try{
//     var kq = ChiaAB(15, 0);
//     alert(kq);
// }catch(e){
//     alert(e.message);
// }

// // throw
// function ChiaAB2(a, b){
//     if(b==0){
//         throw " Không thể có phép chia cho 0" ;
//     }
//     var t = a / b;
//     return t;
// }

// var kq = ChiaAB(15, 0);

//

// String
var val = new String("Chào em anh đứng đây từ chiều");
console.log("Độ dài", val.length)
    // String method
    // charAt
    console.log("Kí tự tại vị trí 5 là",val.charAt(5))
    // chartCodeAt
    console.log("Giá trị unicode của ký tự tại",val.charCodeAt(5))
    // concat
    console.log("Nối từ 'Đình Thanh'",val.concat(" Đình Thanh"))
    // indexOf
    console.log("Vị trí của từ 'em' đầu tiên", val.indexOf("em"))
    // lastIndexOf
    console.log("Vị trí cuối cùng", val.lastIndexOf("chiều"))
    // replace
    console.log("Replace :" ,val.replace("em","oranges"))
    // split
    console.log("Split :" ,val.split(" ", 3))

// Object
function book(title, author) {
    this.title = title; 
    this.author  = author;
}

var myBook = new book("Perl", "Mohtashim");
document.write("Book title is : " + myBook.title + "<br>");
document.write("Book author is : " + myBook.author + "<br>");

// Dom

