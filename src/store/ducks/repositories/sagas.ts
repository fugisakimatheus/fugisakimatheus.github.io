import { call, put } from 'redux-saga/effects';
import api from 'services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load(): any {
  try {
    const fugisakimatheus = yield call(api.get, 'users/fugisakimatheus/repos');
    const fugisaki = yield call(api.get, 'users/fugisaki/repos');

    yield put(loadSuccess(fugisakimatheus.data.concat(fugisaki.data)));
  } catch (error) {
    yield put(loadFailure());
  }
}
