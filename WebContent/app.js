Ext.Loader.setConfig({
	enabled : true
});
Ext.require("Ext.TitleBar");
Ext.require("Ext.MessageBox");

Ext.application({
	name : 'Posimi',

	launch : function() {
		Ext.fly('appLoadingIndicator').destroy();

		var memory = Ext.create("Ext.Panel", {
			style : "background-color:#f00",
			id : 'pnl_1'
		});

		var cookie = Ext.create("Ext.Panel", {
			style : "background-color:#0f0"
		});

		var setting = Ext.create("Ext.Panel", {
			scrollable : true,
			items : [ {
				xtype : "fieldset",
				title : "개인정보",
				
				html : "이 정보는 사용자분께 맞춤 서비스를 드리기 위해 기입하는 것이오니 염려 마시길 바랍니다.",
				style:"background-color:#FFA7A7",
			}, {
				xtype : "fieldset",
				title : "성별",
				items : [ {
					xtype : "radiofield",
					name : "gender",
					label : "남성",
					value : "radio1",
					checked : true
				}, {
					xtype : "radiofield",
					name : "gender",
					label : "여성",
					value : "radio2"
				} ]
			}, {
				xtype : "fieldset",
				title : "나이",
				items : [ {
					xtype : "spinnerfield",
					name : "mspinner",
					label : "연령대",
					minValue : 10,
					maxValue : 100,
					increment : 10,
					value : 50
				} ]
			}, {
				xtype : "fieldset",
				title : "결혼",
				items : [ {
					xtype : "radiofield",
					name : "marriage",
					label : "미혼",
					value : "radio1",
					checked : true
				}, {
					xtype : "radiofield",
					name : "marriage",
					label : "기혼",
					value : "radio2"
				} ]
			}, {
				xtype : "fieldset",
				title : "자녀",
				items : [ {
					xtype : "radiofield",
					name : "sons",
					label : "유",
					value : "radio1",
					checked : true
				}, {
					xtype : "radiofield",
					name : "sons",
					label : "무",
					value : "radio2"
				} ]
			}, {
				xtype : "button",
				ui : "confirm",
				text : "전송",
				iconCls : "action",
				iconMask : true,
				handler : function()  {
					Ext.Msg.confirm("확인", "정말 전송하시겠습니까?", function(buttonId){
						console.log(buttonId);
						if(buttonId =="yes") {
							console.log("예를 눌렀군요");
						} else {
							console.log("아니오를 눌렀군요");
						}
					});
				}
			}

			]

		});

		var btnMemory = Ext.create("Ext.Button", {
			text : "memory",
			ui : "back",
			align : "left",
			handler : function(btn, event) {
				basePanel.setActiveItem(1);
			}
		});

		var btnSetting = Ext.create("Ext.Button", {
			text : "setting",
			ui : "forward",
			align : "right"
		});

		var navi = Ext.create("Ext.TitleBar", {
			docked : "top",
			ui : "light",
			title : "Posimi",
			items : [ btnMemory, btnSetting ]
		});

		var basePanel = Ext.create("Ext.Panel", {
			layout : {
				type : "card"
			},
			items : [ navi, memory, cookie, setting ]
		});

		Ext.Viewport.add(setting);
		Ext.Viewport.add(basePanel);
	}
});
