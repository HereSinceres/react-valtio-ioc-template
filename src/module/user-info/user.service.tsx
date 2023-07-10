import { useInstance } from 'react-ioc';

import { ValtioBaseStore } from '../common/base/valtio.base.store';

export type StateType = {
    name: string;
    age: number;
    hobby: string[];
};

export class UserInfoService extends ValtioBaseStore<StateType> {
    constructor() {
        super({
            name: '默认',
            age: 0,
            hobby: [
                'JavaScript',
                'React',
                'Redux',
                'Angular',
                'AngularJS',
                'TypeScript',
            ],
        });
    }
    setName = () => {
        this.state.name = Math.random().toString();
    };
}

export const useComputedInfoDemeo = () => {
    const { age, hobby } = useInstance(UserInfoService).useSnapshot();
    return `${age} ${hobby.join(',')}`;
};
