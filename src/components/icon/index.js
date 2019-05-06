import React, { forwardRef } from 'react';
import Icon from './Icon';

const cameraSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-camera.svg');
const checkmarkSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-checkmark.svg');
const closeSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-close.svg');
const crossmarkSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-crossmark.svg');
const desktopSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-desktop.svg');
const editSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-edit.svg');
const entitySvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-entity.svg');
const eyeOffSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-eye-off.svg');
const eyeSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-eye.svg');
const infoSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-info.svg');
const laptopSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-laptop.svg');
const mobileSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-mobile.svg');
const otherSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-other.svg');
const userSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-user.svg');
const plusSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-plus.svg');
const refreshSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-refresh.svg');
const tabletSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-tablet.svg');
const warningSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-warning.svg');

const CameraIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ cameraSvg } />);
const CheckmarkIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ checkmarkSvg } />);
const CloseIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ closeSvg } />);
const CrossmarkIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ crossmarkSvg } />);
const DesktopIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ desktopSvg } />);
const EditIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ editSvg } />);
const EntityIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ entitySvg } />);
const EyeOffIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ eyeOffSvg } />);
const EyeIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ eyeSvg } />);
const InfoIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ infoSvg } />);
const LaptopIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ laptopSvg } />);
const MobileIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ mobileSvg } />);
const OtherIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ otherSvg } />);
const UserIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ userSvg } />);
const PlusIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ plusSvg } />);
const RefreshIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ refreshSvg } />);
const TabletIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ tabletSvg } />);
const WarningIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ warningSvg } />);

export default Icon;
export {
    CameraIcon,
    CheckmarkIcon,
    CloseIcon,
    CrossmarkIcon,
    DesktopIcon,
    EditIcon,
    EntityIcon,
    EyeOffIcon,
    EyeIcon,
    InfoIcon,
    LaptopIcon,
    MobileIcon,
    OtherIcon,
    UserIcon,
    PlusIcon,
    RefreshIcon,
    TabletIcon,
    WarningIcon,
};
