Ext.Loader.setConfig({enabled: true});
Ext.require("Ext.TitleBar");
Ext.require("Ext.MessageBox");

var data = [
    	"0한글사랑 나라사랑한글사랑 나라사랑한글사랑\n나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑",
    	"1부모님사랑 나라사랑, 한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑",
    	"2할아부지사 나라사랑,한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑",
    	"3할머니사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑",
    	"4할머니사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑",
    	"5할머니사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑",
    	"6할머니사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑",
    	"7할머니사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑",
    	"8할머니사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑",
    	"9할머니사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑",
    	"10할머니사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑한글사랑 나라사랑"
    ];

Ext.application({
    name: 'Posimi',

    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();

		var navi = Ext.create("Ext.TitleBar", {
			docked : "top",
			ui : "light",
			title : "Posimi"
		});
		

    	var basePanel = Ext.create("Ext.Panel", {
    		layout: {
    			type: "vbox",
    			animation: {
    				type: "slide",
    				direction: "left"
    			}
    		},
    		fullscreen: true,
    		items: [
    		    navi
    		],
    		html: "<div class='wrap'><img src='./img/posimi.png' id='posimi'><div class='text-bound'><div id='text'></div></div></div> <div id='wrap'></div>"
    	});

    	Ext.Viewport.add(basePanel);
    	
    	//after loaded
    	var opened = false;
    	var posimi = document.getElementById("posimi");
    	var wrap = document.getElementById("wrap");
    	wrap.addEventListener("click", function(e) {
    		opened = !opened;
    		
    		console.log("check #1");
    		
    		if(opened) {
    			text();
    			posimi.src = "./img/posimi_open.png";
    			document.getElementById("text").style.display = "block";
    		} 
    		else {
    			posimi.src = "./img/posimi.png";
    			document.getElementById("text").style.display = "none";
    		}
    	}, false);
    	
    	
    	var text = function() {
    		var num = Math.round(Math.random() * 10),
    		text = document.getElementById("text");
    		text.innerHTML = data[num];
    		console.log("num : " + num);
    		console.log(data[num]);
    	};
    }
});
