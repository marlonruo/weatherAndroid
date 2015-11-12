/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		
		// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
		// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//

function onSuccess(position) {
	

    $('#ubi').hide()
	var cordenadas = position.coords.latitude+", "+position.coords.longitude				
		
	navigator.geolocation.clearWatch(watchID);
		
		localStorage.setItem("latitud", position.coords.latitude);
		localStorage.setItem("longitude", position.coords.longitude);
		
		lat = position.coords.latitude
		lon = position.coords.longitude
			
	var Result = $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=imperial&APPID=6a6a4073a3225ae9aafe7b996562e827", "",
    function (data)
    {
		grados = data.main.temp
		
		if(gg==1){
		 	grados = (grados -32)/1.8
		 }
		
		$('#tt1').html(data.name)
		$('#tt2').html(fecha+", "+data.weather[0].description)
		$('#grados').html(Math.round(grados)+'°')	
		
		sunset = formatTime(data.sys.sunset);
		sunset = sunset.split(':')
		
		sunrise = formatTime(data.sys.sunrise);
		sunrise = sunrise.split(':')
		
		horasM= (parseInt(sunrise[0])*60) + parseInt(sunrise[1]) 
		horasT= (parseInt(sunset[0])*60) + parseInt(sunset[1]) 
		horasA= (parseInt(hora)*60) + parseInt(minuto) 

ico = data.weather[0].id
cadena = data.weather[0].icon

if(horasA >= horasM && hora <= horasT){
	ico2 = ico+'d'
	$('#fondo1, #fondo2, #fondo3, #fondo4, #fondo5, #fondo6').fadeOut()
	$('#fondo6').fadeIn()
	$('#clima').css('background-color','#3f5b76')
}else{
	ico2 = ico+'n'
	$('#fondo1, #fondo2, #fondo3, #fondo4, #fondo5, #fondo6').fadeOut()
	$('#fondo5').fadeIn()
	$('#clima').css('background-color','#022f4b')
}


		 $('#icono').attr('src', 'iconos/'+ico2+'.svg#svgView(preserveAspectRatio(xMidYMin meet))');
		 $('#pollo').css('opacity','0.0')
		 $('#pollo').delay(1000).animate({opacity:'1'}, 800);
		 
		 if(ico==3 || ico==27 || ico==29 || ico==31 || ico==33 || ico==38 || ico==39){
		 	$('#pollo').attr('src', 'animaciones/an'+data.query.results.channel.item.condition.code+'/an1.html');
		 }else{
		 	$('#pollo').attr('src', 'animaciones/an1/an1.html');
		 }
		
    });
	
	
	
	
	
	var ResultHora = $.getJSON("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&units=imperial&APPID=6a6a4073a3225ae9aafe7b996562e827", "",
    function (dataHora)
    {
		var hor1 = formatTime(dataHora.list[0].dt);
		$('#hora1').html(hor1)
		grados1 = dataHora.list[0].main.temp
		if(gg==1){
		 	grados1 = (grados1 -32)/1.8
		 }
		$('#gra1').html(Math.round(grados1)+'°')
		hor1 = hor1.split(':')
		var ho1= (parseInt(hor1[0])*60) + parseInt(hor1[1]) 
		var icon1=dataHora.list[0].weather[0].id
		if(ho1 >= horasM && ho1 <= horasT){
			icon1 = icon1+'d'
		}else{
			icon1 = icon1+'n'
		}
		$('#ico1').attr('src', 'iconos/'+icon1+'.svg');
		
		
		
		
		var hor2 = formatTime(dataHora.list[1].dt);
		$('#hora2').html(hor2)
		grados2 = dataHora.list[1].main.temp
		if(gg==1){
		 	grados2 = (grados2 -32)/1.8
		 }
		$('#gra2').html(Math.round(grados2)+'°')
		hor2 = hor2.split(':')
		var ho2= (parseInt(hor2[0])*60) + parseInt(hor2[1]) 
		var icon2=dataHora.list[1].weather[0].id
		if(ho2 >= horasM && ho2 <= horasT){
			icon2 = icon2+'d'
		}else{
			icon2 = icon2+'n'
		}
		$('#ico2').attr('src', 'iconos/'+icon2+'.svg');
		
		
		
		var hor3 = formatTime(dataHora.list[2].dt);
		$('#hora3').html(hor3)
		grados3 = dataHora.list[2].main.temp
		if(gg==1){
		 	grados3 = (grados3 -32)/1.8
		 }
		$('#gra3').html(Math.round(grados3)+'°')
		hor3 = hor3.split(':')
		var ho3= (parseInt(hor3[0])*60) + parseInt(hor3[1]) 
		var icon3=dataHora.list[2].weather[0].id
		if(ho3 >= horasM && ho3 <= horasT){
			icon3 = icon3+'d'
		}else{
			icon3 = icon3+'n'
		}
		$('#ico3').attr('src', 'iconos/'+icon3+'.svg');
		
		
		
		var hor4 = formatTime(dataHora.list[3].dt);
		$('#hora4').html(hor4)
		grados4 = dataHora.list[3].main.temp
		if(gg==1){
		 	grados4 = (grados4 -32)/1.8
		 }
		$('#gra4').html(Math.round(grados4)+'°')
		hor4 = hor4.split(':')
		var ho4= (parseInt(hor4[0])*60) + parseInt(hor4[1]) 
		var icon4=dataHora.list[3].weather[0].id
		if(ho4 >= horasM && ho4 <= horasT){
			icon4 = icon4+'d'
		}else{
			icon4 = icon4+'n'
		}
		$('#ico4').attr('src', 'iconos/'+icon4+'.svg');
		
		
		
		
		
		var hor5 = formatTime(dataHora.list[4].dt);
		$('#hora5').html(hor5)
		grados5 = dataHora.list[4].main.temp
		if(gg==1){
		 	grados5 = (grados5 -32)/1.8
		 }
		$('#gra5').html(Math.round(grados5)+'°')
		hor5 = hor5.split(':')
		var ho5= (parseInt(hor5[0])*60) + parseInt(hor5[1]) 
		var icon5=dataHora.list[4].weather[0].id
		if(ho5 >= horasM && ho5 <= horasT){
			icon5 = icon5+'d'
		}else{
			icon5 = icon5+'n'
		}
		$('#ico5').attr('src', 'iconos/'+icon5+'.svg');
		
		
		
		
		var hor6 = formatTime(dataHora.list[5].dt);
		$('#hora6').html(hor6)
		grados6 = dataHora.list[5].main.temp
		if(gg==1){
		 	grados6 = (grados6 -32)/1.8
		 }
		$('#gra6').html(Math.round(grados6)+'°')
		hor6 = hor6.split(':')
		var ho6= (parseInt(hor6[0])*60) + parseInt(hor6[1]) 
		var icon6=dataHora.list[5].weather[0].id
		if(ho6 >= horasM && ho6 <= horasT){
			icon6 = icon6+'d'
		}else{
			icon6 = icon6+'n'
		}
		$('#ico6').attr('src', 'iconos/'+icon6+'.svg');
		
    });
	
	
	
	
	var ResultDia = $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat="+lat+"&lon="+lon+"&units=imperial&APPID=6a6a4073a3225ae9aafe7b996562e827&cnt=5", "",
    function (dataDia)
    {
		
	
var weekday = new Array(7);
weekday[0]=  "SUN";
weekday[1] = "MON";
weekday[2] = "TUE";
weekday[3] = "WED";
weekday[4] = "THU";
weekday[5] = "FRI";
weekday[6] = "SAT";
		
		var milliseconds1 = dataDia.list[0].dt * 1000;
        var date1 = new Date(milliseconds1);
		var n1 = weekday[date1.getDay()];
		$('#dia1').html(n1)
		$('#ic1').attr('src', 'iconos/'+dataDia.list[0].weather[0].id+'d.svg');
		
		var milliseconds2 = dataDia.list[1].dt * 1000;
        var date2 = new Date(milliseconds2);
		var n2 = weekday[date2.getDay()];
		$('#dia2').html(n2)
		$('#ic2').attr('src', 'iconos/'+dataDia.list[1].weather[0].id+'d.svg');
		
		var milliseconds3 = dataDia.list[2].dt * 1000;
        var date3 = new Date(milliseconds3);
		var n3 = weekday[date3.getDay()];
		$('#dia3').html(n3)
		$('#ic3').attr('src', 'iconos/'+dataDia.list[2].weather[0].id+'d.svg');
		
		var milliseconds4 = dataDia.list[3].dt * 1000;
        var date4 = new Date(milliseconds4);
		var n4 = weekday[date4.getDay()];
		$('#dia4').html(n4)
		$('#ic4').attr('src', 'iconos/'+dataDia.list[3].weather[0].id+'d.svg');
		
		var milliseconds5 = dataDia.list[4].dt * 1000;
        var date5 = new Date(milliseconds5);
		var n5 = weekday[date5.getDay()];
		$('#dia5').html(n5)
		$('#ic5').attr('src', 'iconos/'+dataDia.list[4].weather[0].id+'d.svg');
    });
						
}

// onError Callback receives a PositionError object
//
function onError(error) {
    
}

// Options: throw an error if no update is received every 30 seconds.
//
var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {enableHighAccuracy: true});

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
 
};



