import React from 'react';

/**
 * Props for the {@link SectionHeader} component.
 *
 * @property title - The main heading text.
 * @property description - Optional subheading or description.
 * @property children - Optional content to render below the header.
 * @property className - Tailwind classes for the outer section.
 * @property headerClassName - Tailwind classes for the header element.
 */
interface SectionHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  headerClassName?: string;
}

/**
 * Renders a section header with a title, optional description and optional
 * children. Useful for page sections.
 *
 * @param title - The heading text.
 * @param description - Optional description paragraph.
 * @param children - Optional content to render after the header.
 * @param className - Tailwind classes for the section wrapper.
 * @param headerClassName - Tailwind classes for the header wrapper.
 */
export default function SectionHeader({
  title,
  description,
  children,
  className = 'mx-4 my-8 w-full max-w-6xl',
  headerClassName = 'mb-8 text-center'
}: SectionHeaderProps) {
  return (
    <section className={className}>
      <header className={headerClassName}>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{title}</h1>
        {description && (
          <p className="mt-2 text-slate-600 dark:text-slate-300" role="article">
            {description}
          </p>
        )}
      </header>
      {children}
    </section>
  );
}
