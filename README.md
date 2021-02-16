# kaholo-plugin-terragrunt-cli
Terragrunt CLI plugin for Kaholo

## Settings ##

* autoInit - When passed in as false, don’t automatically run Terragrunt init when other commands are run.
    Default value passed is true.
* autoRetry - When passed in as false, don’t automatically retry commands which fail with transient errors
    Default value passed is true.
* path - path to run the terragrunt command from. Required for calling methods when path is not specified in parametrs.


## Method: Init


**Description**

Initialize a working directory containing Terragrunt configuration files. not neccasary unless autoInit is false.

**Parameters**

* Path - path to run terragrunt init from. Overrides the path specified in the settings when passed.
* Options - any other flags and argumants to pass.


## Method: Apply


**Description**

Apply the changes required to reach the desired state of the terragrunt configuration.

**Parameters**

* Path - path to run terragrunt apply from. Overrides the path specified in the settings when passed.
* Options - any other flags and argumants to pass.
* Run All - when passed as true, the command will recursively find terragrunt modules in the current directory 
    tree and run the Terragrunt command on all of them in dependency order.

## Method: Plan


**Description**
Create an execution plan. Terragrunt performs a refresh, unless explicitly disabled, and then determines what 
actions are necessary to achieve the desired state specified in the configuration files

**Parameters**

* Path - path to run terragrunt plan from. Overrides the path specified in the settings when passed.
* Options - any other flags and argumants to pass.
* Run All - when passed as true, the command will recursively find terragrunt modules in the current directory 
    tree and run the Terragrunt command on all of them in dependency order.

## Method: Output


**Description**

Extract the value of an output variable from the state file.

**Parameters**

* Path - path to run terragrunt apply from. Overrides the path specified in the settings when passed.
* Options - any other flags and argumants to pass.
* Run All - when passed as true, the command will recursively find terragrunt modules in the current directory 
    tree and run the Terragrunt command on all of them in dependency order.

## Method: Destroy


**Description**

Destroy the Terragrunt-managed infrastructure.

**Parameters**

* Path - path to run terragrunt apply from. Overrides the path specified in the settings when passed.
* Options - any other flags and argumants to pass.
* Run All - when passed as true, the command will recursively find terragrunt modules in the current directory 
    tree and run the Terragrunt command on all of them in dependency order.