const child_process = require("child_process")

function getTerragruntCmd(params, settings, command){
	const path = params.path || settings.path;
    const runAll = params.runAll;
    const noAutoInit = settings.noAutoInit;
    const noAutoRetry = settings.noAutoRetry;
    const opts = params.options;

    if (typeof path == `undefined`){
        throw(`no path specified`);
    }
	
	return `cd ${path} && terragrunt ${runAll ? `run-all ` : ``}${command} --terragrunt-non-interactive ${command !== 'init' ? `--auto-approve ` : ``}${noAutoInit ? `--terragrunt-no-auto-init ` : ``}${noAutoRetry? `--terragrunt-no-auto-retry ` : ``}${opts ? opts : ``}`;
}

function runCLICommand(command){
	return new Promise((resolve,reject) => {
		child_process.exec(command, (error, stdout, stderr) => {
			if (error) {
			   return reject(`exec error: ${error}`);
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`);
			}
			return resolve(stdout);
		});
	})
}

function execTerragruntInit(action, settings){
	const cmd = getTerragruntCmd(action.params, settings, `init`);
	return runCLICommand(cmd);
}

function execTerragruntApply(action, settings){
	const cmd = getTerragruntCmd(action.params, settings, `apply`);
	return runCLICommand(cmd);
}

function execTerragruntPlan(action, settings){
	const cmd = getTerragruntCmd(action.params, settings, `plan`);
	return runCLICommand(cmd);
}

function execTerragruntDestroy(action, settings){
	const cmd = getTerragruntCmd(action.params, settings, `destroy`);
	return runCLICommand(cmd);
}

function execTerragruntOutput(action, settings){
	const cmd = getTerragruntCmd(action.params, settings, `init`);
	return runCLICommand(cmd);
}

module.exports = {
    execTerragruntInit,
	execTerragruntPlan,
	execTerragruntApply,
	execTerragruntOutput,
	execTerragruntDestroy
};
