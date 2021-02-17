import { getTerragruntCmd, runCLICommand } from './helpers';

function execTerragruntInit(action, settings){
	const cmd = getTerragruntCmd(action.params, settings, 'init');
	return runCLICommand(cmd);
}

function execTerragruntApply(action, settings){
	const cmd = getTerragruntCmd(action.params, settings, 'apply');
	return runCLICommand(cmd);
}

function execTerragruntPlan(action, settings){
	const cmd = getTerragruntCmd(action.params, settings, 'plan');
	return runCLICommand(cmd);
}

function execTerragruntDestroy(action, settings){
	const cmd = getTerragruntCmd(action.params, settings, 'destroy');
	return runCLICommand(cmd);
}

function execTerragruntOutput(action, settings){
	const cmd = getTerragruntCmd(action.params, settings, 'init');
	return runCLICommand(cmd);
}

export default {
	execTerragruntInit,
	execTerragruntPlan,
	execTerragruntApply,
	execTerragruntOutput,
	execTerragruntDestroy
};