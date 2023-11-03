import { cleanup, render, screen, waitFor } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import {
  mockshowFormWithThisInfo,
  mockNumericalValidationFieldToControl,
  mockHandleSubmitFormClicked,
  mockFormIsBuy,
  mockFormIsSell,
} from '../../.jest/mocks/FormToBuyOrSellCrypto.mock';

import { FormToBuyOrSellCrypto } from '@/components/actions-with-cryptos/form-to-buy-or-sell-crypto';

import Theme from '@/styles/theme.styles';

jest.mock('@/components/custom-error-validation-form/index.jsx', () => ({
  __esModule: true,
  default: () => <div data-testid='ErrorsValidationForm'>ErrorsValidationForm</div>,
}));

describe('FormTOBuyOrSellCrypto', () => {
  afterEach(cleanup);

  const mockStore = configureStore([]);

  const initialState = { clientsWallet: [] };
  const store = mockStore(initialState);

  const renderByFormType = (type, label) => {
    return render(
      <Provider store={store}>
        <Theme>
          <FormToBuyOrSellCrypto
            walletId={mockshowFormWithThisInfo.walletId}
            crypto={mockshowFormWithThisInfo.crypto}
            numericalValidationFieldToControl={mockNumericalValidationFieldToControl}
            label={label}
            typeForm={type}
            handleSubmitFormClicked={mockHandleSubmitFormClicked}
          />
        </Theme>
      </Provider>
    );
  };

  test('renders crypto buy or update form', async () => {
    renderByFormType(mockFormIsBuy.type, mockFormIsBuy.label);
    const nameLabelInput = screen.getByText(/Comprar cripto/i);
    const h4Elements = screen.getAllByRole('heading', { level: 4 });
    const errorsValidationFormElement = screen.getByTestId('ErrorsValidationForm');

    const submitButton = await screen.findByRole('button', {
      name: /Aceptar/i,
    });

    expect(nameLabelInput).toBeInTheDocument();
    expect(errorsValidationFormElement).toBeInTheDocument();
    expect(h4Elements).toHaveLength(2);

    await waitFor(() => {
      expect(submitButton).toBeInTheDocument();
    });
  });

  test('render crypto sell form', async () => {
    renderByFormType(mockFormIsSell.type, mockFormIsSell.label);
    const nameLabelInput = screen.getByText(/Vender cripto/i);
    const h4Elements = screen.getAllByRole('heading', { level: 4 });
    const errorsValidationFormElement = screen.getByTestId('ErrorsValidationForm');

    const submitButton = await screen.findByRole('button', {
      name: /Aceptar/i,
    });

    expect(nameLabelInput).toBeInTheDocument();
    expect(errorsValidationFormElement).toBeInTheDocument();
    expect(h4Elements).toHaveLength(2);

    await waitFor(() => {
      expect(submitButton).toBeInTheDocument();
    });
  });
});
