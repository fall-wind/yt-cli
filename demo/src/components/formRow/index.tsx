import * as React from 'react';
import classnames from 'classnames'
import './index.styl';

interface IProps {
    label: React.ReactNode;
    isRequired?: boolean;
    labelStyle?: React.CSSProperties;
    warnMsg?: React.ReactNode
}

export const FormRow: React.FC<IProps> = ({ label, children, isRequired, labelStyle = {}, warnMsg }) => {
    return (
        <div
            // className="layout-container"
            className={classnames({
                'has-warn': !!warnMsg,
                'layout-container': true,
            })}
        // style={{ minHeight: 30, marginBottom: 15, display: 'flex' }}
        >
            <div className="label-wrapper" style={labelStyle}>
                {isRequired && <span style={{ color: 'red' }}>*</span>} {label}
                {label && '：'}
            </div>
            <div className="content-wrapper">
                {children}
                {warnMsg && <div className="warning-msg">{warnMsg}</div>}
            </div>
        </div>
    );
}

export default FormRow;
