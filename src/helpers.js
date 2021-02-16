const child_process = require("child_process")

function getTerragruntCmd(params, settings, command){
	const path = params.path | settings.path | undefined;
    const runAll = params.runAll | undefined;
    const autoInit = settings.autoInit | undefined;
    const autoRetry = settings.autoInit | undefined;
    const opts = params.options | '';

    if (typeof path == 'undefined'){
        throw('no path specified');
    }

	return `cd ${path} && terragrunt ${runAll ? 'run-all ' : ''}${command} --terragrunt-non-interactive 
${autoInit == false ? '--terragrunt-no-auto-init ' : ''}${autoRetry == false ? '--terragrunt-no-auto-retry ' : ''}${opts}`
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


module.exports = {
    getTerragruntCmd,
    runCLICommand
};