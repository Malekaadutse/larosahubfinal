
'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

interface FormHandlerProps {
  formId: string;
  children: React.ReactNode;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export default function FormHandler({ formId, children, onSuccess, onError }: FormHandlerProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('Submitting...');

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data: { [key: string]: any } = {};
      
      formData.forEach((value, key) => {
        if (key === 'message' && typeof value === 'string' && value.length > 500) {
          throw new Error('Message cannot exceed 500 characters');
        }
        data[key] = value;
      });

      // Save to Supabase
      const { data: result, error } = await supabase
        .from('form_submissions')
        .insert([
          {
            form_id: formId,
            form_data: data,
            submitted_at: new Date().toISOString()
          }
        ]);

      if (error) {
        throw error;
      }

      setSubmitStatus('Form submitted successfully!');
      if (onSuccess) onSuccess(data);
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);

    } catch (error: any) {
      const errorMessage = error.message || 'Failed to submit form. Please try again.';
      setSubmitStatus(errorMessage);
      if (onError) onError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {children}
      
      {submitStatus && (
        <div
          className={`p-4 rounded-lg text-sm ${
            submitStatus.includes('successfully')
              ? 'bg-green-100 text-green-700 border border-green-200'
              : submitStatus.includes('Submitting')
              ? 'bg-blue-100 text-blue-700 border border-blue-200'
              : 'bg-red-100 text-red-700 border border-red-200'
          }`}
        >
          {submitStatus}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 font-semibold whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
