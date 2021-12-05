import React, { useEffect, useState } from 'react';
import HOCDemo1 from './HOCDemo1';
import DataSource from './DataSource';
import WithSubscription from './WithSubscription'

export default function HOCHome() {

    DataSource.Init();

    function getData1() {
        
        return [...DataSource.getData1()];
    };

    function getData2() {
        return [...DataSource.getData2()];
    };
    let Component1 = WithSubscription(HOCDemo1, getData1);
    let Component2 = WithSubscription(HOCDemo1, getData2);

    return (
        <div style={{display: 'flex'}}>
            <Component1  />
            <Component2  />
            
        </div>
    )
}
