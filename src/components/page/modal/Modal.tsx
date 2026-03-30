'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

/**
 * Custom modal component for consistent styling across the application.
 * @param props - Modal configuration and content.
 * @param props.isOpen - Whether the modal is open.
 * @param props.onClose - Function to call when closing the modal.
 * @param props.children - Content to render inside the modal.
 * @param props.title - Optional title for accessibility.
 * @returns The rendered CustomModal component.
 */
export default function Modal({ isOpen, onClose, children, title = 'Modal' }: CustomModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      // Focus the modal for accessibility
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <>
      <div className="fixed inset-0 z-9999 bg-black/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div
        ref={modalRef}
        className="fixed top-0 right-0 z-10000 h-full w-2/3 translate-x-0 transform bg-white/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-in-out dark:bg-slate-900/95"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title}
        tabIndex={-1}
      >
        {children}
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
}
