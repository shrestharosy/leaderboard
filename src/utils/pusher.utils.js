import * as Pusher from "pusher-js";

import { PUSHER } from "../config/pusher";

let channel;

class PusherUtils {
  instantiatePusher = () => {
    if (PUSHER.APP_KEY) {
      const pusher = new Pusher(PUSHER.APP_KEY, {
        cluster: PUSHER.APP_CLUSTER,
        encrypted: true
      });
      channel = pusher.subscribe("my-channel");
      Pusher.logToConsole = true;
    }
  };

  getChannelInstance = () => {
    return channel;
  };
}

const pusherInstance = new PusherUtils();

export default pusherInstance;
