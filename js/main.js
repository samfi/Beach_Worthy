angular.module('beachApp',[])
.controller('MenuController',function ($scope){

	this.items = [
		{"name": "flags","img" : "FLAG_48px"},
		{"name": "rip","img": "RIP_48px" },
        {"name": "weather", "img": "SUN_48px"},
        {"name": "jellyfish", "img": "JELLYFISH_48px"},
        {"name": "swell", "img": "WAVE_48px"},
	];

	$scope.selected = this.items[0].name;
	this.buttonClicked = function(item) {
		$scope.selected = item.name;
	};

	
})
.controller("PopupController",function($scope,$http){
	//var url = "http://api.wunderground.com/api/fc1fe8854e97689c/conditions/q/-33.892738,151.277952.json"	;
	$scope.weather_img = bondi_weather.icon_url;
	$scope.temp        = bondi_weather.temp_c;
	$scope.feels_like_temp = bondi_weather.feelslike_c;
	$scope.visibility  =  bondi_weather.visibility_km;
	$scope.precip_today = bondi_weather.precip_today_metric;
});;

window.bondi_weather = {
		"image": {
		"url":"http://icons.wxug.com/graphics/wu2/logo_130x80.png",
		"title":"Weather Underground",
		"link":"http://www.wunderground.com"
		},
		"display_location": {
		"full":"Sydney, New South Wales",
		"city":"Sydney",
		"state":"",
		"state_name":"New South Wales",
		"country":"AU",
		"country_iso3166":"AU",
		"zip":"00000",
		"magic":"1",
		"wmo":"95766",
		"latitude":"-33.890000",
		"longitude":"151.270000",
		"elevation":"5.00000000"
		},
		"observation_location": {
		"full":"Watsons Bay, Vaucluse, NEW SOUTH WALES",
		"city":"Watsons Bay, Vaucluse",
		"state":"NEW SOUTH WALES",
		"country":"AU",
		"country_iso3166":"AU",
		"latitude":"-33.847519",
		"longitude":"151.283966",
		"elevation":"92 ft"
		},
		"estimated": {
		},
		"station_id":"INEWSOUT632",
		"observation_time":"Last Updated on June 19, 10:15 AM AEST",
		"observation_time_rfc822":"Sun, 19 Jun 2016 10:15:05 +1000",
		"observation_epoch":"1466295305",
		"local_time_rfc822":"Sun, 19 Jun 2016 10:15:21 +1000",
		"local_epoch":"1466295321",
		"local_tz_short":"AEST",
		"local_tz_long":"Australia/Sydney",
		"local_tz_offset":"+1000",
		"weather":"Light Rain",
		"temperature_string":"62.6 F (17.0 C)",
		"temp_f":62.6,
		"temp_c":17.0,
		"relative_humidity":"94%",
		"wind_string":"From the WSW at 5.4 MPH Gusting to 9.2 MPH",
		"wind_dir":"WSW",
		"wind_degrees":248,
		"wind_mph":5.4,
		"wind_gust_mph":"9.2",
		"wind_kph":8.7,
		"wind_gust_kph":"14.8",
		"pressure_mb":"1016",
		"pressure_in":"30.01",
		"pressure_trend":"0",
		"dewpoint_string":"61 F (16 C)",
		"dewpoint_f":61,
		"dewpoint_c":16,
		"heat_index_string":"NA",
		"heat_index_f":"NA",
		"heat_index_c":"NA",
		"windchill_string":"NA",
		"windchill_f":"NA",
		"windchill_c":"NA",
		"feelslike_string":"62.6 F (17.0 C)",
		"feelslike_f":"62.6",
		"feelslike_c":"17.0",
		"visibility_mi":"6.2",
		"visibility_km":"10.0",
		"solarradiation":"--",
		"UV":"0","precip_1hr_string":"0.07 in ( 2 mm)",
		"precip_1hr_in":"0.07",
		"precip_1hr_metric":" 2",
		"precip_today_string":"0.07 in (2 mm)",
		"precip_today_in":"0.07",
		"precip_today_metric":"2",
		"icon":"rain",
		"icon_url":"http://icons.wxug.com/i/c/k/rain.gif",
		"forecast_url":"http://www.wunderground.com/global/stations/95766.html",
		"history_url":"http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=INEWSOUT632",
		"ob_url":"http://www.wunderground.com/cgi-bin/findweather/getForecast?query=-33.847519,151.283966",
		"nowcast":""
	}
