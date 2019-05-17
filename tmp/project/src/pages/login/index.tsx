import * as React from 'react';
import { Input, Button } from 'antd';
import FormRow from 'components/formRow';
import './index.styl';

const { useState } = React;

// interface LoginState {
//     name: string;
//     password: string;
// }

const Login: React.FC = () => {
	const [state, setState] = useState({ name: '', password: '' });

	return (
		<div className="login-wrapper">
			{/* <div className="login-title-wrapper"></div> */}
			<div className="login-form-wrapper">
				<FormRow label="登录名">
					<Input style={{ width: 230 }} />
				</FormRow>
				<FormRow label="密码">
					<Input type="password" style={{ width: 230 }} />
				</FormRow>
				<Button>登录</Button>
			</div>
		</div>
	);
};

export default Login;
