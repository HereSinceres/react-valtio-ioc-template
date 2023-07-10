import { provider, useInstance } from 'react-ioc';

import { StateType, useComputedViewStore } from '../valtio.base.store';
import { UserInfoService, useComputedInfoDemeo } from './UserInfoService';

type Props = {};
export const ViewAgeDemo = (props: Props) => {
    const { age } = useInstance(UserInfoService).useSnapshot();
    return (
        <div>
            按需刷新： {age} {Math.random()}
        </div>
    );
};
export const ViewNameDemo = (props: Props) => {
    const { name } = useInstance(UserInfoService).useSnapshot();
    return (
        <div>
            按需刷新： {name} {Math.random()}
        </div>
    );
};

export const ActionComponentDemo = () => {
    const service = useInstance(UserInfoService);
    return (
        <div>
            <button onClick={service.setName}>
                按需刷新： Change Name
                {Math.random()}
            </button>
        </div>
    );
};

export const ComponentViewWithAllStateAndActionDemo = () => {
    const service = useComputedViewStore<StateType, UserInfoService>(
        UserInfoService
    );
    return (
        <div>
            一直刷新：{service.name} {Math.random()} 因为监听了所有状态
        </div>
    );
};
export const ComponentActionWithAllStateAndActionDemo = () => {
    const service = useComputedViewStore<StateType, UserInfoService>(
        UserInfoService
    );
    return (
        <div>
            <button onClick={service.setName}>
                一直刷新： Change Name
                {Math.random()} 因为监听了所有状态
            </button>
        </div>
    );
};

const ComputedViewComponent = () => {
    const str = useComputedInfoDemeo();
    return (
        <div>
            computed 属性 {str} {Math.random()}
        </div>
    );
};
const ValtioDemoComponent = () => {
    return (
        <>
            <ViewAgeDemo />
            <ViewNameDemo />
            <ActionComponentDemo />
            <ComponentActionWithAllStateAndActionDemo />
            <ComponentViewWithAllStateAndActionDemo />
            <hr />
            <ComputedViewComponent />
        </>
    );
};
export const ValtioDemo = provider(UserInfoService)(ValtioDemoComponent);
