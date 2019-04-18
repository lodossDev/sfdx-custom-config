import { SfdxCommand } from '@salesforce/command';
import { Messages, ConfigFile } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

const FILE_NAME = 'custom_config.json';

export default class CustomConfigList extends SfdxCommand {

    public static description = 'lists all custom config vars.';

    public static examples = [
    `$ sfdx force:config:custom:list
    `
    ];

    public static args = [{name: 'file'}];

    protected static flagsConfig = {
    };

    // Comment this out if your command does not require an org username
    protected static requiresUsername = false;

    // Comment this out if your command does not support a hub org username
    protected static supportsDevhubUsername = false;

    // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
    protected static requiresProject = false;

    public async run(): Promise<AnyJson> {
        const config = await ConfigFile.create({
            isGlobal: true,
            filename: FILE_NAME
        });
        
        config.forEach((key, value) => {
            console.log('*********************************************************');
            console.log('key: ' + key);
            console.log('value: ' + value);
            console.log('*********************************************************');
        });

        // Return an object to be displayed with --json
        return config.entries();
    }
}
