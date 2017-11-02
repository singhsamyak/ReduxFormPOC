import { watchEventChannel } from './PrefillSaga';

export default function* rootSaga(dispatch) {
  yield [ watchEventChannel() ];
}
