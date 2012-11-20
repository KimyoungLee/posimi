Ext.define("FC.view.Main", {
    extend : 'Ext.Container',
    requires : ['Ext.TitleBar'],
    config : {
		layout : {
			type : 'fit'
		},
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
