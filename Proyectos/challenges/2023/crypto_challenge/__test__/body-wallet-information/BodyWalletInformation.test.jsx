import BodyWalletInformation from '@/components/body-wallet-information';
import Theme from '@/styles/theme.styles';
import { cleanup, render, screen } from '@testing-library/react';

describe('BodyWalletInformation', () => {
  const totalMoney = 1233.86247;
  const moneyAvailable = 119;

  afterEach(cleanup);

  beforeEach(() => {
    render(
      <Theme>
        <BodyWalletInformation totalMoney={totalMoney} moneyAvailable={moneyAvailable} />
      </Theme>
    );
  });

  test('should render the text TOTAL and AVAILABLE with their respective values', () => {
    const totalText = screen.getByText(/Total/i);
    const availableText = screen.getByText(/Disponible/i);

    const total = screen.getByText(new RegExp(`\\$${totalMoney}`));
    const available = screen.getByText(new RegExp(`\\$${moneyAvailable}`));

    expect(totalText).toBeInTheDocument();
    expect(availableText).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(available).toBeInTheDocument();

    screen.debug();
  });

  test('should have a custom CSS class on "WrapBodyWalletInformation"', () => {
    const wrapBodyWalletInfo = screen.getByTestId('custom-class-body-wallet-info');

    expect(wrapBodyWalletInfo).toHaveClass('wrap-body-wallet-info');
  });
});
