import { call, take, put } from 'redux-saga/effects';
import { VINIT_READY, PREFILL_USER_INFO } from '../actions/types';
import { eventChannel, buffers } from 'redux-saga';

////////// Simulating external event that notifies userInfo ready ////////
import Vent from 'vent';
const vent = new Vent();

window.onload = () => {
  vent.trigger('userInfoReady');
}

const userInfoSubscriber = emitter => {
  vent.on('userInfoReady', () => {
    emitter({
      type: VINIT_READY,
      userInfo: {
        firstName: 'Thomas',
        lastName: 'Jefferson',
        email: 'tj@max.com'
      }
    });
  });
  return function() {
    vent.off('userInfoReady');
  }
};

const buildUserInfoEventChannel = () => eventChannel(userInfoSubscriber);
//////////////////////////////////////////////////////////////////////////

export function* watchEventChannel() {
  const channel = yield call(buildUserInfoEventChannel, null);

  while(true) {
    const vinitInfo = yield take(channel);
    if (vinitInfo) {
      yield put({
        type: PREFILL_USER_INFO,
        userInfo: vinitInfo.userInfo
      });
    }
  }
}
