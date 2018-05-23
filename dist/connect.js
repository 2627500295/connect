import { connect as rConnect } from 'react-redux';
// tslint:disable:no-any
// tslint:disable:typedef
// tslint:disable:interface-name
// tslint:disable:no-empty-interface
export var connect = function (mapStateToProps, mapDispatchToProps, mergeProps, options) {
    return function (Component) {
        return rConnect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Component);
    };
};
export { connect as default };
