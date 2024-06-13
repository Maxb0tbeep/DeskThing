import { switchView } from './launchpadUtil/launchpadUtil.js';
import { server, sendError } from '../../util/socketHandler.js'

server.on('connection', async (socket) => {
  socket.on('message', async (message) => {
    try {
      const parsedMessage = JSON.parse(message);
      if (parsedMessage.app == 'launchpad') {
        switch (parsedMessage.type) {
            case 'set':
            await handleSetRequest(socket, parsedMessage);
          break;
          default:
            console.log('Unknown type', parsedMessage.type);
            break;
        }
      }
    } catch (e) {
      console.log('There was an error in LaunchpadHandler');
    }
  })
})


const handleSetRequest = async (socket, parsedMessage) => {
  try {
    switch (parsedMessage.request) {
      case 'lp_view':
        await switchView(parsedMessage.data);
        break;
      default:
        await sendError(socket, 'Unknown Set Request', parsedMessage.request);
        break;
    }
  } catch (e) {
    console.error('SPOTIFY: Error in HandleSetRequest', e)
  }
}