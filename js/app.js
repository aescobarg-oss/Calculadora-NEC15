
function calcularCargas(){
let losa=parseFloat(document.getElementById('losa').value);
let contra=parseFloat(document.getElementById('contrapiso').value);
let cv=parseFloat(document.getElementById('uso').value);
let D=losa*24+contra*22+0.45;
let U=1.2*D+1.6*cv;
document.getElementById('cargas').innerHTML=`CM=${D.toFixed(2)} kN/m²<br>CV=${cv.toFixed(2)} kN/m²<br>U=${U.toFixed(2)} kN/m²`;
}
function predViga(){
let L=parseFloat(document.getElementById('luzViga').value);
let h=L/12,b=h/2;
document.getElementById('viga').innerHTML=`${(b*100).toFixed(0)} x ${(h*100).toFixed(0)} cm`;
}
function predCol(){
let Pu=parseFloat(document.getElementById('cargaCol').value);
let fc=parseFloat(document.getElementById('fc').value);
let Ag=(Pu*1000)/(0.35*fc);
let lado=Math.sqrt(Ag);
document.getElementById('columna').innerHTML=`Lado ≈ ${(lado/10).toFixed(1)} cm`;
}
function predLosa(){
let L=parseFloat(document.getElementById('luzLosa').value);
document.getElementById('losaR').innerHTML=`Espesor ≈ ${(L/25*100).toFixed(1)} cm`;
}
function predZap(){
let P=parseFloat(document.getElementById('cargaZap').value);
let q=parseFloat(document.getElementById('qadm').value);
let A=P/q; let lado=Math.sqrt(A);
document.getElementById('zapata').innerHTML=`Área=${A.toFixed(2)} m²; ${lado.toFixed(2)} x ${lado.toFixed(2)} m`;
}
