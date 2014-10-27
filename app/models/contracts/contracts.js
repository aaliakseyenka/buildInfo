define([
	'models/contracts/buildTypes',
	'models/contracts/buildStates',
	'models/contracts/stepStates',
	], function ( BuildTypes, BuildStates, StepStates) {
	return {
		buildStates: BuildStates,
		buildTypes: BuildTypes,
		stepStates: StepStates
	}
});