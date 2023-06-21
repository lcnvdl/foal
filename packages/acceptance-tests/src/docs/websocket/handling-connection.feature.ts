// FoalTS
import { SocketIOController, WebsocketContext } from 'foalts2-socket.io';

describe('Feature: Handling connection', () => {

  it('Example: simple example that tests that the code compiles.', async () => {

    /* ======================= DOCUMENTATION BEGIN ======================= */

    // tslint:disable-next-line
    class WebsocketController extends SocketIOController {

      onConnection(ctx: WebsocketContext) {
        // ...
      }

    }

    /* ======================= DOCUMENTATION END ========================= */

  });

});
