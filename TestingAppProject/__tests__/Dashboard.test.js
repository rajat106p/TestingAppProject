import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import { Provider } from 'react-redux';

import { Dashboard } from '../src/screen/dashboard';
import store from '../src/store';
import { LOADER_STATUS, POST_LIST, SET_POST_LIST } from "../src/store/constant";


jest.mock('axios');
const mockResponse = [
  { id: 1, title: 'Mock Title 1', body: 'Mock Body 1' },
  { id: 2, title: 'Mock Title 2', body: 'Mock Body 2' },
];
describe('Dashboard component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Provider store={store}><Dashboard /></Provider>);
    const headerTxt = getByText('Welcome to Dashboard');
    const refreshButton = getByText('Refresh');
    expect(headerTxt).toBeTruthy();
    expect(refreshButton).toBeTruthy();
  });
  test('fetches and displays data correctly', async () => {
    axios.get.mockResolvedValue({ data: mockResponse });
    store.dispatch({ type: POST_LIST, response: mockResponse })
    const state = store.getState()
    const { findByText } = render(<Provider store={store}><Dashboard /></Provider>);
    const title1 = await findByText('Mock Title 1');
    const body1 = await findByText('Mock Body 1');
    expect(title1).toBeTruthy();
    expect(body1).toBeTruthy();
    const title2 = await findByText('Mock Title 2');
    const body2 = await findByText('Mock Body 2');
    expect(title2).toBeTruthy();
    expect(body2).toBeTruthy();
  });
  test('navigates to Listdata on item press', async () => {
    axios.get.mockResolvedValue({ data: mockResponse });
    const navigationMock = { navigate: jest.fn() };
    const { findByText } = render(<Provider store={store}><Dashboard navigation={navigationMock} /></Provider>);
    await waitFor(() => expect(findByText('Mock Title 1')).toBeTruthy());
    expect(navigationMock.navigate).toBeTruthy();
  });
});