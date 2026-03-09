import '@/app/globals.css';
import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest';

expect.extend(matchers);

vi.mock('react-loader-spinner', () => ({
  TailSpin: () => <div data-testid="tail-spin" />
}));
