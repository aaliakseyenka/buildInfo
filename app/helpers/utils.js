
define(['models/contracts/contracts',], function (contracts) {
    return utilities = {
        isDate: function (value) {
        	if (value) {
        		return value.toString() === '[object Date]';
        	}
        	return false;
        },

        formatDateTime: function(date) {
            return $.format.date(date, 'm/d/yyyy h:mmp');
        },

        formatTimeDate: function(date) {
            return $.format.date(date, 'h:mmp - m/d/yyyy');
        },

        getBuildStepClass: function(state){
            for(var step in contracts.stepStates){
                if(contracts.stepStates[step] == state){
                    return step.toLowerCase();
                }
            }
        },

        getBuildClass: function(state){
            for(var step in contracts.buildStates){
                if(contracts.buildStates[step] == state){
                    return step.toLowerCase();
                }
            }
        }
    }
});