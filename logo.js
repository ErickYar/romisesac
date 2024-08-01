function dibujarcanvas() {
    var canvas = document.getElementById('logo');
    var contexto = canvas.getContext('2d');
    // contexto.fillStyle='green';
    // contexto.fillRect(0,0,50,50);
    // contexto.fillStyle='#006CCC';
    // contexto.fillRect(100,150,250,150);

    // todo este es para una linea 
    // contexto.beginPath();
    // contexto.moveTo(50, 50);
    // contexto.lineTo(50, 150);
    // contexto.lineTo(150, 150);
    // contexto.stroke();

    // un triangulo con relleno 
    // contexto.beginPath();
    // contexto.moveTo(50, 350);
    // contexto.lineTo(50, 450);
    // contexto.lineTo(150, 450);
    // contexto.fill();

    // un triangulo solo con lineas
    // contexto.beginPath();
    // contexto.moveTo(50, 200);
    // contexto.lineTo(50, 300);
    // contexto.lineTo(150, 300);
    // contexto.closePath();
    // contexto.stroke()
    // angulo con canvas


    // contexto.beginPath();
    // contexto.arc(60, 60, 50, radian('0'), radian('90'))
    // contexto.arc(60, 60, 50, 0, 0.5 * Math.PI);
    // contexto.stroke();

    contexto.beginPath();
    contexto.strokeStyle = '#006CCC'; //color de la linea
    contexto.arc(200, 210, 180, radian('0'), radian('180'), true)
    // contexto.lineWidth=1;  para el grueso de la linea
    contexto.fillStyle = '#006CCC';
    contexto.fill();
    contexto.stroke();

    contexto.beginPath();
    contexto.arc(200, 210, 155, radian('0'), radian('180'), true)
    contexto.fillStyle = '#ffff';

    contexto.fill();
    contexto.stroke();

    // linea central
    // contexto.beginPath();
    // contexto.moveTo(200, 140);
    // contexto.lineTo(200, 30);
    // contexto.lineTo(150, 300);
    // contexto.closePath();
    // contexto.stroke()

    // del centro   
    contexto.beginPath();
    contexto.moveTo(160, 40);
    contexto.lineTo(185, 90);
    contexto.lineTo(185, 160);
    contexto.lineTo(215, 160);
    contexto.lineTo(215, 90);
    contexto.lineTo(240, 40);
    contexto.fillStyle = '#006CCC';
    contexto.fill();
    contexto.stroke()

    // triangulo del derecha
    contexto.beginPath();
    contexto.moveTo(45, 160);
    contexto.lineTo(150, 130);
    contexto.lineTo(40, 210);
    contexto.fill();
    contexto.stroke()

    // triangulo del izquierda
    contexto.beginPath();
    contexto.moveTo(350, 160);
    contexto.lineTo(250, 130);
    contexto.lineTo(358, 210);
    contexto.fill();
    contexto.stroke()

    // lineas de carreteras izquierda
    contexto.beginPath();
    contexto.moveTo(160, 130);
    contexto.lineTo(105, 170);
    contexto.stroke()

    contexto.beginPath();
    contexto.moveTo(165, 130);
    contexto.lineTo(90, 200);
    contexto.stroke()

    contexto.beginPath();
    contexto.moveTo(170, 130);
    contexto.lineTo(90, 220);
    contexto.stroke()

    contexto.beginPath();
    contexto.moveTo(175, 130);
    contexto.lineTo(140, 180);
    contexto.stroke()

    // lineas de carreteras derecha

    contexto.beginPath();
    contexto.moveTo(240, 130);
    contexto.lineTo(300, 180);
    contexto.stroke()

    contexto.beginPath();
    contexto.moveTo(235, 130);
    contexto.lineTo(270, 170);
    contexto.stroke()

    contexto.beginPath();
    contexto.moveTo(230, 130);
    contexto.lineTo(290, 210);
    contexto.stroke()

    contexto.beginPath();
    contexto.moveTo(225, 130);
    contexto.lineTo(250, 180);
    contexto.stroke()




    

    // contexto.beginPath();
    // contexto.arc(350, 60, 50, radian('0'), radian('360'));
    // contexto.stroke();


}

// function lineas(x1, y1, x2, y2) {
//     var lineas = {
// this.beginPath();
//         moveTo(x1, y1);
//         lineTo(x2, y2);
//         stroke()
//     }
// }

function radian(grados) {
    var radianes = (Math.PI / 180) * grados;
    return radianes
}



// curso de canvas
// capitulo 1
// https://www.youtube.com/watch?v=hBzW34VmiZk&t=321s
// capitulo 2
// https://www.youtube.com/watch?v=-JufKI3WGeM




// curso de canvas en ingles
// https://www.youtube.com/watch?v=p88rNckccmg&list=PLN0tvDAN1yvSNbkHAwPzJ5O4pP_e2vyme&index=1



// animaciones con javascript
// https://www.youtube.com/playlist?list=PLDyQo7g0_nsXEOxGlAgccV8fu-cHZnI5B
