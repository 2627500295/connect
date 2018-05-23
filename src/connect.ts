import { connect as rConnect } from 'react-redux';
import * as React from 'react';

// tslint:disable:no-any
// tslint:disable:typedef
// tslint:disable:interface-name
// tslint:disable:no-empty-interface
export const connect: any = (mapStateToProps: any, mapDispatchToProps: any, mergeProps: any, options: any) => {
  return (Component: React.ComponentType<any>) => {
    return rConnect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Component);
  };
};

export { connect as default };
