//  Assinment # 43-48
//  Q no : 3
// function deleteRow(button){
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }
// deleteRow();

//  Q no : 4
// function newPic(){
//     document.getElementById("pic").src = "https://www.shutterstock.com/image-photo/panorama-tropical-beach-coconut-palm-260nw-2025936830.jpg"
// }
// function oldPic(){
//     document.getElementById("pic").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSSQNnRodPTeNk3RtWKW3xzFNj_ovqjPP6MShu3pfDzFqyUbxIdSUQOGbrTY63UlLmRA4&usqp=CAU"
// }

//  Q no : 5
// var count = 0;
// var resultMessage = document.getElementById("resultMessage");
// function increaseValue(){
//     document.getElementById("counterDisplay").value = count;
//     resultMessage.textContent = "The value is :" + count
//     count++;
// }
// function deccreaseValue(){
//     document.getElementById("counterDisplay").value = count;
//     resultMessage.textContent = "The value is :" + count
//     count--;
// }


//  Assignment # 49-52
//  Q no : 1
// function dataSubmition(event){
//   event.preventDefault();
//    var email = document.getElementById("email").value;
//    var password = document.getElementById("password").value;
//    var  displayDiv = document.getElementById("displayData");
//   displayDiv.innerHTML = "<h2>User Data:</h2>" + "<p>Email or Phone: " + email + "</p>" + "<p>Password: " + password + "</p>" ;
// }

//  Q no : 2
// var expandCode = false;
// function expandPara(){
//     if(! expandCode){
//     var expandParagraph = `<h2>List:</h2>
//   <ul>
//      <li>Pencil</li>
//      <li>Scale</li>
//      <li>Shopner</li>
//      <li>Pointer</li>
//      <li>Eraser</li>
//   </ul>`
    
//     document.getElementById("content").innerHTML += expandParagraph;
//     expandCode = true;
//     document.getElementById("clickMore").style.display = "none";
//     document.getElementById("clickLess").style.display = "inline";
// }
// }
// function collapsePara(){
//   if(expandCode){
//     var collapseParagraph = `<P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos, molestias, quam earum vero sapiente cum deserunt voluptates, magnam excepturi nesciunt id possimus? Quae impedit porro, hic blanditiis odio deserunt.</p>`
//     document.getElementById("content").innerHTML =  collapseParagraph;
//     expandCode = false;
//     document.getElementById("clickMore").style.display = "block";
//     document.getElementById("clickLess").style.display = "none";
//   }
// }

//  Q no : 3
// var dataSubmit = document.getElementById("dataSubmit");
// function addTask(inputId){
//   var inputElement = document.getElementById(inputId);
//   if(inputElement.value = ""){
//   alert("Please Fill All Field!")
//   }
//   else{
//     var newValue = prompt("Edit your value:", inputElement.value);
//     if (newValue !== null && newValue !== "") {
//         inputElement.value = newValue;
//       }
//   }
// }
// function deleteAll(inputId) {
//   var inputs = document.getElementById(inputId);
//   inputs.value = "";
// }