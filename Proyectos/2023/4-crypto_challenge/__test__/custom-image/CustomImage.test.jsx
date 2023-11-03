import { cleanup, render, screen, waitFor } from '@testing-library/react';

import { CustomImage } from '@/components/custom-image';
import { srcIcons } from '@/models/src-icons.models';

import Theme from '@/styles/theme.styles';

describe('CustomButton', () => {
  afterEach(cleanup);

  beforeEach(() => {
    render(
      <Theme>
        <CustomImage
          src={srcIcons.ADD_ICON}
          alt='text image'
          title='show title test image'
          imgWidth=''
        />
      </Theme>
    );
  });

  test('should image render correctly', () => {
    const image = screen.getByAltText('text image');
    expect(image).toBeInTheDocument();
  });

  test('should render the spinner initially', () => {
    const spinner = screen.getByTestId('element-spinner');
    expect(spinner).toBeInTheDocument();
  });

  test('should render the image after loading', async () => {
    await waitFor(() => {
      const spinnerElement = screen.queryByTestId('element-spinner');
      return !spinnerElement;
    });

    const image = screen.getByAltText('text image');
    expect(image).toBeInTheDocument();
  });
});
