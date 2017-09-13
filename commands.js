var commands = [

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
            var reply = "";

            // No specific command
            if (!args) {
                commands.forEach(command => {
                    reply += command.usage + "\t" + command.description + "\n";
                })

            }

            // Specific command
            else if (commands.indexOf(args[0]) > -1) {
                let command = commands.filter( obj => {return obj.command === args[0]})[0];
                reply += command.usage + "\t" + command.description;
            }

            // Command not found
            else {
                reply += "Your command was not found. Try \"help\" to get a list of available commands"
            }

            return msg.reply(reply);
        }
    }
];

exports.commands;