var config;

function actualizar(datos, titulo){
      config.data.datasets.forEach(function(dataset) {
        /*  dataset.data = dataset.data.map(function() {
              return randomScalingFactor();
          });
          */
          dataset.data = datos;
          dataset.label = titulo;
      });
      

canvasId = "spider";
var canvas = document.getElementById(canvasId);
var ctx = canvas.getContext("2d");
/*
ctx.beginPath();
ctx.rect(0, 0, c.width, c.height);
ctx.fillStyle = "white";
ctx.fill();
*/
// change non-opaque pixels to white
var imgData=ctx.getImageData(0,0,canvas.width,canvas.height);
var data=imgData.data;
for(var i=0;i<data.length;i+=4){
    if(data[i+3]<255){
        data[i] = 255 - data[i];
        data[i+1] = 255 - data[i+1];
        data[i+2] = 255 - data[i+2];
        data[i+3] = 255 - data[i+3];
    }
}


      window.myRadar.update();
}

function createRadar(datos, titulo){

var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

/////////////////////////////////
/*var datos = [
[1,2,3,4,5],
[2,3,4,5,6],
[2,3,8,5,6],
[2,13,4,5,6]
];*/


/////////////////////////////////

var color = Chart.helpers.color;
config = {
    type: 'radar',
    data: {
      //'ICVU2017','CL','AN','CS','CM','SM','VE'
      // labels: ['ICVU','CL','AN','CS','CM','SM','VE'], /*, 'CM1', 'CM3', 'CM5'*/
            
        labels: ['ICVU','Condiciones Laborales','Ambiente de Negocios','Condiciones Socio Culturales',
        'Conectividad y Movilidad','Salud y Medio Ambiente','Vivienda y Entorno'], /*, 'CM1', 'CM3', 'CM5'*/
        datasets: [{
            label: titulo,
            backgroundColor: color(window.chartColors.purple).alpha(0.9).rgbString(),
            borderColor: window.chartColors.purple,
            pointBackgroundColor: window.chartColors.purple,
            data:datos
        }/*,
        {
            label: 'Promedio',
            backgroundColor: color(window.chartColors.grey).alpha(0.2).rgbString(),
            borderColor: window.chartColors.grey,
            pointBackgroundColor: window.chartColors.grey,
            data: [4,2,4,3,3,4]
        }*/

      ]
    },
    options: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: ' '
        },
        scale: {
            ticks: {
                beginAtZero: true,
                fontSize: 12,
                display: true/*Cotas numéricas del radar*/
              }
        }
    }
};

window.onload = function() {
    window.myRadar = new Chart(document.getElementById('spider'), config);
};


var colorNames = Object.keys(window.chartColors);


}//cierre función createRadar
