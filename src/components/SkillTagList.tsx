import React from 'react';

/**
 * Props for the {@link SkillTagList} component.
 *
 * @property skills - Array of skill names to display.
 * @property type - Determines styling; either `tech` or `soft`.
 * @property className - Optional Tailwind classes for the list wrapper.
 */
interface SkillTagListProps {
  skills: string[];
  type?: 'tech' | 'soft';
  className?: string;
}

/**
 * Renders a list of skill tags with optional styling variants.
 *
 * @param skills - Skill names.
 * @param type - Tag style variant.
 * @param className - Additional classes for the list container.
 */
const SkillTagList: React.FC<SkillTagListProps> = ({ skills, type = 'tech', className = '' }) => {
  const baseClasses = 'rounded-full px-3 py-1 text-sm font-medium';
  const techClasses = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
  const softClasses = 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
  const variantClasses = type === 'tech' ? techClasses : softClasses;

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {skills.map((skill) => (
        <li key={skill} className={`${baseClasses} ${variantClasses}`}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default SkillTagList;
