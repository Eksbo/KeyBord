'use script' ;
let btnEn = document.querySelector('#btnEn');
let btnRu = document.querySelector('#btnRu');
 let logDisp = document.querySelector('#inp');
 let keyBox = document.querySelector('#keys');
 let dig = document.querySelector('.rowDig');
 let simR = document.querySelector('.rowSim');
 let r1 =document.querySelector('.row1');
 let r2 =document.querySelector('.row2');
 let r3 =document.querySelector('.row3');
 let sum = 0 ;
 let numArr =[1,2,3,4,5,6,7,8,9,0];
 let leterArr =["q","w","e","r","t","y","u","i","o","p","a","s",
 "d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
let  leterRuArr = [
'й' ,'ц' ,'у' ,'к' ,'е' ,'н' ,
'г' ,'ш' ,'щ' ,'з' ,'х' ,'ъ' 
,'ф' ,'ы' ,'в' ,'а' ,'п' ,'р' 
,'о' ,'л' ,'д' ,'ж' ,'э' ,'я' ,
'ч' ,'с' ,'м' ,'и' ,'т' ,'ь' ,'б' ,'ю'];
 let simArr = ['.' , ',' ,':' ,';' ,'!','?' , '"', '@','#','%','*'];
// ==========================================>>>>
 let cle = document.createElement('div');
 cle.textContent = 'Bacspasce';
 cle.classList.add('btn');

 let space = document.createElement('div');
 space.classList.add('space');
 keyBox.appendChild(space);

 let capsL = document.createElement('div');
 capsL.classList.add('cap');
 capsL.textContent = 'Caps Look'
 dig.appendChild(capsL);

// ==========================================>>>>

 for ( let i of numArr){
    let num = document.createElement('div');
    num .classList.add('num')
    num.textContent = i ;
    dig.appendChild(num)
};

for (let i of simArr)
 {
    let sim = document.createElement('div');
    sim.classList.add('num')
    sim.textContent = i ;
    simR.appendChild(sim)
 }
for(let i of leterArr){

    let key = document.createElement('div');
    key.classList.add('key')
    key.textContent = i ;
    sum += 1 ;
    if( sum <=10 ){r1.appendChild(key)}
    else if( sum > 10 || sum <=19){r2.appendChild(key)};
    if(sum >19){ r3.appendChild(key)};

}

// ==========================================>>>>

let numAll = document.querySelectorAll('.num');
for(let i of numAll)
{
   i.addEventListener('click' , function(){logDisp.value += i.textContent})
};

let keyArr = document.querySelectorAll('.key');

for(let i of keyArr)
{
   i.addEventListener('click' , function(){logDisp.value += i.textContent})
};
r3.appendChild(cle);

cle.addEventListener('click' , function()
{
    let strArr = String(logDisp.value).split('');
    let newStr = strArr.splice(0, strArr.length-1);
    logDisp.value = newStr.join('');
});

space.addEventListener('click' , function()
{
    logDisp.value += ' ' ;
});

capsL.addEventListener('click' , function()
{
    for(let i of keyArr)    
{
    if( i.textContent != i.textContent.toUpperCase())
    {i.textContent = i.textContent.toUpperCase()}
    else
    {i.textContent = i.textContent.toLowerCase()}

}});



btnRu.addEventListener('click',function()
{
r1.innerHTML='';
r2.innerHTML='';
r3.innerHTML='';
let sum = 0 ;
for(let i of leterRuArr){

    let key = document.createElement('div');
    key.classList.add('key')
    key.textContent = i ;
    sum += 1 ;
    if( sum <=12 ){r1.appendChild(key)}
    else if( sum > 12 || sum <=23){r2.appendChild(key)};
    if(sum >23){ r3.appendChild(key)};

}
let keyArr = document.querySelectorAll('.key');

for(let i of keyArr)
{
   i.addEventListener('click' , function(){logDisp.value += i.textContent})
};
r3.appendChild(cle);
capsL.addEventListener('click' , function()
{
    for(let i of keyArr)    
{
    if( i.textContent != i.textContent.toUpperCase())
    {i.textContent = i.textContent.toUpperCase()}
    else
    {i.textContent = i.textContent.toLowerCase()}

}});

});
btnEn.addEventListener('click',function()
{
    r1.innerHTML='';
r2.innerHTML='';
r3.innerHTML='';
let sum = 0 ;
    for(let i of leterArr){

        let key = document.createElement('div');
        key.classList.add('key')
        key.textContent = i ;
        sum += 1 ;
        if( sum <=10 ){r1.appendChild(key)}
        else if( sum > 10 || sum <=19){r2.appendChild(key)};
        if(sum >19){ r3.appendChild(key)};
    
    }
    let keyArr = document.querySelectorAll('.key');

    for(let i of keyArr)
    {
       i.addEventListener('click' , function(){logDisp.value += i.textContent})
    };
    r3.appendChild(cle);
    
    capsL.addEventListener('click' , function()
    {
        for(let i of keyArr)    
    {
        if( i.textContent != i.textContent.toUpperCase())
        {i.textContent = i.textContent.toUpperCase()}
        else
        {i.textContent = i.textContent.toLowerCase()}
    
    }});
    
});