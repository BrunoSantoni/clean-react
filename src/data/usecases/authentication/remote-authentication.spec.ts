import { HttpPostClient } from 'data/protocols/http/http-post-client';
import { RemoteAuthentication } from './remote-authentication';

describe('RemoteAuthentication', () => {
  test('Should call HttpPostCLient with correct URL', async () => {
    // Spy captura valores e coloca valores fake
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }

    const url = 'any_url';
    const httpPostClientSpy = new HttpPostClientSpy();

    const sut = new RemoteAuthentication(url, httpPostClientSpy); //sut (system under test)
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
