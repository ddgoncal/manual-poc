import React from 'react';
import styles from './BackgroundNumber.module.scss';

interface BackgroundNumberProps {
  number: number;
  children?: React.ReactNode;
}

// This method adds leading zeros to numbers that have only one digit
function addLeadingZerosToNumbers(input: number) {
  return input.toString().replace(/\b\d\b/g, '0$&');
}

const BackgroundNumber: React.FC<BackgroundNumberProps> = ({ number, children }) => {
	return (
		<div className={styles.background_number}>
				<h1 className={styles.number}>{addLeadingZerosToNumbers(number)}</h1>
				{children}
		</div>

	);
};

export default BackgroundNumber;
