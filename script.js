// Just a check
console.log("Loaded successfully ");


// // ---------------------using vanilla javascript
// var colors=["red","yellow",'PINK',"green","purple","Aqua","black","Wheat","Brown","Coral","Crimson","orange","DarkGreen","DarkMagenta","deeppink"];
// var btn=document.getElementById('btn');
// var container=document.getElementById('container');

// btn.addEventListener('click',function(){
//     var color=colors[Math.floor(Math.random() * colors.length)];
//     console.log(color);
//     container.innerHTML+=`<div class="ball" style="background-color:${color};"></div>`
//     // container.innerHTML+='<h1>Amajhgjkhsdjivhgih</h1>'
// })

// console.log(colors[Math.floor(Math.random() * colors.length)]);






// Using  JQuery
var btn=$('#btn');
var container=$("#container");
var colors=["red","yellow",'PINK',"green","purple","Aqua","black","Wheat","Brown","Coral","Crimson","orange","DarkGreen","DarkMagenta","deeppink"];
btn.click(function(){
        var color=colors[Math.floor(Math.random() * colors.length)];
        console.log(color);
        container.append(`<div class="ball" style="background-color:${color};"></div>`);
        
})


