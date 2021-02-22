const child_process = require("child_process")

function getTerragruntCmd(params, settings, command){
    const runAll = params.runAll ? `run-all ` : ``
    const autoInit = settings.noAutoInit ? `--terragrunt-no-auto-init ` : ``;
    const autoRet = settings.noAutoRetry ? `--terragrunt-no-auto-init ` : ``;
    const opts = (params.options || ``).trim();
	const autoApprove = command !== 'init' ? `--auto-approve ` : ``;

	return `terragrunt ${runAll}${command} --terragrunt-non-interactive ${autoApprove}${autoInit}${autoRet}${opts}`;
}

async function runCLICommand(command, workingDir){
	return new Promise((resolve,reject) => {
		child_process.exec(command, {cwd: workingDir}, (error, stdout, stderr) => {
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

async function execTerragruntInit(action, settings){
	const workingDir = action.params.workingDir;
	if (!workingDir){
		throw `No working directory specified`;
	}
	const cmd = getTerragruntCmd(action.params, settings, `init`);
	return runCLICommand(cmd, workingDir);
}

async function execTerragruntApply(action, settings){
	const workingDir = action.params.workingDir;
	if (!workingDir){
		throw `No working directory specified`;
	}
	const cmd = getTerragruntCmd(action.params, settings, `apply`);
	return runCLICommand(cmd, workingDir);
}

async function execTerragruntPlan(action, settings){
	const workingDir = action.params.workingDir;
	if (!workingDir){
		throw `No working directory specified`;
	}
	const cmd = getTerragruntCmd(action.params, settings, `plan`);
	return runCLICommand(cmd, workingDir);
}

async function execTerragruntDestroy(action, settings){
	const workingDir = action.params.workingDir;
	if (!workingDir){
		throw `No working directory specified`;
	}
	const cmd = getTerragruntCmd(action.params, settings, `destroy`);
	return runCLICommand(cmd, workingDir);
}

module.exports = {
    execTerragruntInit,
	execTerragruntPlan,
	execTerragruntApply,
	execTerragruntDestroy
};
