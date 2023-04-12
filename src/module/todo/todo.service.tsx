import { inject } from 'react-ioc';
import { proxy, useSnapshot } from 'valtio';

import { Account } from '../account/account.component';
import { AccountService } from '../account/account.service';

export class TodoService {
    account = inject(this, AccountService);

    state = proxy({
        count: 0,
        name: 'foo',
    });

    // react 组件中使用, 这里如果需要根据其他模块数据刷新，需要在这里使用其他模块的useSnapshot
    useSnapshot() {
        const value = useSnapshot(this.state);
        const account = this.account.useSnapshot();
        return {
            ...value,
            count: value.count + account.userName,
        };
    }
    inc() {
        ++this.state.count;
    }
    setName(name: string) {
        this.account.setName(
            'TodoAccount' + Math.random() + this.account.state.userName
        );
        this.state.name = name;
    }
}
