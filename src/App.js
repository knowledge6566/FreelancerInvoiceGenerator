import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from 'react/jsx-runtime'
import { useEffect, useMemo, useState } from 'react'
const today = new Date()
const due = new Date(today)
due.setDate(today.getDate() + 15)
const isoDate = (date) => date.toISOString().slice(0, 10)
const initialInvoice = {
  invoiceNumber: `INV-${today.getFullYear()}-001`,
  issueDate: isoDate(today),
  dueDate: isoDate(due),
  fromName: '',
  fromEmail: '',
  fromGstin: '',
  fromAddress: '',
  clientName: '',
  clientEmail: '',
  clientGstin: '',
  clientAddress: '',
  supplyType: 'inter',
  notes: 'Thank you for your business. Payment is due within 15 days.',
  items: [
    {
      id: 1,
      description: '',
      quantity: 1,
      rate: 0,
      gst: 18,
    },
  ],
}
function Icon({ name, size = 18 }) {
  const paths = {
    arrow: _jsxs(_Fragment, {
      children: [_jsx('path', { d: 'M5 12h14' }), _jsx('path', { d: 'm13 6 6 6-6 6' })],
    }),
    check: _jsx('path', { d: 'm5 12 4 4L19 6' }),
    chevron: _jsx('path', { d: 'm9 18 6-6-6-6' }),
    download: _jsxs(_Fragment, {
      children: [
        _jsx('path', { d: 'M12 3v12' }),
        _jsx('path', { d: 'm7 10 5 5 5-5' }),
        _jsx('path', { d: 'M5 21h14' }),
      ],
    }),
    file: _jsxs(_Fragment, {
      children: [
        _jsx('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z' }),
        _jsx('path', { d: 'M14 2v6h6' }),
        _jsx('path', { d: 'M8 13h8M8 17h6' }),
      ],
    }),
    grid: _jsxs(_Fragment, {
      children: [
        _jsx('rect', { x: '3', y: '3', width: '7', height: '7', rx: '1' }),
        _jsx('rect', { x: '14', y: '3', width: '7', height: '7', rx: '1' }),
        _jsx('rect', { x: '3', y: '14', width: '7', height: '7', rx: '1' }),
        _jsx('rect', { x: '14', y: '14', width: '7', height: '7', rx: '1' }),
      ],
    }),
    help: _jsxs(_Fragment, {
      children: [
        _jsx('circle', { cx: '12', cy: '12', r: '9' }),
        _jsx('path', { d: 'M9.7 9a2.4 2.4 0 1 1 3.8 2c-1 .7-1.5 1.1-1.5 2.5' }),
        _jsx('path', { d: 'M12 17h.01' }),
      ],
    }),
    home: _jsxs(_Fragment, {
      children: [
        _jsx('path', { d: 'm3 11 9-8 9 8' }),
        _jsx('path', { d: 'M5 10v10h14V10M9 20v-6h6v6' }),
      ],
    }),
    invoice: _jsxs(_Fragment, {
      children: [
        _jsx('path', { d: 'M6 2h9l4 4v16l-3-2-3 2-3-2-3 2-3-2V4a2 2 0 0 1 2-2Z' }),
        _jsx('path', { d: 'M8 8h7M8 12h8M8 16h5' }),
      ],
    }),
    mail: _jsxs(_Fragment, {
      children: [
        _jsx('rect', { x: '3', y: '5', width: '18', height: '14', rx: '2' }),
        _jsx('path', { d: 'm3 7 9 6 9-6' }),
      ],
    }),
    more: _jsxs(_Fragment, {
      children: [
        _jsx('circle', { cx: '5', cy: '12', r: '1' }),
        _jsx('circle', { cx: '12', cy: '12', r: '1' }),
        _jsx('circle', { cx: '19', cy: '12', r: '1' }),
      ],
    }),
    plus: _jsx('path', { d: 'M12 5v14M5 12h14' }),
    settings: _jsxs(_Fragment, {
      children: [
        _jsx('circle', { cx: '12', cy: '12', r: '3' }),
        _jsx('path', {
          d: 'M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z',
        }),
      ],
    }),
    trash: _jsx(_Fragment, {
      children: _jsx('path', { d: 'M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6' }),
    }),
    users: _jsxs(_Fragment, {
      children: [
        _jsx('circle', { cx: '9', cy: '8', r: '4' }),
        _jsx('path', { d: 'M2 21a7 7 0 0 1 14 0M16 4a4 4 0 0 1 0 8M17 15a6 6 0 0 1 5 6' }),
      ],
    }),
  }
  return _jsx('svg', {
    'aria-hidden': 'true',
    fill: 'none',
    height: size,
    viewBox: '0 0 24 24',
    width: size,
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '1.8',
    children: paths[name],
  })
}
const money = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 2,
})
const dateLabel = (value) =>
  new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${value}T00:00:00`))
const starterClients = []
const starterInvoices = []
function ProductView({
  view,
  clients,
  setClients,
  invoices,
  onCreateInvoice,
  onCreateForClient,
  onNavigate,
  invoice,
  profileRole,
  setProfileRole,
  updateInvoice,
}) {
  const [showClientForm, setShowClientForm] = useState(false)
  const [clientDraft, setClientDraft] = useState({ name: '', email: '', gstin: '' })
  const [selectedTemplate, setSelectedTemplate] = useState('Modern Lime')
  const [settingsSaved, setSettingsSaved] = useState(false)
  const [invoiceQuery, setInvoiceQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All statuses')
  const addClient = () => {
    if (!clientDraft.name.trim() || !clientDraft.email.trim()) return
    const next = [...clients, { id: Date.now(), ...clientDraft, total: 0 }]
    setClients(next)
    window.localStorage.setItem('hisaab-clients', JSON.stringify(next))
    setClientDraft({ name: '', email: '', gstin: '' })
    setShowClientForm(false)
  }
  const filteredInvoices = invoices.filter((item) => {
    const matchesQuery = `${item.number} ${item.client}`
      .toLowerCase()
      .includes(invoiceQuery.toLowerCase())
    const matchesStatus = statusFilter === 'All statuses' || item.status === statusFilter
    return matchesQuery && matchesStatus
  })
  const exportRecords = () => {
    const csv = [
      ['Invoice', 'Client', 'Date', 'Status', 'Amount'],
      ...invoices.map((item) => [item.number, item.client, item.date, item.status, item.amount]),
    ]
      .map((row) => row.map((value) => `"${value}"`).join(','))
      .join('\n')
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
    const link = document.createElement('a')
    link.href = url
    link.download = 'hisaab-invoices.csv'
    link.click()
    URL.revokeObjectURL(url)
  }
  if (view === 'overview') {
    const paid = invoices
      .filter((item) => item.status === 'Paid')
      .reduce((sum, item) => sum + item.amount, 0)
    const outstanding = invoices
      .filter((item) => item.status === 'Sent')
      .reduce((sum, item) => sum + item.amount, 0)
    return _jsxs('div', {
      className: 'product-page',
      children: [
        _jsxs('div', {
          className: 'welcome-card',
          children: [
            _jsxs('div', {
              children: [
                _jsxs('span', {
                  className: 'eyebrow',
                  children: [
                    'WELCOME, ',
                    (invoice.fromName.split(' ')[0] || 'FREELANCER').toUpperCase(),
                  ],
                }),
                _jsx('h2', { children: 'Your business, at a glance.' }),
                _jsx('p', {
                  children: 'Create polished GST invoices and stay on top of every payment.',
                }),
              ],
            }),
            _jsxs('button', {
              className: 'button primary',
              onClick: onCreateInvoice,
              children: [_jsx(Icon, { name: 'plus' }), 'New invoice'],
            }),
          ],
        }),
        _jsxs('div', {
          className: 'metric-grid',
          children: [
            _jsxs('div', {
              className: 'metric-card',
              children: [
                _jsx('span', { children: 'Paid this month' }),
                _jsx('strong', { children: money.format(paid) }),
                _jsx('small', { className: 'positive', children: '\u2191 12.4% from last month' }),
              ],
            }),
            _jsxs('div', {
              className: 'metric-card',
              children: [
                _jsx('span', { children: 'Outstanding' }),
                _jsx('strong', { children: money.format(outstanding) }),
                _jsxs('small', {
                  children: [
                    'Across ',
                    invoices.filter((item) => item.status === 'Sent').length,
                    ' invoice',
                  ],
                }),
              ],
            }),
            _jsxs('div', {
              className: 'metric-card',
              children: [
                _jsx('span', { children: 'Total clients' }),
                _jsx('strong', { children: clients.length }),
                _jsx('small', {
                  children: clients.length
                    ? 'Your client list is growing'
                    : 'Add your first client',
                }),
              ],
            }),
          ],
        }),
        _jsxs('div', {
          className: 'dashboard-grid',
          children: [
            _jsxs('section', {
              className: 'panel',
              children: [
                _jsxs('div', {
                  className: 'panel-head',
                  children: [
                    _jsxs('div', {
                      children: [
                        _jsx('h3', { children: 'Recent invoices' }),
                        _jsx('p', { children: 'Your latest billing activity' }),
                      ],
                    }),
                    _jsxs('button', {
                      onClick: onCreateInvoice,
                      children: ['Create new ', _jsx(Icon, { name: 'arrow', size: 15 })],
                    }),
                  ],
                }),
                _jsx('div', {
                  className: 'data-list',
                  children: invoices
                    .slice(0, 4)
                    .map((item) =>
                      _jsxs(
                        'div',
                        {
                          className: 'data-row',
                          children: [
                            _jsx('span', {
                              className: 'file-badge',
                              children: _jsx(Icon, { name: 'file' }),
                            }),
                            _jsxs('span', {
                              children: [
                                _jsx('strong', { children: item.number }),
                                _jsx('small', { children: item.client }),
                              ],
                            }),
                            _jsx('span', {
                              className: `pill ${item.status.toLowerCase()}`,
                              children: item.status,
                            }),
                            _jsx('strong', { children: money.format(item.amount) }),
                          ],
                        },
                        item.number,
                      ),
                    ),
                }),
              ],
            }),
            _jsxs('section', {
              className: 'panel quick-panel',
              children: [
                _jsx('div', {
                  className: 'panel-head',
                  children: _jsxs('div', {
                    children: [
                      _jsx('h3', { children: 'Quick actions' }),
                      _jsx('p', { children: 'Get things done faster' }),
                    ],
                  }),
                }),
                _jsxs('button', {
                  onClick: onCreateInvoice,
                  children: [
                    _jsx('span', { children: _jsx(Icon, { name: 'invoice' }) }),
                    _jsxs('div', {
                      children: [
                        _jsx('strong', { children: 'Create an invoice' }),
                        _jsx('small', { children: 'Start from a clean GST template' }),
                      ],
                    }),
                    _jsx(Icon, { name: 'chevron' }),
                  ],
                }),
                _jsxs('button', {
                  onClick: () => onNavigate('clients'),
                  children: [
                    _jsx('span', { children: _jsx(Icon, { name: 'users' }) }),
                    _jsxs('div', {
                      children: [
                        _jsx('strong', { children: 'Add a client' }),
                        _jsx('small', { children: 'Keep billing details handy' }),
                      ],
                    }),
                    _jsx(Icon, { name: 'chevron' }),
                  ],
                }),
                _jsxs('button', {
                  onClick: exportRecords,
                  children: [
                    _jsx('span', { children: _jsx(Icon, { name: 'download' }) }),
                    _jsxs('div', {
                      children: [
                        _jsx('strong', { children: 'Export records' }),
                        _jsx('small', { children: 'Download all invoices as CSV' }),
                      ],
                    }),
                    _jsx(Icon, { name: 'chevron' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  }
  if (view === 'invoices') {
    return _jsxs('div', {
      className: 'product-page',
      children: [
        _jsxs('div', {
          className: 'page-intro',
          children: [
            _jsxs('div', {
              children: [
                _jsx('h2', { children: 'Invoices' }),
                _jsx('p', { children: 'Track drafts, sent invoices, and payments in one place.' }),
              ],
            }),
            _jsxs('button', {
              className: 'button primary',
              onClick: onCreateInvoice,
              children: [_jsx(Icon, { name: 'plus' }), 'New invoice'],
            }),
          ],
        }),
        _jsxs('section', {
          className: 'panel table-panel',
          children: [
            _jsxs('div', {
              className: 'table-toolbar',
              children: [
                _jsx('input', {
                  placeholder: 'Search invoices or clients\u2026',
                  value: invoiceQuery,
                  onChange: (e) => setInvoiceQuery(e.target.value),
                }),
                _jsxs('select', {
                  value: statusFilter,
                  onChange: (e) => setStatusFilter(e.target.value),
                  children: [
                    _jsx('option', { children: 'All statuses' }),
                    _jsx('option', { children: 'Draft' }),
                    _jsx('option', { children: 'Sent' }),
                    _jsx('option', { children: 'Paid' }),
                  ],
                }),
              ],
            }),
            _jsxs('div', {
              className: 'records-table',
              children: [
                _jsxs('div', {
                  className: 'records-head',
                  children: [
                    _jsx('span', { children: 'Invoice' }),
                    _jsx('span', { children: 'Client' }),
                    _jsx('span', { children: 'Date' }),
                    _jsx('span', { children: 'Status' }),
                    _jsx('span', { children: 'Amount' }),
                  ],
                }),
                filteredInvoices.map((item) =>
                  _jsxs(
                    'button',
                    {
                      className: 'records-row',
                      onClick: onCreateInvoice,
                      children: [
                        _jsx('strong', { children: item.number }),
                        _jsx('span', { children: item.client }),
                        _jsx('span', { children: item.date }),
                        _jsx('span', {
                          children: _jsx('i', {
                            className: `pill ${item.status.toLowerCase()}`,
                            children: item.status,
                          }),
                        }),
                        _jsx('strong', { children: money.format(item.amount) }),
                      ],
                    },
                    item.number,
                  ),
                ),
                !filteredInvoices.length &&
                  _jsx('div', {
                    className: 'empty-row',
                    children: 'No invoices match your search.',
                  }),
              ],
            }),
          ],
        }),
      ],
    })
  }
  if (view === 'clients') {
    return _jsxs('div', {
      className: 'product-page',
      children: [
        _jsxs('div', {
          className: 'page-intro',
          children: [
            _jsxs('div', {
              children: [
                _jsx('h2', { children: 'Clients' }),
                _jsx('p', {
                  children: 'Save billing details and see each client\u2019s invoice history.',
                }),
              ],
            }),
            _jsxs('button', {
              className: 'button primary',
              onClick: () => setShowClientForm(!showClientForm),
              children: [_jsx(Icon, { name: 'plus' }), 'Add client'],
            }),
          ],
        }),
        showClientForm &&
          _jsxs('section', {
            className: 'panel inline-form',
            children: [
              _jsxs('label', {
                children: [
                  'Client name',
                  _jsx('input', {
                    value: clientDraft.name,
                    onChange: (e) => setClientDraft({ ...clientDraft, name: e.target.value }),
                  }),
                ],
              }),
              _jsxs('label', {
                children: [
                  'Email',
                  _jsx('input', {
                    type: 'email',
                    value: clientDraft.email,
                    onChange: (e) => setClientDraft({ ...clientDraft, email: e.target.value }),
                  }),
                ],
              }),
              _jsxs('label', {
                children: [
                  'GSTIN',
                  _jsx('input', {
                    value: clientDraft.gstin,
                    onChange: (e) =>
                      setClientDraft({ ...clientDraft, gstin: e.target.value.toUpperCase() }),
                  }),
                ],
              }),
              _jsx('button', {
                className: 'button primary',
                onClick: addClient,
                children: 'Save client',
              }),
            ],
          }),
        _jsx('div', {
          className: 'client-grid',
          children: clients.map((client) =>
            _jsxs(
              'article',
              {
                className: 'client-card',
                children: [
                  _jsx('div', {
                    className: 'client-avatar',
                    children: client.name
                      .split(' ')
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join(''),
                  }),
                  _jsxs('div', {
                    children: [
                      _jsx('h3', { children: client.name }),
                      _jsx('p', { children: client.email }),
                    ],
                  }),
                  _jsxs('span', {
                    className: 'client-gstin',
                    children: ['GSTIN \u00B7 ', client.gstin || 'Not added'],
                  }),
                  _jsxs('div', {
                    className: 'client-total',
                    children: [
                      _jsx('small', { children: 'Total billed' }),
                      _jsx('strong', { children: money.format(client.total) }),
                    ],
                  }),
                  _jsxs('button', {
                    onClick: () => onCreateForClient(client),
                    children: ['Create invoice ', _jsx(Icon, { name: 'arrow', size: 15 })],
                  }),
                ],
              },
              client.id,
            ),
          ),
        }),
      ],
    })
  }
  if (view === 'templates') {
    const templates = ['Modern Lime', 'Classic Paper', 'Minimal Ink']
    return _jsxs('div', {
      className: 'product-page',
      children: [
        _jsx('div', {
          className: 'page-intro',
          children: _jsxs('div', {
            children: [
              _jsx('h2', { children: 'Templates' }),
              _jsx('p', { children: 'Choose a professional layout for your next invoice.' }),
            ],
          }),
        }),
        _jsx('div', {
          className: 'template-grid',
          children: templates.map((name, index) =>
            _jsxs(
              'button',
              {
                className: `template-card ${selectedTemplate === name ? 'selected' : ''}`,
                onClick: () => setSelectedTemplate(name),
                children: [
                  _jsxs('div', {
                    className: `template-preview template-${index}`,
                    children: [
                      _jsx('span', {}),
                      _jsx('strong', { children: 'INVOICE' }),
                      _jsx('i', {}),
                      _jsx('i', {}),
                      _jsx('i', {}),
                      _jsx('b', {}),
                    ],
                  }),
                  _jsxs('div', {
                    children: [
                      _jsxs('span', {
                        children: [
                          _jsx('strong', { children: name }),
                          _jsx('small', {
                            children:
                              index === 0
                                ? 'Bold and contemporary'
                                : index === 1
                                  ? 'Traditional and trusted'
                                  : 'Clean and understated',
                          }),
                        ],
                      }),
                      selectedTemplate === name &&
                        _jsx('i', {
                          className: 'selected-check',
                          children: _jsx(Icon, { name: 'check', size: 14 }),
                        }),
                    ],
                  }),
                ],
              },
              name,
            ),
          ),
        }),
        _jsxs('div', {
          className: 'template-action',
          children: [
            _jsxs('p', {
              children: [
                _jsx('strong', { children: selectedTemplate }),
                ' will be used for your next invoice.',
              ],
            }),
            _jsxs('button', {
              className: 'button primary',
              onClick: onCreateInvoice,
              children: ['Use this template ', _jsx(Icon, { name: 'arrow' })],
            }),
          ],
        }),
      ],
    })
  }
  if (view === 'settings') {
    return _jsxs('div', {
      className: 'product-page settings-page',
      children: [
        _jsx('div', {
          className: 'page-intro',
          children: _jsxs('div', {
            children: [
              _jsx('h2', { children: 'Business settings' }),
              _jsx('p', { children: 'These details appear automatically on every new invoice.' }),
            ],
          }),
        }),
        _jsxs('section', {
          className: 'panel settings-form',
          children: [
            _jsxs('div', {
              className: 'settings-title',
              children: [
                _jsx('span', { className: 'brand-mark', children: _jsx('span', {}) }),
                _jsxs('div', {
                  children: [
                    _jsx('h3', { children: 'Business profile' }),
                    _jsx('p', { children: 'Your public invoice identity' }),
                  ],
                }),
              ],
            }),
            _jsxs('div', {
              className: 'form-grid two',
              children: [
                _jsxs('label', {
                  children: [
                    'Business / Freelancer name',
                    _jsx('input', {
                      value: invoice.fromName,
                      onChange: (e) => updateInvoice('fromName', e.target.value),
                    }),
                  ],
                }),
                _jsxs('label', {
                  children: [
                    'Email address',
                    _jsx('input', {
                      value: invoice.fromEmail,
                      onChange: (e) => updateInvoice('fromEmail', e.target.value),
                    }),
                  ],
                }),
                _jsxs('label', {
                  children: [
                    'GSTIN',
                    _jsx('input', {
                      value: invoice.fromGstin,
                      onChange: (e) => updateInvoice('fromGstin', e.target.value.toUpperCase()),
                    }),
                  ],
                }),
                _jsxs('label', {
                  children: [
                    'Business address',
                    _jsx('input', {
                      value: invoice.fromAddress,
                      onChange: (e) => updateInvoice('fromAddress', e.target.value),
                    }),
                  ],
                }),
                _jsxs('label', {
                  children: [
                    'I work as',
                    _jsxs('select', {
                      value: profileRole,
                      onChange: (e) => setProfileRole(e.target.value),
                      children: [
                        _jsx('option', { children: 'Freelancer' }),
                        _jsx('option', { children: 'Business owner' }),
                        _jsx('option', { children: 'Consultant' }),
                        _jsx('option', { children: 'Agency' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            _jsxs('div', {
              className: 'settings-actions',
              children: [
                _jsx('span', {
                  children: settingsSaved
                    ? 'Settings saved locally.'
                    : 'Changes are stored only in this browser.',
                }),
                _jsx('button', {
                  className: 'button primary',
                  onClick: () => {
                    window.localStorage.setItem('hisaab-invoice-draft', JSON.stringify(invoice))
                    window.localStorage.setItem('hisaab-profile-role', profileRole)
                    setSettingsSaved(true)
                  },
                  children: 'Save settings',
                }),
              ],
            }),
          ],
        }),
      ],
    })
  }
  return _jsxs('div', {
    className: 'product-page help-page',
    children: [
      _jsx('div', {
        className: 'page-intro',
        children: _jsxs('div', {
          children: [
            _jsx('h2', { children: 'Help center' }),
            _jsx('p', { children: 'Everything you need to create and send your first invoice.' }),
          ],
        }),
      }),
      _jsx('div', {
        className: 'help-grid',
        children: [
          [
            'How do I save an invoice as PDF?',
            'Open an invoice, choose the download menu, then select Print / Save PDF.',
          ],
          [
            'Which GST mode should I use?',
            'Use CGST + SGST for clients in your state and IGST for interstate clients.',
          ],
          [
            'Where is my data stored?',
            'This login-free version stores your details privately in this browser.',
          ],
          [
            'How do I send an invoice?',
            'Use Send invoice to open a pre-filled email to your client.',
          ],
        ].map(([title, answer]) =>
          _jsxs(
            'details',
            {
              className: 'help-item',
              children: [
                _jsxs('summary', { children: [title, _jsx(Icon, { name: 'plus' })] }),
                _jsx('p', { children: answer }),
              ],
            },
            title,
          ),
        ),
      }),
    ],
  })
}
export default function InvoiceApp() {
  const [invoice, setInvoice] = useState(initialInvoice)
  const [saved, setSaved] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sendMenuOpen, setSendMenuOpen] = useState(false)
  const [view, setView] = useState('overview')
  const [showSplash, setShowSplash] = useState(true)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [storageReady, setStorageReady] = useState(false)
  const [profileRole, setProfileRole] = useState('Freelancer')
  const [profileDraft, setProfileDraft] = useState({
    name: '',
    email: '',
    gstin: '',
    address: '',
  })
  const [clients, setClients] = useState(starterClients)
  const [invoices, setInvoices] = useState(starterInvoices)
  useEffect(() => {
    const draft = window.localStorage.getItem('hisaab-invoice-draft')
    let hasExistingProfile = false
    if (draft) {
      try {
        const savedInvoice = JSON.parse(draft)
        setInvoice(savedInvoice)
        hasExistingProfile = Boolean(savedInvoice.fromName && savedInvoice.fromEmail)
        setProfileDraft({
          name: savedInvoice.fromName,
          email: savedInvoice.fromEmail,
          gstin: savedInvoice.fromGstin,
          address: savedInvoice.fromAddress,
        })
      } catch {
        window.localStorage.removeItem('hisaab-invoice-draft')
      }
    }
    const storedClients = window.localStorage.getItem('hisaab-clients')
    const storedInvoices = window.localStorage.getItem('hisaab-invoices')
    if (storedClients) setClients(JSON.parse(storedClients))
    if (storedInvoices) setInvoices(JSON.parse(storedInvoices))
    setProfileRole(window.localStorage.getItem('hisaab-profile-role') || 'Freelancer')
    const profileComplete =
      window.localStorage.getItem('hisaab-profile-complete') === 'true' || hasExistingProfile
    if (profileComplete) window.localStorage.setItem('hisaab-profile-complete', 'true')
    setShowOnboarding(!profileComplete)
    setStorageReady(true)
    const splashTimer = window.setTimeout(() => setShowSplash(false), 1650)
    return () => window.clearTimeout(splashTimer)
  }, [])
  useEffect(() => {
    if (!storageReady) return
    window.localStorage.setItem('hisaab-invoice-draft', JSON.stringify(invoice))
    window.localStorage.setItem('hisaab-clients', JSON.stringify(clients))
    window.localStorage.setItem('hisaab-invoices', JSON.stringify(invoices))
    window.localStorage.setItem('hisaab-profile-role', profileRole)
    if (invoice.fromName && invoice.fromEmail) {
      window.localStorage.setItem('hisaab-profile-complete', 'true')
    }
  }, [clients, invoice, invoices, profileRole, storageReady])
  const totals = useMemo(() => {
    const subtotal = invoice.items.reduce((sum, item) => sum + item.quantity * item.rate, 0)
    const tax = invoice.items.reduce(
      (sum, item) => sum + item.quantity * item.rate * (item.gst / 100),
      0,
    )
    return { subtotal, tax, total: subtotal + tax }
  }, [invoice.items])
  const update = (key, value) => {
    setInvoice((current) => ({ ...current, [key]: value }))
    setSaved(false)
  }
  const updateItem = (id, key, value) => {
    update(
      'items',
      invoice.items.map((item) => (item.id === id ? { ...item, [key]: value } : item)),
    )
  }
  const saveDraft = () => {
    window.localStorage.setItem('hisaab-invoice-draft', JSON.stringify(invoice))
    const record = {
      number: invoice.invoiceNumber,
      client: invoice.clientName || 'Untitled client',
      amount: totals.total,
      status: 'Draft',
      date: dateLabel(invoice.issueDate),
    }
    const nextInvoices = [record, ...invoices.filter((item) => item.number !== record.number)]
    setInvoices(nextInvoices)
    window.localStorage.setItem('hisaab-invoices', JSON.stringify(nextInvoices))
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2400)
  }
  const addItem = () => {
    update('items', [
      ...invoice.items,
      { id: Date.now(), description: '', quantity: 1, rate: 0, gst: 18 },
    ])
  }
  const downloadCsv = () => {
    const rows = [
      ['Invoice', invoice.invoiceNumber],
      ['Client', invoice.clientName],
      ['Description', 'Quantity', 'Rate', 'GST %', 'Amount'],
      ...invoice.items.map((item) => [
        item.description,
        item.quantity,
        item.rate,
        item.gst,
        item.quantity * item.rate,
      ]),
      ['Subtotal', totals.subtotal],
      ['GST', totals.tax],
      ['Total', totals.total],
    ]
    const csv = rows
      .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(','))
      .join('\n')
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
    const link = document.createElement('a')
    link.href = url
    link.download = `${invoice.invoiceNumber}.csv`
    link.click()
    URL.revokeObjectURL(url)
    setMenuOpen(false)
  }
  const sendInvoice = () => {
    const subject = encodeURIComponent(`Invoice ${invoice.invoiceNumber} from ${invoice.fromName}`)
    const dueMessage = invoice.dueDate ? ` It is due on ${dateLabel(invoice.dueDate)}.` : ''
    const body = encodeURIComponent(
      `Hi ${invoice.clientName},\n\nPlease find invoice ${invoice.invoiceNumber} for ${money.format(totals.total)}.${dueMessage}\n\nRegards,\n${invoice.fromName}`,
    )
    setSendMenuOpen(false)
    window.location.href = `mailto:${invoice.clientEmail}?subject=${subject}&body=${body}`
  }
  const invoiceShareText = () => {
    const dueMessage = invoice.dueDate ? ` Due date: ${dateLabel(invoice.dueDate)}.` : ''
    return `Hi ${invoice.clientName}, invoice ${invoice.invoiceNumber} from ${invoice.fromName} is for ${money.format(totals.total)}.${dueMessage} Please find the PDF attached.`
  }
  const sendWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(invoiceShareText())}`,
      '_blank',
      'noopener,noreferrer',
    )
    setSendMenuOpen(false)
  }
  const shareInvoice = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `Invoice ${invoice.invoiceNumber}`,
          text: invoiceShareText(),
        })
      } else {
        await navigator.clipboard.writeText(invoiceShareText())
        window.alert('Invoice message copied. You can paste it into any app.')
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        window.alert('Sharing was unavailable. Please use Email or WhatsApp instead.')
      }
    }
    setSendMenuOpen(false)
  }
  const addDueDate = () => {
    const nextDueDate = new Date(`${invoice.issueDate}T00:00:00`)
    nextDueDate.setDate(nextDueDate.getDate() + 15)
    update('dueDate', isoDate(nextDueDate))
  }
  const nextInvoiceNumber = () =>
    `INV-${new Date().getFullYear()}-${String(invoices.length + 1).padStart(3, '0')}`
  const createInvoice = (client) => {
    const issueDate = new Date()
    const dueDate = new Date(issueDate)
    dueDate.setDate(issueDate.getDate() + 15)
    setInvoice((current) => ({
      ...initialInvoice,
      invoiceNumber: nextInvoiceNumber(),
      issueDate: isoDate(issueDate),
      dueDate: isoDate(dueDate),
      fromName: current.fromName,
      fromEmail: current.fromEmail,
      fromGstin: current.fromGstin,
      fromAddress: current.fromAddress,
      clientName: client?.name ?? '',
      clientEmail: client?.email ?? '',
      clientGstin: client?.gstin ?? '',
      clientAddress: '',
      items: [{ id: Date.now(), description: '', quantity: 1, rate: 0, gst: 18 }],
    }))
    setSaved(false)
    setMenuOpen(false)
    setSendMenuOpen(false)
    setView('invoice')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const openNewInvoice = () => createInvoice()
  const completeProfile = () => {
    if (!profileDraft.name.trim() || !profileDraft.email.trim()) return
    const nextInvoice = {
      ...invoice,
      fromName: profileDraft.name.trim(),
      fromEmail: profileDraft.email.trim(),
      fromGstin: profileDraft.gstin.trim().toUpperCase(),
      fromAddress: profileDraft.address.trim(),
    }
    setInvoice(nextInvoice)
    window.localStorage.setItem('hisaab-invoice-draft', JSON.stringify(nextInvoice))
    window.localStorage.setItem('hisaab-profile-role', profileRole)
    window.localStorage.setItem('hisaab-profile-complete', 'true')
    setShowOnboarding(false)
  }
  const profileInitials =
    invoice.fromName
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() || 'YOU'
  return _jsxs(_Fragment, {
    children: [
      showSplash &&
        _jsxs('div', {
          className: 'splash-screen',
          'aria-label': 'Opening Hisaab',
          children: [
            _jsxs('div', {
              className: 'splash-logo',
              children: [
                _jsx('span', { className: 'brand-mark splash-mark', children: _jsx('span', {}) }),
                _jsx('span', { children: 'Hisaab' }),
              ],
            }),
            _jsx('p', { children: 'Invoices made effortless.' }),
            _jsx('div', { className: 'splash-line', children: _jsx('span', {}) }),
          ],
        }),
      showOnboarding &&
        !showSplash &&
        _jsx('div', {
          className: 'onboarding-backdrop',
          children: _jsxs('section', {
            className: 'onboarding-card',
            'aria-labelledby': 'profile-setup-title',
            children: [
              _jsxs('div', {
                className: 'onboarding-brand',
                children: [
                  _jsx('span', { className: 'brand-mark', children: _jsx('span', {}) }),
                  _jsx('strong', { children: 'Hisaab' }),
                  _jsx('span', { children: '1 minute setup' }),
                ],
              }),
              _jsxs('div', {
                className: 'onboarding-copy',
                children: [
                  _jsx('span', { className: 'eyebrow', children: 'WELCOME TO HISAAB' }),
                  _jsx('h1', {
                    id: 'profile-setup-title',
                    children: 'Set up your invoice profile',
                  }),
                  _jsx('p', {
                    children:
                      'Add your business details once. We\u2019ll place them on every invoice you create.',
                  }),
                ],
              }),
              _jsxs('div', {
                className: 'onboarding-form',
                children: [
                  _jsxs('label', {
                    children: [
                      'Your name or business name *',
                      _jsx('input', {
                        autoFocus: true,
                        placeholder: 'e.g. Priya Design Studio',
                        value: profileDraft.name,
                        onChange: (e) => setProfileDraft({ ...profileDraft, name: e.target.value }),
                      }),
                    ],
                  }),
                  _jsxs('div', {
                    className: 'form-grid two',
                    children: [
                      _jsxs('label', {
                        children: [
                          'Email address *',
                          _jsx('input', {
                            type: 'email',
                            placeholder: 'you@business.com',
                            value: profileDraft.email,
                            onChange: (e) =>
                              setProfileDraft({ ...profileDraft, email: e.target.value }),
                          }),
                        ],
                      }),
                      _jsxs('label', {
                        children: [
                          'I work as',
                          _jsxs('select', {
                            value: profileRole,
                            onChange: (e) => setProfileRole(e.target.value),
                            children: [
                              _jsx('option', { children: 'Freelancer' }),
                              _jsx('option', { children: 'Business owner' }),
                              _jsx('option', { children: 'Consultant' }),
                              _jsx('option', { children: 'Agency' }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  _jsxs('label', {
                    children: [
                      'GSTIN ',
                      _jsx('span', { children: '(optional)' }),
                      _jsx('input', {
                        placeholder: '27ABCDE1234F1Z5',
                        value: profileDraft.gstin,
                        onChange: (e) =>
                          setProfileDraft({ ...profileDraft, gstin: e.target.value.toUpperCase() }),
                      }),
                    ],
                  }),
                  _jsxs('label', {
                    children: [
                      'Business address',
                      _jsx('textarea', {
                        placeholder: 'City, State and PIN code',
                        value: profileDraft.address,
                        onChange: (e) =>
                          setProfileDraft({ ...profileDraft, address: e.target.value }),
                      }),
                    ],
                  }),
                ],
              }),
              _jsxs('button', {
                className: 'button primary onboarding-submit',
                disabled: !profileDraft.name.trim() || !profileDraft.email.trim(),
                onClick: completeProfile,
                children: ['Start creating invoices ', _jsx(Icon, { name: 'arrow' })],
              }),
              _jsxs('p', {
                className: 'privacy-note',
                children: [
                  _jsx(Icon, { name: 'check', size: 14 }),
                  'Your details stay private in this browser. No account needed.',
                ],
              }),
            ],
          }),
        }),
      _jsxs('div', {
        className: `app-shell ${showSplash ? 'app-loading' : 'app-ready'}`,
        children: [
          _jsxs('aside', {
            className: 'sidebar no-print',
            children: [
              _jsxs('div', {
                className: 'brand',
                children: [
                  _jsx('span', { className: 'brand-mark', children: _jsx('span', {}) }),
                  _jsx('span', { children: 'Hisaab' }),
                ],
              }),
              _jsxs('nav', {
                className: 'side-nav',
                'aria-label': 'Main navigation',
                children: [
                  _jsxs('button', {
                    className: view === 'overview' ? 'active' : '',
                    onClick: () => setView('overview'),
                    children: [_jsx(Icon, { name: 'home' }), 'Overview'],
                  }),
                  _jsxs('button', {
                    className: view === 'invoices' || view === 'invoice' ? 'active' : '',
                    onClick: () => setView('invoices'),
                    children: [
                      _jsx(Icon, { name: 'invoice' }),
                      'Invoices',
                      _jsx('span', { children: invoices.length }),
                    ],
                  }),
                  _jsxs('button', {
                    className: view === 'clients' ? 'active' : '',
                    onClick: () => setView('clients'),
                    children: [_jsx(Icon, { name: 'users' }), 'Clients'],
                  }),
                  _jsxs('button', {
                    className: view === 'templates' ? 'active' : '',
                    onClick: () => setView('templates'),
                    children: [_jsx(Icon, { name: 'grid' }), 'Templates'],
                  }),
                ],
              }),
              _jsxs('div', {
                className: 'side-bottom',
                children: [
                  _jsxs('button', {
                    className: view === 'settings' ? 'active' : '',
                    onClick: () => setView('settings'),
                    children: [_jsx(Icon, { name: 'settings' }), 'Settings'],
                  }),
                  _jsxs('button', {
                    className: view === 'help' ? 'active' : '',
                    onClick: () => setView('help'),
                    children: [_jsx(Icon, { name: 'help' }), 'Help center'],
                  }),
                  _jsxs('button', {
                    className: 'profile',
                    'aria-label': 'Open business profile',
                    onClick: () => setView('settings'),
                    children: [
                      _jsx('div', { className: 'avatar', children: profileInitials }),
                      _jsxs('div', {
                        children: [
                          _jsx('strong', { children: invoice.fromName || 'Your profile' }),
                          _jsx('small', { children: profileRole }),
                        ],
                      }),
                      _jsx(Icon, { name: 'more' }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          _jsxs('main', {
            className: 'workspace',
            children: [
              _jsxs('header', {
                className: 'topbar no-print',
                children: [
                  _jsxs('div', {
                    children: [
                      _jsxs('div', {
                        className: 'crumbs',
                        children: [
                          _jsx('span', { children: 'Hisaab' }),
                          _jsx(Icon, { name: 'chevron', size: 14 }),
                          _jsx('strong', {
                            children:
                              view === 'invoice'
                                ? 'New invoice'
                                : view.charAt(0).toUpperCase() + view.slice(1),
                          }),
                        ],
                      }),
                      _jsx('h1', {
                        children:
                          view === 'invoice'
                            ? 'Create invoice'
                            : view === 'overview'
                              ? 'Overview'
                              : view.charAt(0).toUpperCase() + view.slice(1),
                      }),
                    ],
                  }),
                  view === 'invoice'
                    ? _jsxs('div', {
                        className: 'top-actions',
                        children: [
                          _jsxs('button', {
                            className: 'button secondary',
                            onClick: saveDraft,
                            children: [
                              saved ? _jsx(Icon, { name: 'check' }) : null,
                              saved ? 'Saved' : 'Save draft',
                            ],
                          }),
                          _jsxs('div', {
                            className: 'export-wrap',
                            children: [
                              _jsx('button', {
                                className: 'button secondary icon-button',
                                'aria-label': 'More export options',
                                onClick: () => setMenuOpen(!menuOpen),
                                children: _jsx(Icon, { name: 'download' }),
                              }),
                              menuOpen &&
                                _jsxs('div', {
                                  className: 'export-menu',
                                  children: [
                                    _jsxs('button', {
                                      onClick: downloadCsv,
                                      children: [_jsx(Icon, { name: 'grid' }), 'Download CSV'],
                                    }),
                                    _jsxs('button', {
                                      onClick: () => window.print(),
                                      children: [_jsx(Icon, { name: 'file' }), 'Print / Save PDF'],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          _jsxs('div', {
                            className: 'export-wrap',
                            children: [
                              _jsxs('button', {
                                className: 'button primary',
                                onClick: () => setSendMenuOpen(!sendMenuOpen),
                                children: ['Send invoice ', _jsx(Icon, { name: 'chevron' })],
                              }),
                              sendMenuOpen &&
                                _jsxs('div', {
                                  className: 'export-menu send-menu',
                                  children: [
                                    _jsxs('button', {
                                      onClick: sendInvoice,
                                      children: [_jsx(Icon, { name: 'mail' }), 'Send by email'],
                                    }),
                                    _jsxs('button', {
                                      onClick: sendWhatsApp,
                                      children: [
                                        _jsx('span', { className: 'whatsapp-icon', children: 'W' }),
                                        'Send on WhatsApp',
                                      ],
                                    }),
                                    _jsxs('button', {
                                      onClick: shareInvoice,
                                      children: [
                                        _jsx(Icon, { name: 'grid' }),
                                        'Share with another app',
                                      ],
                                    }),
                                    _jsx('small', {
                                      children:
                                        'Save the PDF first, then attach it in your chosen app.',
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      })
                    : _jsxs('button', {
                        className: 'button primary mobile-new',
                        onClick: openNewInvoice,
                        children: [_jsx(Icon, { name: 'plus' }), 'New invoice'],
                      }),
                ],
              }),
              view === 'invoice'
                ? _jsxs('div', {
                    className: 'content-grid',
                    children: [
                      _jsxs('section', {
                        className: 'editor no-print',
                        'aria-label': 'Invoice details',
                        children: [
                          _jsxs('div', {
                            className: 'section-heading',
                            children: [
                              _jsx('span', { children: '01' }),
                              _jsxs('div', {
                                children: [
                                  _jsx('h2', { children: 'Invoice details' }),
                                  _jsx('p', {
                                    children: 'Basic information and payment timeline.',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          _jsxs('div', {
                            className: 'form-grid three',
                            children: [
                              _jsxs('label', {
                                children: [
                                  'Invoice number',
                                  _jsx('input', {
                                    value: invoice.invoiceNumber,
                                    onChange: (e) => update('invoiceNumber', e.target.value),
                                  }),
                                ],
                              }),
                              _jsxs('label', {
                                children: [
                                  'Issue date',
                                  _jsx('input', {
                                    type: 'date',
                                    value: invoice.issueDate,
                                    onChange: (e) => update('issueDate', e.target.value),
                                  }),
                                ],
                              }),
                              _jsxs('label', {
                                className: 'due-date-label',
                                children: [
                                  'Due date',
                                  invoice.dueDate
                                    ? _jsxs('div', {
                                        className: 'due-date-control',
                                        children: [
                                          _jsx('input', {
                                            type: 'date',
                                            value: invoice.dueDate,
                                            onChange: (e) => update('dueDate', e.target.value),
                                          }),
                                          _jsx('button', {
                                            'aria-label': 'Remove due date',
                                            title: 'Remove due date',
                                            onClick: () => update('dueDate', ''),
                                            children: _jsx(Icon, { name: 'trash', size: 15 }),
                                          }),
                                        ],
                                      })
                                    : _jsxs('button', {
                                        className: 'add-due-date',
                                        onClick: addDueDate,
                                        children: [
                                          _jsx(Icon, { name: 'plus', size: 15 }),
                                          'Add due date',
                                        ],
                                      }),
                                ],
                              }),
                            ],
                          }),
                          _jsx('div', { className: 'divider' }),
                          _jsxs('div', {
                            className: 'section-heading',
                            children: [
                              _jsx('span', { children: '02' }),
                              _jsxs('div', {
                                children: [
                                  _jsx('h2', { children: 'From & bill to' }),
                                  _jsx('p', {
                                    children: 'Your business and client billing details.',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          _jsxs('div', {
                            className: 'party-grid',
                            children: [
                              _jsxs('fieldset', {
                                children: [
                                  _jsx('legend', { children: 'YOUR DETAILS' }),
                                  _jsxs('label', {
                                    children: [
                                      'Full name / Business name',
                                      _jsx('input', {
                                        value: invoice.fromName,
                                        onChange: (e) => update('fromName', e.target.value),
                                      }),
                                    ],
                                  }),
                                  _jsxs('div', {
                                    className: 'form-grid two',
                                    children: [
                                      _jsxs('label', {
                                        children: [
                                          'Email address',
                                          _jsx('input', {
                                            type: 'email',
                                            value: invoice.fromEmail,
                                            onChange: (e) => update('fromEmail', e.target.value),
                                          }),
                                        ],
                                      }),
                                      _jsxs('label', {
                                        children: [
                                          'GSTIN',
                                          _jsx('input', {
                                            value: invoice.fromGstin,
                                            onChange: (e) =>
                                              update('fromGstin', e.target.value.toUpperCase()),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  _jsxs('label', {
                                    children: [
                                      'Business address',
                                      _jsx('input', {
                                        value: invoice.fromAddress,
                                        onChange: (e) => update('fromAddress', e.target.value),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              _jsxs('fieldset', {
                                children: [
                                  _jsx('legend', { children: 'CLIENT DETAILS' }),
                                  _jsxs('label', {
                                    children: [
                                      'Client / Business name',
                                      _jsx('input', {
                                        value: invoice.clientName,
                                        onChange: (e) => update('clientName', e.target.value),
                                      }),
                                    ],
                                  }),
                                  _jsxs('div', {
                                    className: 'form-grid two',
                                    children: [
                                      _jsxs('label', {
                                        children: [
                                          'Email address',
                                          _jsx('input', {
                                            type: 'email',
                                            value: invoice.clientEmail,
                                            onChange: (e) => update('clientEmail', e.target.value),
                                          }),
                                        ],
                                      }),
                                      _jsxs('label', {
                                        children: [
                                          'GSTIN',
                                          _jsx('input', {
                                            value: invoice.clientGstin,
                                            onChange: (e) =>
                                              update('clientGstin', e.target.value.toUpperCase()),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  _jsxs('label', {
                                    children: [
                                      'Billing address',
                                      _jsx('input', {
                                        value: invoice.clientAddress,
                                        onChange: (e) => update('clientAddress', e.target.value),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          _jsx('div', { className: 'divider' }),
                          _jsxs('div', {
                            className: 'section-heading item-heading',
                            children: [
                              _jsx('span', { children: '03' }),
                              _jsxs('div', {
                                children: [
                                  _jsx('h2', { children: 'Line items' }),
                                  _jsx('p', {
                                    children:
                                      'Add the services or products you\u2019re billing for.',
                                  }),
                                ],
                              }),
                              _jsxs('div', {
                                className: 'gst-toggle',
                                children: [
                                  _jsx('button', {
                                    className: invoice.supplyType === 'intra' ? 'selected' : '',
                                    onClick: () => update('supplyType', 'intra'),
                                    children: 'CGST + SGST',
                                  }),
                                  _jsx('button', {
                                    className: invoice.supplyType === 'inter' ? 'selected' : '',
                                    onClick: () => update('supplyType', 'inter'),
                                    children: 'IGST',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          _jsxs('div', {
                            className: 'items-table',
                            children: [
                              _jsxs('div', {
                                className: 'item-row item-labels',
                                children: [
                                  _jsx('span', { children: 'Description' }),
                                  _jsx('span', { children: 'Qty' }),
                                  _jsx('span', { children: 'Rate (\u20B9)' }),
                                  _jsx('span', { children: 'GST' }),
                                  _jsx('span', { children: 'Amount' }),
                                  _jsx('span', {}),
                                ],
                              }),
                              invoice.items.map((item) =>
                                _jsxs(
                                  'div',
                                  {
                                    className: 'item-row',
                                    children: [
                                      _jsx('input', {
                                        'aria-label': 'Description',
                                        value: item.description,
                                        onChange: (e) =>
                                          updateItem(item.id, 'description', e.target.value),
                                      }),
                                      _jsx('input', {
                                        'aria-label': 'Quantity',
                                        min: '0',
                                        type: 'number',
                                        value: item.quantity,
                                        onChange: (e) =>
                                          updateItem(item.id, 'quantity', Number(e.target.value)),
                                      }),
                                      _jsx('input', {
                                        'aria-label': 'Rate',
                                        min: '0',
                                        type: 'number',
                                        value: item.rate,
                                        onChange: (e) =>
                                          updateItem(item.id, 'rate', Number(e.target.value)),
                                      }),
                                      _jsx('select', {
                                        'aria-label': 'GST rate',
                                        value: item.gst,
                                        onChange: (e) =>
                                          updateItem(item.id, 'gst', Number(e.target.value)),
                                        children: [0, 5, 12, 18, 28].map((rate) =>
                                          _jsxs(
                                            'option',
                                            { value: rate, children: [rate, '%'] },
                                            rate,
                                          ),
                                        ),
                                      }),
                                      _jsx('strong', {
                                        children: money.format(item.quantity * item.rate),
                                      }),
                                      _jsx('button', {
                                        'aria-label': 'Remove item',
                                        className: 'delete-item',
                                        disabled: invoice.items.length === 1,
                                        onClick: () =>
                                          update(
                                            'items',
                                            invoice.items.filter(
                                              (candidate) => candidate.id !== item.id,
                                            ),
                                          ),
                                        children: _jsx(Icon, { name: 'trash', size: 17 }),
                                      }),
                                    ],
                                  },
                                  item.id,
                                ),
                              ),
                              _jsxs('button', {
                                className: 'add-item',
                                onClick: addItem,
                                children: [_jsx(Icon, { name: 'plus' }), 'Add line item'],
                              }),
                            ],
                          }),
                          _jsx('div', { className: 'divider' }),
                          _jsxs('div', {
                            className: 'section-heading',
                            children: [
                              _jsx('span', { children: '04' }),
                              _jsxs('div', {
                                children: [
                                  _jsx('h2', { children: 'Notes' }),
                                  _jsx('p', {
                                    children: 'Add payment terms or a personal message.',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          _jsx('textarea', {
                            value: invoice.notes,
                            onChange: (e) => update('notes', e.target.value),
                          }),
                        ],
                      }),
                      _jsxs('aside', {
                        className: 'preview-panel',
                        children: [
                          _jsxs('div', {
                            className: 'preview-label no-print',
                            children: [
                              _jsx('span', { children: 'LIVE PREVIEW' }),
                              _jsxs('span', { children: [_jsx('i', {}), 'Auto-updated'] }),
                            ],
                          }),
                          _jsxs('article', {
                            className: 'invoice-paper',
                            id: 'invoice',
                            children: [
                              _jsxs('div', {
                                className: 'paper-top',
                                children: [
                                  _jsxs('div', {
                                    className: 'paper-logo',
                                    children: [
                                      _jsx('span', {
                                        className: 'brand-mark small',
                                        children: _jsx('span', {}),
                                      }),
                                      _jsx('strong', { children: invoice.fromName }),
                                    ],
                                  }),
                                  _jsxs('div', {
                                    className: 'invoice-title',
                                    children: [
                                      _jsx('span', { children: 'TAX INVOICE' }),
                                      _jsx('h2', { children: invoice.invoiceNumber }),
                                    ],
                                  }),
                                ],
                              }),
                              _jsxs('div', {
                                className: 'paper-meta',
                                children: [
                                  _jsxs('div', {
                                    children: [
                                      _jsx('small', { children: 'ISSUE DATE' }),
                                      _jsx('strong', { children: dateLabel(invoice.issueDate) }),
                                    ],
                                  }),
                                  invoice.dueDate &&
                                    _jsxs('div', {
                                      children: [
                                        _jsx('small', { children: 'DUE DATE' }),
                                        _jsx('strong', { children: dateLabel(invoice.dueDate) }),
                                      ],
                                    }),
                                  _jsx('span', {
                                    className: 'status',
                                    children: invoice.dueDate ? 'DUE' : 'OPEN',
                                  }),
                                ],
                              }),
                              _jsxs('div', {
                                className: 'paper-parties',
                                children: [
                                  _jsxs('div', {
                                    children: [
                                      _jsx('small', { children: 'FROM' }),
                                      _jsx('strong', { children: invoice.fromName }),
                                      _jsxs('p', {
                                        children: [
                                          invoice.fromAddress,
                                          _jsx('br', {}),
                                          invoice.fromEmail,
                                          _jsx('br', {}),
                                          _jsxs('span', {
                                            children: ['GSTIN: ', invoice.fromGstin],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  _jsxs('div', {
                                    children: [
                                      _jsx('small', { children: 'BILL TO' }),
                                      _jsx('strong', { children: invoice.clientName }),
                                      _jsxs('p', {
                                        children: [
                                          invoice.clientAddress,
                                          _jsx('br', {}),
                                          invoice.clientEmail,
                                          _jsx('br', {}),
                                          _jsxs('span', {
                                            children: ['GSTIN: ', invoice.clientGstin],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              _jsxs('div', {
                                className: 'paper-table',
                                children: [
                                  _jsxs('div', {
                                    className: 'paper-row head',
                                    children: [
                                      _jsx('span', { children: 'DESCRIPTION' }),
                                      _jsx('span', { children: 'QTY' }),
                                      _jsx('span', { children: 'RATE' }),
                                      _jsx('span', { children: 'AMOUNT' }),
                                    ],
                                  }),
                                  invoice.items.map((item) =>
                                    _jsxs(
                                      'div',
                                      {
                                        className: 'paper-row',
                                        children: [
                                          _jsxs('span', {
                                            children: [
                                              _jsx('strong', {
                                                children: item.description || 'Untitled service',
                                              }),
                                              _jsxs('small', { children: ['GST ', item.gst, '%'] }),
                                            ],
                                          }),
                                          _jsx('span', { children: item.quantity }),
                                          _jsx('span', { children: money.format(item.rate) }),
                                          _jsx('span', {
                                            children: money.format(item.quantity * item.rate),
                                          }),
                                        ],
                                      },
                                      item.id,
                                    ),
                                  ),
                                ],
                              }),
                              _jsxs('div', {
                                className: 'paper-summary',
                                children: [
                                  _jsxs('div', {
                                    className: 'paper-note',
                                    children: [
                                      _jsx('small', { children: 'NOTES' }),
                                      _jsx('p', { children: invoice.notes }),
                                    ],
                                  }),
                                  _jsxs('div', {
                                    className: 'totals',
                                    children: [
                                      _jsxs('div', {
                                        children: [
                                          _jsx('span', { children: 'Subtotal' }),
                                          _jsx('strong', {
                                            children: money.format(totals.subtotal),
                                          }),
                                        ],
                                      }),
                                      invoice.supplyType === 'intra'
                                        ? _jsxs(_Fragment, {
                                            children: [
                                              _jsxs('div', {
                                                children: [
                                                  _jsx('span', { children: 'CGST' }),
                                                  _jsx('strong', {
                                                    children: money.format(totals.tax / 2),
                                                  }),
                                                ],
                                              }),
                                              _jsxs('div', {
                                                children: [
                                                  _jsx('span', { children: 'SGST' }),
                                                  _jsx('strong', {
                                                    children: money.format(totals.tax / 2),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          })
                                        : _jsxs('div', {
                                            children: [
                                              _jsx('span', { children: 'IGST' }),
                                              _jsx('strong', {
                                                children: money.format(totals.tax),
                                              }),
                                            ],
                                          }),
                                      _jsxs('div', {
                                        className: 'grand-total',
                                        children: [
                                          _jsx('span', { children: 'Total due' }),
                                          _jsx('strong', { children: money.format(totals.total) }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              _jsx('footer', {
                                className: 'paper-footer',
                                children: _jsx('span', {
                                  children: 'Thank you for your business.',
                                }),
                              }),
                            ],
                          }),
                          _jsxs('p', {
                            className: 'print-hint no-print',
                            children: [
                              _jsx(Icon, { name: 'file', size: 15 }),
                              'Use \u201CPrint / Save PDF\u201D to download a clean A4 invoice.',
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : _jsx(ProductView, {
                    view: view,
                    clients: clients,
                    setClients: setClients,
                    invoices: invoices,
                    onCreateInvoice: openNewInvoice,
                    onCreateForClient: createInvoice,
                    onNavigate: setView,
                    invoice: invoice,
                    profileRole: profileRole,
                    setProfileRole: setProfileRole,
                    updateInvoice: update,
                  }),
            ],
          }),
        ],
      }),
    ],
  })
}
