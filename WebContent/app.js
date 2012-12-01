Ext.Loader.setConfig({enabled: true});
Ext.require("Ext.TitleBar");

Ext.application({
    name: 'Posimi',

    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();
    	
    	var memory = Ext.create("Ext.Panel", {
    		style: "background-color:#f00",
    		id : 'pnl_1' 
    	});

    	var cookie = Ext.create("Ext.Panel", {
    		style: "background-color:#0f0"
    	});

    	var setting = Ext.create("Ext.Panel", {
    		items : [
//    		     { 
//    		    	 xtype : 'picker',
//    		    	 slots: {
//    				    	title: "환경설정",
//    				    	items:[
//    				    	       {
//    				    	    	   xtype: "picker", name: "age", title: "나이", 
//    				    	    	   data: [
//    				    	               {text: "10대", value: 10},
//    				    	               {text: "20대", value: 20},
//    				    	               {text: "30대", value: 30},
//    				    	               {text: "40대", value: 40},
//    				    	               {text: "50대", value: 50}
//    				    	           ]
//    				    	       }
//    				        ]
//    		    		}
//    		     }
				{
					xtype: "fieldset",
					items: [
						{
							xtype: "selectfield",
					    	name: "age",
					    	label: "나이",
					    	options: [
								{text: "10대", value: 10},
								{text: "20대", value: 20},
								{text: "30대", value: 30},
								{text: "40대", value: 40},
								{text: "50대", value: 50}
					    	]
						},
						{
							xtype: "selectfield",
					    	name: "gender",
					    	label: "성별",
					    	options: [
								{text: "남자", value: "male"},
								{text: "여자", value: "female"}
					    	]
						}
					]
				}
    		]
    	});
    	
    	var btnMemory = Ext.create("Ext.Button", {
    		text: "memory",
    		ui: "back",
    		align: "left",
    		handler: function(btn, event) {
    			basePanel.setActiveItem(1);
    		}
    	});
    	
    	var btnSetting = Ext.create("Ext.Button", {
    		text: "setting",
    		ui: "forward",
    		align: "right"
    	});
    	
    	var navi = Ext.create("Ext.TitleBar", {
    		docked: "top",
    		ui: "light",
    		title: "Posimi",
    		items: [btnMemory, btnSetting]
    	});
    	
    	var basePanel = Ext.create("Ext.Panel", {
    		layout: {
    			type: "card"
    		},
    		activeItem: 0,
    		items: [navi, memory, cookie, setting]
    	});

        Ext.Viewport.add(basePanel);
//    	Ext.Viewport.add(setting);
    }
});
