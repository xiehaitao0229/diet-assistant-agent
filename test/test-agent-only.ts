// 仅测试 Agent
import { dietAgent } from "../src/mastra/agents/diet-agent";
import dotenv from 'dotenv';

dotenv.config();

async function testAgentOnly() {
  console.log("🧪 单独测试 Diet Agent...\n");

  const testCases = [
    "我想记录一个苹果",
    "今天早餐吃了包子和豆浆", 
    "请分析一下鸡蛋的营养价值",
    "我在减肥，推荐一些低卡食物",
    "晚餐吃了米饭、青菜和红烧肉"
  ];

  for (const testCase of testCases) {
    console.log(`📝 测试: ${testCase}`);
    try {
      const response = await dietAgent.generate([
        {
          role: "user",
          content: testCase
        }
      ], {
        maxSteps: 2
      });

      console.log(`✅ 响应: ${response.text}\n`);
      console.log("-".repeat(40) + "\n");
    } catch (error) {
      console.error(`❌ 错误: ${error}\n`);
    }
  }
}

testAgentOnly().catch(console.error);