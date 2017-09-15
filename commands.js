const commands = {

    list:
        [
            {
                command: "ping",
                description: "Bot answers with \"Pong!\"",
                usage: "ping",
                run: (client, msg, args) => {
                    msg.reply("Pong!");
                }
            },

            {
                command: "help",
                description: "Shows available commands or help for specific command",
                usage: "help [command]",
                run: (client, msg, args) => {
                    let reply = "";

                    // No specific command
                    if (args.length === 0) {
                        commands.list.forEach(command => {
                            reply += command.usage + "\t" + command.description + "\n";
                        })

                    }

                    // Specific command
                    else if (commands.list.indexOf(args[0]) > -1) {
                        let command = commands.list.filter(obj => {
                            return obj.command === args[0]
                        })[0];
                        reply += command.usage + "\t" + command.description;
                    }

                    // Command not found
                    else {
                        reply += "Your command was not found. Try \"help\" to get a list of available commands"
                    }

                    return msg.reply(reply);
                }
            }
        ]
};

module.exports = commands;