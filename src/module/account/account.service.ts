import { proxy, useSnapshot } from 'valtio';

export const state = proxy({
    userName: '',
    
});
export class AccountService {
    get state() {
        return useSnapshot(state);
    }
    
    setName(name: string) {
        state.userName = name;
    }
}
