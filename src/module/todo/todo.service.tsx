import { inject, useInstance } from 'react-ioc';
import { proxy, useSnapshot } from 'valtio';

import { Account } from '../account/account.component';
import { AccountService } from '../account/account.service';
import { ValtioBaseStore } from '../common/base/valtio.base.store';

export type StateType = {
    count: number;
    name: string;
};

export class TodoService extends ValtioBaseStore<StateType> {
    account = inject(this, AccountService);

    constructor() {
        super({
            count: 0,
            name: '',
        });
    }

    inc() {
        ++this.state.count;
    }
    setName(name: string) {
        // TODO:如何使用另一个service里面的数据呢
        this.account.setTk(
            'TodoAccount' + Math.random() + this.account._state.tk
        );
        this.state.name = name;
    }
}
export const useComputedTwoServcice  = ()=>{
    const state = useInstance(AccountService).useSnapshot();
    const todoState = useInstance(TodoService).useSnapshot();
    return `${state.tk} ${todoState.name}`;
}
