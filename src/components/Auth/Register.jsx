// import React from 'react';
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
import dynamicTitle from '../../config/dynamicTitle';

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleClickShowConfirmPassword = () =>
		setShowConfirmPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	dynamicTitle('Register');
	return (
		<Box
			height="100vh"
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<Box width="30%">
				<Typography variant="h5" fontWeight="bold">
					Sing in or create a account
				</Typography>

				<Box mt={2}>
					<TextField
						fullWidth
						id="outlined-basic"
						label="Full Name"
						variant="outlined"
					/>
					<TextField
						style={{ marginTop: '10px' }}
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

					<FormControl
						sx={{ m: '1' }}
						variant="outlined"
						fullWidth
						style={{ marginTop: '10px' }}
					>
						<InputLabel htmlFor="outlined-adornment-confirmpassword">
							Confirm Password
						</InputLabel>
						<OutlinedInput
							style={{ width: '100%' }}
							id="outlined-adornment-confirmpassword"
							type={showConfirmPassword ? 'text' : 'password'}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowConfirmPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showConfirmPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Confirm Password"
						/>
					</FormControl>

					<Button
						style={{ marginTop: '10px', width: '100%' }}
						variant="contained"
					>
						Create Account
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Register;
