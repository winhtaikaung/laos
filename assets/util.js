/***
 *
 * Utilization funtions  
 */

UTIL = {
	
	//Get dataValue
	getValue : function(json, de, orgUnit, pe){
		for (var i=0; i < json.rows.length; i++){
				if (json.rows[i][0] == de && json.rows[i][1] == orgUnit && json.rows[i][2] == pe)
				{
					return json.rows[i][3]== null ? 0 : parseInt(json.rows[i][3]);
				}
			}
		return 0;
	}
};