import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { srcIcons } from '@/models/src-icons.models';

import { mockOnClick } from '../../.jest/mocks/customButtonClick.mock';

import { CustomButton } from '@/components/custom-button';

import Theme from '@/styles/theme.styles';

describe('CustomButton', () => {
  afterEach(cleanup);

  beforeEach(() => {
    render(
      <Theme>
        {/* button test with text  */}
        <CustomButton onClick={mockOnClick} text='Click button' />
        {/* button test with icons received by children  */}
        <CustomButton onClick={mockOnClick}>
          <img src={srcIcons.ADD_ICON} alt='icon test' />
        </CustomButton>
      </Theme>
    );
  });

  // button test with text
  test('should button render correctly', () => {
    const button = screen.getByRole('button', { name: /Click button/i });
    expect(button).toBeInTheDocument();
  });

  test("should button contain 'click button' text", () => {
    const button = screen.getByText('Click button');
    expect(button).toHaveTextContent('Click button');
  });

  test('should call the onClick function when the button is clicked', async () => {
    await userEvent.click(screen.getByText('Click button'));
    expect(mockOnClick).toHaveBeenCalled();
  });

  // button test with image
  test('should render children (image) correctly', () => {
    const image = screen.getByAltText('icon test');
    expect(image).toBeInTheDocument();
  });

  test('should render an <img> element', () => {
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
  });
});
