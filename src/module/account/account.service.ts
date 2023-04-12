import { proxy, useSnapshot } from 'valtio';

export class AccountService {
    state = proxy({
        userName: '',
    });
    // react 组件中使用
    useSnapshot() {
        return useSnapshot(this.state);
    }

    setName(name: string) {
        this.state.userName = name;
    }
}
