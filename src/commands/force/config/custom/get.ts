import { flags, SfdxCommand, SfdxResult } from '@salesforce/command';
import { Messages, ConfigFile } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

const FILE_NAME = 'custom_config.json';

export default class CustomConfigGet extends SfdxCommand {

    public static description = 'return a specific config entry.';

    public static examples = [
    `$ sfdx force:config:custom:get -k laststoredate
    `
    ];

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

        const data = JSON.parse(config.get(this.flags.key) as string);

        // Return an object to be displayed with --json
        return [{  
            key: this.flags.key, 
            value: data.value,
            desc: data.desc
        }];
    }

    public static result: SfdxResult = {
        tableColumnData: {
            columns: [
                { key: 'key', label: 'Key' },
                { key: 'value', label: 'Value' },
                { key: 'desc', label: 'Description' }
            ]
        },
        display() {
            this.ux.table(<[]>this.data, this.tableColumnData);
        }
    };
}
