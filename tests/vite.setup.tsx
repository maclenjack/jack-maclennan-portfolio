import '@/app/globals.css';
import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest';

expect.extend(matchers);

// Mock CSS imports to avoid jsdom CSS parsing issues
vi.mock('@/app/globals.css', () => ({}));

vi.mock('react-loader-spinner', () => ({
  TailSpin: () => <div data-testid="tail-spin" />
}));
