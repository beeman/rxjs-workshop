import { DemoModule } from './demo.module';

describe('DemoModule', () => {
  let demoModule: DemoModule;

  beforeEach(() => {
    demoModule = new DemoModule();
  });

  it('should create an instance', () => {
    expect(demoModule).toBeTruthy();
  });
});
