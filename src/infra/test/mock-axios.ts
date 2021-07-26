import axios from 'axios';
import faker from 'faker';

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>; // Fazendo isso, a variável tem acesso a tudo que o axios tem

  mockedAxios.post.mockResolvedValue({
    data: faker.random.objectElement(),
    status: faker.datatype.number(),
  });

  return mockedAxios;
};
