const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Renvoie le nom et le nombre de membre du serveur')        ,
    async execute(interaction) {
        await interaction.reply("le nom du serveur est " + interaction.guild.name + "qui a été crée le " + interaction.guild.date)
    },
}