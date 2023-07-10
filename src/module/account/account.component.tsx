import React from 'react';
import { useInstance } from 'react-ioc';

import { AccountService } from './account.service';

type Props = {};

export const Account = (props: Props) => {
    const account = useInstance(AccountService);
    return (
        <>
            <div>{account.useSnapshot().tk}131312</div>
            <div
                onClick={() => {
                    account.setTk(`Tk:${Math.random()}`);
                }}
            >
                随机Tk
            </div>
        </>
    );
};
