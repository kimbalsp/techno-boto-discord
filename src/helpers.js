export function containsBotCommand(message) {
  message = message.toLowerCase()
  let urlFound = false
  if (message.includes('!play') ||
      message.includes('!skip')) {
        urlFound = true
  }
  return urlFound
}


export function isTwitchUrl(message) {
  message = message.toLowerCase()
  return message.includes('twitch.tv')
}
