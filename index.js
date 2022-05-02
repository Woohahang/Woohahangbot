const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag}에 로그인하였습니다!`);
});

client.on('message', msg => {
  if (msg.content === '선오') {
    msg.channel.send("**```cs\n'선오'\n롤 : 팀운만좋은사람, 랭킹개나줘\n스팀 : 1132229242```**");
  }
  if (msg.content === "숩") {
    msg.channel.send("**```cs\n'숩'\n롤 : flffprtm\n마인크래프트 : Suup_p```**");
  }
  if (msg.content === "현우") {
    msg.channel.send("**```cs\n'현우'\n롤 : 소가웃으면우하항, 소가웃으면우하하\n스팀 : 351420254```**");
  }
  if (msg.content === "민혁") {
    msg.channel.send("**```cs\n'민혁'\n롤 : 그날만기다립니다```**");
  }
  if (msg.content === "시은") {
    msg.channel.send("**```cs\n'시은'\n롤 : 미묘찌```**");
  }
  if (msg.content === "현지") {
    msg.channel.send("**```cs\n'현지'\n롤 : 현지요정```**");
  }
  if (msg.content === "보근") {
    msg.channel.send("**```cs\n'보근'\n롤 : twice나연존예```**");
  }
  if (msg.content === "승찬") {
    msg.channel.send("**```cs\n'승찬'\n롤 : 숭 찬```**");
  }
  if (msg.content === "임세계") {
    msg.channel.send("**```cs\n'임세계'\n롤 : B care full```**");
  }
  if (msg.content === "나나") {
    msg.channel.send("**```cs\n'나나'\n롤 : 날 하```**");
  }
  if (msg.content === "미칼") {
    msg.channel.send("**```cs\n'미칼'\n롤 : 믿지마던질거야```**");
  }

});

client.login('OTcwNDEzNDc0NjQxNTA2Mzc0.Ym7l-Q.WSkUONMoUPhlGBr1kdBqkuemhK0');