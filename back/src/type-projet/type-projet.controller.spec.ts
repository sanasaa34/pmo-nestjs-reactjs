import { Test, TestingModule } from '@nestjs/testing';
import { TypeProjetController } from './type-projet.controller';

describe('TypeProjetController', () => {
  let controller: TypeProjetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeProjetController],
    }).compile();

    controller = module.get<TypeProjetController>(TypeProjetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
