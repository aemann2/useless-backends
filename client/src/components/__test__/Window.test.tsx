import { screen, render } from '@testing-library/react';
import Window from '../Window';

describe('test for window component', () => {
	test('window component grows on hover', () => {});
	test('window component background color changes on hover', () => {});
	test('window component displays correct input text', () => {
		const testText = 'This is a test'
		render(<Window>{testText}</Window>);
		const text = screen.getByText(testText);
		expect(text).toBeInTheDocument();
	});
	test('window component displays correct image', () => {
		
	})
});
