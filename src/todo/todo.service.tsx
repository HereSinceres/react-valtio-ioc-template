import { proxy, useSnapshot } from 'valtio';

export const state = proxy({
    count: 0,
    name: 'foo',
});
export class TodoService {
    get state() {
        return useSnapshot(state);
    }
    inc() {
        ++state.count;
    }
    setName(name: string) {
        state.name = name;
    }
}
