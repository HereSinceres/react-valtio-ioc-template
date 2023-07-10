import { useInstance } from 'react-ioc';

import { StateType, ValtioBaseStore } from '../valtio.base.store';

export class UserInfoService extends ValtioBaseStore<
    StateType,
    UserInfoService
> {
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
    return `${age} ${hobby.join(',')}`
};
