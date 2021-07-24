import { HttpPostClient } from 'data/protocols/http/http-post-client';

// Spy captura valores e coloca valores fake
export class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  async post(url: string): Promise<void> {
    this.url = url;
    return Promise.resolve();
  }
}
