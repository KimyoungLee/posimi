Ext.define("FC.view.Main", {
    extend : 'Ext.Panel',
    requires : ['Ext.TitleBar'],
    id : 'MainPanel',
    config : {
		layout : 'card',
		items : [
		         {
		        	 xtype : 'toolbar',
			         docked : 'top',
			         title : 'Fortune Cookies!'
		         },
		         { 
                     xtype : 'image',
                     id : 'idImage',
                     
                     src : 'http://www.sencha.com/img/sencha-large.png',
                     listeners: {
                         tap: function (img, evt) {
                        	//var cssPos="";
                        	img.setSrc("http://cfs9.tistory.com/image/3/tistory/2008/09/22/00/45/48d66c0f79d27");
                        	img.setHtml("<div id='imgPos' style='position:absolute;top:100px; left:100px '><p>You open the Cookies</p></div>");
                        	//img.setShowAnimation('slideIn');
                        	//Ext.Msg.alert('You clicked the image');
                                     
                         } 
                     } 
             },
		         {
		        	 xtype : 'Cookies'
		         },
		         {
		        	 xtype : 'toolbar',
		        	 docked : 'bottom',
		        	 layout : {
		        	 	pack : 'center'
		         	}, 
		        	 items : [
		        	      {
		        	         xtype : 'New'       	          
		        		  },
		        		  {
		        			  xtype : 'spacer'
		        		  },
		        		  {
		        	          xtype : 'button',
		        	          text : 'Home',
		        	          handler : function(btn){
		        	        	  
		        	          },
			        		  iconCls: 'home',
		        	          iconMask : true
		        		  },
		        		  {
		        			  xtype : 'spacer'
		        		  },
		        		  {
		        			  xtype : 'Settings'
		        		  },
		        	]
		         }
   		]
    }
});
