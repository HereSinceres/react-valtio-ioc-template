import { proxy, useSnapshot } from 'valtio';

import { ValtioBaseStore } from '../common/base/valtio.base.store';

export type StateType = {
    tk: string;
};

export class AccountService extends ValtioBaseStore<StateType> {
    constructor() {
        super({
            tk: '',
        });
    }

    setTk(name: string) {
        this.state.tk = name;
    }
}
