import { inject } from 'react-ioc';
import { proxy, useSnapshot } from 'valtio';

import { Account } from '../account/account.component';
import { AccountService } from '../account/account.service';

export const state = proxy({
    count: 0,
    name: 'foo',
});
export class TodoService {
    account = inject(this, AccountService);
    get state() {
        const value = useSnapshot(state);
        return {
            ...value,
            count: value.count + this.account.state.userName,
        };
    }
    inc() {
        ++state.count;
    }
    setName(name: string) {
        this.account.setName('TodoAccount'+Math.random())
        state.name = name;
    }
}
