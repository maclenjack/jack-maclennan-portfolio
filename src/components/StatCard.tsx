import React from 'react';

/**
 * Props for the {@link StatCard} component.
 *
 * @property value - The numeric or textual value to display.
 * @property label - A short label describing the value.
 * @property className - Optional additional Tailwind classes.
 */
interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

/**
 * A small card used to display a statistic. It shows a large value and a
 * descriptive label below it.
 *
 * @param value - The value to display.
 * @param label - The label for the value.
 * @param className - Optional Tailwind classes for custom styling.
 */
const StatCard: React.FC<StatCardProps> = ({ value, label, className = '' }) => (
  <div
    className={`flex flex-col items-center justify-center rounded-xl bg-slate-100 p-6 dark:bg-slate-700 ${className}`}
  >
    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{value}</div>
    <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{label}</p>
  </div>
);

export default StatCard;
