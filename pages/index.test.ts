import { setupTest, get } from '@nuxt/test-utils';

describe('IndexPage', () => {
  setupTest({ server: true });

  it('renders Hello World', async () => {
    const { body } = await get('/');

    expect(body).toContain('Hello World');
  });
});
