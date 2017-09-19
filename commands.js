const commands = {

    list:
        [
            {
                command: 'ping',
                description: 'Bot answers with \'Pong!\'',
                usage: 'ping',
                run: (client, msg, args) => {
                    msg.reply('Pong!');
                }
            },

            {
                command: 'help',
                description: 'Shows available commands or help for specific [command]',
                usage: 'help [command]',
                run: (client, msg, args) => {
                    let reply = '';

                    // No specific command
                    if (args.length === 0) {
                        commands.list.forEach(command => {
                            reply += '\n' + command.usage + '\t ++ ' + command.description;
                        });
                        return msg.reply(reply);
                    }

                    else {
                        let foundCommand = getByCommand(commands.list, args[0]);

                        // Specific command
                        if (foundCommand) {
                            reply += foundCommand.usage + '\t ++ ' + foundCommand.description;
                            return msg.reply(reply);
                        }

                        // Command not found
                        reply += 'Your command was not found. Try \'help\' to get a list of available commands'
                        return msg.reply(reply);
                    }

                }
            }
        ]
};

function getByCommand(arr, value) {

    for (var i=0, iLen=arr.length; i<iLen; i++) {

        if (arr[i].command === value) return arr[i];
    }

}

module.exports = commands;