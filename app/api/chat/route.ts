// OpenRub API Route Handler v2
// Updated with working OpenRouter key

import { NextRequest, NextResponse } from 'next/server';

// Store API keys
const API_KEYS = {
  'tongyi': '',
  'openrouter': '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',
};

// Provider endpoints
const PROVIDERS = {
  'tongyi': {
    name: 'qwen-turbo',
    endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
  },
  'qwen-plus': {
    name: 'qwen-plus',
    endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
  },
  'qwen-max': {
    name: 'qwen-max',
    endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
  },
  'openrouter': {
    name: 'openrouter',
    endpoint: 'https://openrouter.ai/api/v1/chat/completions',
  },
};

// Pricing (per 1M tokens) - for reference
const PRICING = {
  // Tongyi (from upstream)
  'qwen-turbo': { input: 0.08, output: 0.08 },
  'qwen-plus': { input: 0.20, output: 0.60 },
  'qwen-max': { input: 1.20, output: 1.20 },
  // OpenRouter models (market rate)
  'openai/gpt-4o-mini': { input: 0.15, output: 0.60 },
  'anthropic/claude-3-haiku': { input: 0.25, output: 1.25 },
};

// Retail prices (what we charge customers)
const RETAIL_PRICES = {
  'qwen-turbo': { input: 0.12, output: 0.12 },
  'qwen-plus': { input: 0.25, output: 0.75 },
  'qwen-max': { input: 1.50, output: 1.50 },
  'openai/gpt-4o-mini': { input: 0.20, output: 0.80 },
  'anthropic/claude-3-haiku': { input: 0.35, output: 1.50 },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, model = 'qwen-turbo', ...otherParams } = body;

    // Simple API key check (in production, implement proper auth)
    const authHeader = request.headers.get('authorization');
    const userApiKey = authHeader?.replace('Bearer ', '');
    
    // For demo, accept any key or use default
    const validKeys = Object.values(API_KEYS);
    if (userApiKey && !validKeys.includes(userApiKey)) {
      // In production, check against user database
      // For now, allow demo access
    }

    // Determine provider and route request
    let provider, targetModel, headers, endpoint;

    if (model.startsWith('qwen-')) {
      // Route to Tongyi
      provider = 'tongyi';
      targetModel = model;
      const providerConfig = PROVIDERS[model as keyof typeof PROVIDERS];
      endpoint = providerConfig?.endpoint || PROVIDERS['tongyi'].endpoint;
      headers = {
        'Authorization': `Bearer ${API_KEYS.tongyi}`,
        'Content-Type': 'application/json',
      };
    } else {
      // Route to OpenRouter (for GPT, Claude, etc.)
      provider = 'openrouter';
      targetModel = model;
      endpoint = PROVIDERS.openrouter.endpoint;
      headers = {
        'Authorization': `Bearer ${API_KEYS.openrouter}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://openrub.com',
        'X-Title': 'OpenRub',
      };
    }

    // Forward request to provider
    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: targetModel,
        messages,
        ...otherParams,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        { error: `Provider error: ${response.status}`, details: error },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Return response to client
    return NextResponse.json(data);

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: String(error) },
      { status: 500 }
    );
  }
}

// GET method for health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'OpenRub API is running',
    availableModels: Object.keys(RETAIL_PRICES),
    docs: 'https://openrub.com/api-docs',
  });
}
