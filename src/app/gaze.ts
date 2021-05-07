import {Observable, Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';

export const getGaze = function(host: string): Observable<any> {
  const ws = new WebSocket(`ws://${host}/websocket`, 'g3api');
  const gaze$ = new Subject();
  const keepaliveMsg = JSON.stringify({method: 'POST', id: 2, path: '//rudimentary!keepalive','body':[]});
  let intervalId: any;
  ws.addEventListener('open', () => {
    ws.send(JSON.stringify({method: 'POST', id: 1, path: '//rudimentary:gaze', body: null}));
    let signalId: number;
    ws.addEventListener('close', () => {
      clearInterval(intervalId);
    });
    ws.addEventListener('message', (msg2: MessageEvent<any>) => {
      signalId = JSON.parse(msg2.data)['body'];
      intervalId = setInterval(() => ws.send(keepaliveMsg), 3000);
      ws.addEventListener('message', (msg: MessageEvent<any>) => {
        const data = JSON.parse(msg.data);
        if (data.signal === signalId) {
          gaze$.next(data.body[1]);
        }
      });
    }, {once: true});
  });
  return gaze$.pipe(
    filter((obj) => Object.keys(obj).length > 0),
    map((gaze: any) => gaze.gaze3d)
  );
}
