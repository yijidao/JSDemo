import React from 'react';
import DotSyntax, {GetComponentAtRuntime} from './Demo1';
import {DefaultValueProps, ExpandProps} from './Demo2';
import {UseJsExpressionAsChild, UseFunctionAsChild, IgnoreElement} from './Demo3'


export default function index() {
    return (
        <div>
            <DotSyntax />
            <GetComponentAtRuntime type='hello' />
            <DefaultValueProps notSetValue />
            <ExpandProps />
            <UseJsExpressionAsChild />
            <UseFunctionAsChild />
            <IgnoreElement />
        </div>
    )
}
