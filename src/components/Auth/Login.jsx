// import React from 'react';
import dynamicTitle from '../../config/dynamicTitle';
import {
	Box,
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	dynamicTitle('Login');
	return (
		<Box
			height="100vh"
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<Box width="30%">
				<Typography variant="h5" fontWeight="bold">
					Login your account
				</Typography>

				<Box mt={2}>
					<TextField
						fullWidth
						id="outlined-basic"
						label="Email"
						variant="outlined"
					/>

					<FormControl
						sx={{ m: '1' }}
						variant="outlined"
						fullWidth
						style={{ marginTop: '10px' }}
					>
						<InputLabel htmlFor="outlined-adornment-password">
							Password
						</InputLabel>
						<OutlinedInput
							style={{ width: '100%' }}
							id="outlined-adornment-password"
							type={showPassword ? 'text' : 'password'}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Password"
						/>
					</FormControl>

					<Button
						style={{ marginTop: '10px', width: '100%' }}
						variant="contained"
					>
						LogIn
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Login;
