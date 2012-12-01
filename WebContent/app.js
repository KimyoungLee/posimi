Ext.Loader.setConfig({enabled: true});
Ext.require("Ext.TitleBar");
Ext.require("Ext.MessageBox");

var data = [
    {
    	date: 0,
    	msg: "한글사랑 나라사랑",
    	checkd: false
    },
    {
    	date: 1354344478119,
    	msg: "부모님사랑 나라사랑",
    	checkd: false
    },
    {
    	date: 1354344478119,
    	msg: "할아부지사 나라사랑",
    	checkd: false
    },
    {
    	date: 1354344478119,
    	msg: "할머니사랑 나라사랑",
    	checkd: false
    },
    {
    	date: 1354344478119,
    	msg: "가족사랑 나라사랑",
    	checkd: false
    },
];

Ext.application({
    name: 'Posimi',

    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();

        var listHtml = "<ul id='list' class='memory-list'></ul>";

        var listComposit = function() {
        	var i = 0,
        	list = document.getElementById("list"),
        	articles = list.getElementsByTagName("li");

        	//기존리스트제거
        	for(i = 0; i < articles.length; i++) list.removeChild(articles[i]);

        	//새로 리스트 그리기
        	for(var i = 0; i < data.length; i++) {
        		var text = document.createTextNode(data[i].msg),
        		li = document.createElement("li");
        		
        		li.appendChild(text);
        		li.addEventListener("click", function(msg){
        			return function(e) {
            			Ext.Msg.alert("내용", msg);
        			};
        		}(data[i].msg), true);

        		list.appendChild(li);
        	}
        };
        
    	var memory = Ext.create("Ext.Panel", {
    		html: listHtml,
    		scrollable: true
    	});
    	
    	var basePanel = Ext.create("Ext.Panel", {
    		layout: {
    			type: "card",
    			animation: {
    				type: "slide",
    				direction: "left"
    			}
    		},
    		items: [
    		    memory
    		]
    	});
    	
    	Ext.Viewport.add(basePanel);
    	
    	

    	//after on loaded
    	(function(){
    		listComposit();
    	}());
    }
});
