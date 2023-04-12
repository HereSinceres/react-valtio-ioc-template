import React from 'react';
import { useInstance } from 'react-ioc';

import { AccountService } from './account.service';

type Props = {};

export const Account = (props: Props) => {
    const account = useInstance(AccountService);
    return (
        <>
            <div>{account.state.userName}</div>
            <div
                onClick={() => {
                    account.setName(`${Math.random()}`);
                }}
            >
                随机username
            </div>
        </>
    );
};
