/**
 * Parser 2 version of qrcode.js
 * Ubiquity 0.5+ compatible
 */


CmdUtils.makeSearchCommand({
  name: "qrcode",
  url: "http://chart.apis.google.com/chart?cht=qr&chld=M|4&chs=350x350&chl={QUERY}",
  description: "Generates a QR Code with the specified text encoded."
});

