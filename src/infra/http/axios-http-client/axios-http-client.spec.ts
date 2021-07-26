import { AxiosHttpClient } from './axios-http-client';
import axios from 'axios';
import faker from 'faker';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>; // Fazendo isso, a variável tem acesso a tudo que o axios tem

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

describe('AxiosHttpClient', () => {
  it('Should call axios with correct URL and verb', async () => {
    const url = faker.internet.url();
    const sut = makeSut();
    await sut.post({ url });

    expect(mockedAxios.post).toHaveBeenCalledWith(url);
  });
});