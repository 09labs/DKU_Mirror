var FORCAST_API_KEY = "e40d34a20af10ab1d48328f05c866399";
var SUBWAY_API_KEY = "{}";
var SOUNDCLOUD_APT_KEY = "{}";
var YOUTUBE_API_KEY = "AlzaSyDGTj70aoL-q52aXyU3mdzRqAILRHwelrU";
var HUE_BASE = "http://192.168.0.36/api/{}/";
var config = {
	modules: [
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://feed43.com/8024577587648664.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]
};