# OpenRub API Documentation

## Base URL
```
https://openrub.com/api
```

## Endpoints

### Chat Completion
```
POST /api/chat
```

#### Request
```json
{
  "model": "qwen-turbo",
  "messages": [
    {"role": "user", "content": "Hello!"}
  ]
}
```

#### Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| model | string | Yes | Model name (see below) |
| messages | array | Yes | Chat messages |
| temperature | number | No | 0-2, default 0.7 |
| max_tokens | number | No | Max tokens to generate |

#### Available Models

| Model | Provider | Input Price | Output Price |
|-------|----------|-------------|-------------|
| qwen-turbo | Alibaba | $0.12/1M | $0.12/1M |
| qwen-plus | Alibaba | $0.25/1M | $0.75/1M |
| qwen-max | Alibaba | $1.50/1M | $1.50/1M |
| openai/gpt-4o-mini | OpenRouter | $0.20/1M | $0.80/1M |
| anthropic/claude-3-haiku | OpenRouter | $0.35/1M | $1.50/1M |

#### Response
```json
{
  "id": "chatcmpl-xxx",
  "object": "chat.completion",
  "created": 1234567890,
  "model": "qwen-turbo",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! How can I help you?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 20,
    "total_tokens": 30
  }
}
```

### Health Check
```
GET /api/chat
```

#### Response
```json
{
  "status": "ok",
  "message": "OpenRub API is running",
  "availableModels": ["qwen-turbo", "qwen-plus", ...]
}
```

## Example Usage

### cURL
```bash
curl -X POST https://openrub.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen-turbo",
    "messages": [{"role": "user", "content": "Say hello!"}]
  }'
```

### Python
```python
import requests

response = requests.post(
    "https://openrub.com/api/chat",
    json={
        "model": "qwen-turbo",
        "messages": [{"role": "user", "content": "Hello!"}]
    }
)

print(response.json())
```

### JavaScript
```javascript
const response = await fetch('https://openrub.com/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'qwen-turbo',
    messages: [{ role: 'user', content: 'Hello!' }]
  })
});

const data = await response.json();
console.log(data);
```
