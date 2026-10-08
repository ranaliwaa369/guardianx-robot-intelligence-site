'use client'

import { useState, type FormEvent } from 'react'
import { Copy, Mail, CheckCircle2 } from 'lucide-react'
import { site } from '@/lib/site'

const fields = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: true },
  { name: 'robot', label: 'Robot manufacturer / model', type: 'text', placeholder: 'e.g. Manufacturer, Model X', required: true },
] as const

const textareas = [
  { name: 'current', label: 'Current functionality', placeholder: 'What does the robot do today?', required: true },
  { name: 'desired', label: 'Desired new functionality', placeholder: 'What would you like it to do?', required: true },
  { name: 'details', label: 'Project details', placeholder: 'Interfaces, SDK access, timeline, constraints…', required: false },
] as const

const inputClass =
  'w-full rounded-md border border-input bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40'

function buildInquiry(data: FormData) {
  const get = (key: string) => String(data.get(key) ?? '').trim() || '—'
  return [
    'GuardianX Custom Robot Brain Inquiry',
    '',
    `Name: ${get('name')}`,
    `Email: ${get('email')}`,
    `Robot manufacturer / model: ${get('robot')}`,
    '',
    'Current functionality:',
    get('current'),
    '',
    'Desired new functionality:',
    get('desired'),
    '',
    'Project details:',
    get('details'),
  ].join('\n')
}

export function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'emailed' | 'error'>('idle')
  const hasEmail = Boolean(site.contactEmail)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const body = buildInquiry(new FormData(event.currentTarget))

    if (hasEmail) {
      const subject = encodeURIComponent('Custom Robot Brain Inquiry')
      window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${encodeURIComponent(body)}`
      setStatus('emailed')
      return
    }

    try {
      await navigator.clipboard.writeText(body)
      setStatus('copied')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 md:p-8" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className={field.name === 'robot' ? 'sm:col-span-2' : undefined}>
            <label htmlFor={field.name} className="mb-2 block text-sm font-medium">
              {field.label}
              {field.required && <span className="text-primary" aria-hidden="true"> *</span>}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              autoComplete={'autoComplete' in field ? field.autoComplete : undefined}
              placeholder={'placeholder' in field ? field.placeholder : undefined}
              className={inputClass}
            />
          </div>
        ))}
        {textareas.map((field) => (
          <div key={field.name} className={field.name === 'details' ? 'sm:col-span-2' : undefined}>
            <label htmlFor={field.name} className="mb-2 block text-sm font-medium">
              {field.label}
              {field.required && <span className="text-primary" aria-hidden="true"> *</span>}
            </label>
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              rows={field.name === 'details' ? 4 : 3}
              placeholder={field.placeholder}
              className={`${inputClass} resize-y`}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground sm:max-w-sm">
          {hasEmail
            ? `Submitting opens a pre-filled email to ${site.contactEmail} in your email app. Your inquiry is not sent until you press Send from your email app.`
            : 'Demo form: no data is sent or stored. Submitting copies your inquiry to the clipboard so you can share it with GuardianX.'}
        </p>
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {hasEmail ? <Mail className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
          {hasEmail ? 'Open Email Draft' : 'Copy Inquiry'}
        </button>
      </div>

      <div aria-live="polite" className="min-h-0">
        {status !== 'idle' && (
          <p
            className={`mt-5 flex items-start gap-2 rounded-md border px-4 py-3 text-sm ${
              status === 'error' ? 'border-destructive/40 text-destructive' : 'border-primary/30 bg-primary/5 text-foreground'
            }`}
          >
            {status !== 'error' && <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />}
            {status === 'copied' && 'Inquiry copied to your clipboard. This demo form did not send anything.'}
            {status === 'emailed' && (
              <span>
                {'Your email app should now open with your inquiry pre-filled. Please press Send in your email app to deliver it. If nothing opened, email us directly at '}
                <a href={`mailto:${site.contactEmail}`} className="font-medium text-primary underline underline-offset-2">
                  {site.contactEmailDisplay}
                </a>
                .
              </span>
            )}
            {status === 'error' && 'Could not access the clipboard. Please copy your details manually.'}
          </p>
        )}
      </div>
    </form>
  )
}
