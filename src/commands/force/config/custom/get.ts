import { flags, SfdxCommand } from '@salesforce/command';
import { Messages, ConfigFile } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

const FILE_NAME = 'custom_config.json';

export default class CustomConfigGet extends SfdxCommand {

    public static description = 'get custom config var value.';

    public static examples = [
    `$ sfdx force:config:custom:get -k laststoredate
    `
    ];

    public static args = [{name: 'file'}];

    protected static flagsConfig = {
        // flag with a value (-n, --name=VALUE)
        key: flags.string({char: 'k', description: 'The key name.', required: true})
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

        console.log('*********************************************************');
        console.log('key: ' + this.flags.key);
        console.log('value: ' + config.get(this.flags.key));
        console.log('*********************************************************');
        
        // Return an object to be displayed with --json
        return {  
            key: this.flags.key, 
            value: config.get(this.flags.key)
        };
    }
}
