import { TestBed, inject } from '@angular/core/testing';

import { TodosEffects } from './todos.effects';

describe('TodosEffects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosEffects]
    });
  });

  it('should be created', inject([TodosEffects], (service: TodosEffects) => {
    expect(service).toBeTruthy();
  }));
});
