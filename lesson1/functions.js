// function division(){
//     let num1 =10
//     let num2 =5
//     let num3 = num1/num2
//     console.log(num3)
// }

// division()

// calculate area of triangle
function area(){
    let areatri=document.getElementById('area')
    let he=36
    let b=12
    let area=he*b/2
    areatri.innerHTML=area;
    
}

// calculate volume of triangle
function volume(){
    let vol=document.getElementById('volume')
    let pi=3.14
    let r=14
    let h=48
    let volume=pi*r*r*h
    vol.innerHTML=volume;
}

// calculate bmi of triangle
function bmi(){
    let Bmi=document.getElementById('bmi')
    let weight=625
    let height=1.75
    let bmi=weight/(height*height)
    Bmi.innerHTML=bmi;
}

// calculate simple interest of triangle
function Simpleinterest(){
    let interest=document.getElementById('Simpleinterest')
    let principal=10000
    let rate=2
    let time=8
    let Simpleinterest=principal*rate*time
    interest.innerHTML=Simpleinterest;
}

// calculate greater no of triangle
function greaterno(){
    let greater=document.getElementById('greaterno')
    let a=35
    let b=40
    let greaterno=(a>b)?a:b
    greater.innerHTML=greaterno;
}