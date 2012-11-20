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
