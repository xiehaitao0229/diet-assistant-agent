# 饮食记录助手 (Diet Assistant)

一个基于 Mastra 框架和 DeepSeek AI 的智能饮食记录应用，帮助用户轻松记录和分析日常饮食，提供个性化的营养建议。

## ✨ 特性

- 🤖 **智能食物识别**: 使用 DeepSeek AI 自动识别和搜索食物
- 📊 **营养分析**: 获取详细的营养成分信息（卡路里、蛋白质、碳水化合物等）
- 🍽️ **餐次管理**: 支持早餐、午餐、晚餐和零食的分类记录
- 💡 **健康建议**: 基于中国人饮食习惯提供个性化健康提示
- 🔄 **工作流自动化**: 完整的饮食记录工作流，从搜索到记录一键完成
- 🌐 **多语言支持**: 中英文双语交互，适合中文用户使用

## 🏗️ 技术架构

- **框架**: Mastra (AI Agent 和 Workflow 框架)
- **AI 模型**: DeepSeek Chat API
- **语言**: TypeScript
- **部署**: Cloudflare Workers
- **数据库**: LibSQL (SQLite)

## 📁 项目结构

```
diet-assistant/
├── src/
│   ├── mastra/
│   │   ├── agents/
│   │   │   └── diet-agent.ts      # 饮食记录 AI Agent
│   │   ├── workflows/
│   │   │   └── diet-logging-workflow.ts  # 饮食记录工作流
│   │   └── index.ts               # Mastra 配置
│   └── types/
│       └── food.ts                # 食物相关类型定义
├── test/                          # 测试文件
├── package.json
└── README.md
```

## 🚀 快速开始

### 环境要求

- Node.js >= 20.9.0
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 环境配置

创建 `.env` 文件并配置以下环境变量：

```env
DEEPSEEK_API_KEY=your_deepseek_api_key
```

### 开发运行

```bash
# 开发模式
npm run dev

# 测试 Agent
npm run test:agent

# 交互式测试
npm run test:interactive
```

### 部署

```bash
# 构建并部署到 Cloudflare Workers
npm run deploy
```

## 🤖 AI Agent 功能

饮食记录助手具备以下核心能力：

- **食物搜索**: 根据用户描述智能搜索最匹配的食物
- **营养分析**: 获取准确的营养成分数据
- **中文优化**: 专门针对中文食物名称进行识别和翻译
- **健康建议**: 结合中国人饮食习惯提供实用建议

## 📊 工作流程

饮食记录工作流包含四个主要步骤：

1. **食物搜索** (`search-food-step`)
   - 根据用户描述搜索食物
   - 返回最匹配的食物选项

2. **营养获取** (`get-nutrition-step`) 
   - 获取选中食物的详细营养信息
   - 计算指定分量的营养成分

3. **摘要生成** (`generate-summary-step`)
   - 生成饮食记录摘要
   - 提供个性化健康建议

4. **格式化输出** (`format-output-step`)
   - 整理最终输出结果
   - 生成友好的用户反馈

## 📝 使用示例

```typescript
import { dietLoggingWorkflow } from './src/mastra/workflows/diet-logging-workflow';

// 记录一顿饮食
const result = await dietLoggingWorkflow.execute({
  food_description: "一个苹果",
  meal_type: "snack",
  serving_amount: "150g"
});

console.log(result.message); // "成功记录 一个苹果! 🎉"
console.log(result.health_tips); // 健康小贴士数组
```

## 🛠️ 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run deploy` - 部署到 Cloudflare Workers
- `npm run test:agent` - 测试 AI Agent
- `npm run test:interactive` - 交互式测试

## 🔧 配置

### Agent 配置

AI Agent 使用 DeepSeek Chat 模型，支持以下配置：

- 模型提供商：DeepSeek
- 基础 URL：`https://api.deepseek.com`
- 语言：中文为主，英文辅助

### 部署配置

使用 Cloudflare Workers 部署，支持：

- Node.js 兼容性
- 全球 CDN 分发
- 无服务器架构


## 📄 许可证

ISC License


## 前端项目地址
https://github.com/xiehaitao0229/diet-assistant-fe

## 整体的项目结构图
![e575845f1d5e69df627e3825ce38b694](https://github.com/user-attachments/assets/e76bc1ff-f9d1-445c-bf11-3f35d33969c5)

