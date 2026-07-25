/**
 * Daftar provider AI yang didukung oleh sistem.
 * Constant ini digunakan untuk merender UI pilihan provider dan model.
 */
export const AI_PROVIDERS = {
    OPENAI: {
        id: 'OPENAI',
        label: 'OpenAI',
        icon: '◎',
        models: [
            { id: 'gpt-5.6-sol', label: 'GPT-5.6 Sol', description: 'Frontier model, most capable for complex professional work' },
            { id: 'gpt-5.6-terra', label: 'GPT-5.6 Terra', description: 'Balanced performance & cost for everyday tasks' },
            { id: 'gpt-5.6-luna', label: 'GPT-5.6 Luna', description: 'Fast, budget-friendly for high-volume tasks' },
            { id: 'gpt-4o', label: 'GPT-4o', description: 'Previous flagship model (legacy)' },
        ],
        keyPlaceholder: 'sk-...',
        docsUrl: 'https://platform.openai.com/api-keys',
    },
    ANTHROPIC: {
        id: 'ANTHROPIC',
        label: 'Anthropic Claude',
        icon: '◈',
        models: [
            { id: 'claude-sonnet-5', label: 'Claude Sonnet 5', description: 'Latest, best balance of performance & cost' },
            { id: 'claude-opus-4-8', label: 'Claude Opus 4.8', description: 'Most capable for highly complex tasks' },
            { id: 'claude-haiku-4-5-20251001', label: 'Claude Haiku 4.5', description: 'Fastest, most affordable' },
            { id: 'claude-fable-5', label: 'Claude Fable 5', description: 'Fast output variant of the Claude 5 family' },
        ],
        keyPlaceholder: 'sk-ant-...',
        docsUrl: 'https://console.anthropic.com/settings/keys',
    },
    DEEPSEEK: {
        id: 'DEEPSEEK',
        label: 'DeepSeek',
        icon: '◇',
        models: [
            { id: 'deepseek-v4-pro', label: 'DeepSeek V4 Pro', description: 'Complex reasoning, agentic coding, long-context' },
            { id: 'deepseek-v4-flash', label: 'DeepSeek V4 Flash', description: 'Fast, cost-effective, supports thinking mode' },
        ],
        keyPlaceholder: 'sk-...',
        docsUrl: 'https://platform.deepseek.com/api_keys',
    },
    CUSTOM: {
        id: 'CUSTOM',
        label: 'Custom Provider',
        icon: '⚙️',
        models: [], // Will be populated from database
        keyPlaceholder: 'sk-...',
        docsUrl: '#',
    },
} as const;

export type AiProviderId = keyof typeof AI_PROVIDERS;

export function getProviderConfig(provider: string) {
    if (provider in AI_PROVIDERS) {
        return AI_PROVIDERS[provider as AiProviderId];
    }
    return null;
}
