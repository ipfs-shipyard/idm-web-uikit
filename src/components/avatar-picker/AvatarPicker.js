import React, { Component, createRef, cloneElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Avatar from '../avatar';
import { CameraIcon, PlusIcon, UserIcon } from '../icon';
import styles from './AvatarPicker.css';

class AvatarPicker extends Component {
    state = {
        imageUrl: undefined,
    };

    inputRef = createRef();

    render() {
        const { label, className, onChange, labelAlignment, ...rest } = this.props;

        return (
            <div className={ classNames(styles.container, styles[labelAlignment], className) } onClick={ this.handleAvatarLoaderClick }>
                { this.renderInput() }
                <div className={ styles.circleWrapper }>
                    { this.renderPlusIcon() }
                    { this.renderAvatar(rest) }
                </div>
                <div className={ styles.label }>{ label }</div>
            </div>
        );
    }

    renderInput() {
        return (
            <input
                ref={ this.inputRef }
                className={ styles.hidden }
                type="file"
                accept="image/*"
                onChange={ this.handleOnChange } />
        );
    }

    renderPlusIcon() {
        if (!this.props.image && !this.state.imageUrl) {
            return (
                <div className={ styles.smallCircle }>
                    <PlusIcon className={ styles.icon } />
                </div>
            );
        }

        return (
            <div className={ styles.imageOverlay }>
                <CameraIcon className={ styles.icon } />
            </div>
        );
    }

    renderAvatar(props) {
        const { image, icon, ...rest } = props;
        const imageUrl_ = this.state.imageUrl ? this.state.imageUrl : image;

        if (!this.props.image && !this.state.imageUrl && !this.props.name) {
            return (
                <div className={ styles.avatarPlaceholder }>
                    { cloneElement(icon, { className: classNames(icon.props.className, styles.icon) }) }
                </div>
            );
        }

        return (
            <Avatar { ...rest } image={ imageUrl_ } className={ styles.circle } />
        );
    }

    handleAvatarLoaderClick = () => {
        this.inputRef.current.click();
    };

    handleOnChange = (event) => {
        const uploadedImage = Array.from(event.target.files)[0];

        if (uploadedImage) {
            this.setState({
                imageUrl: URL.createObjectURL(uploadedImage),
            }, () => {
                this.props.onChange(uploadedImage);
            });
        }
    };
}

AvatarPicker.propTypes = {
    labelAlignment: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    image: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.element,
    name: PropTypes.string,
};

AvatarPicker.defaultProps = {
    labelAlignment: 'bottom',
    icon: <UserIcon />,
};

export default AvatarPicker;
