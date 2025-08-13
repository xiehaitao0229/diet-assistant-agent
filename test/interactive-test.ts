// (交互式测试)
import { dietAgent } from "../src/mastra/agents/diet-agent";
import * as readline from 'readline';
import dotenv from 'dotenv';

dotenv.config();

async function startInteractiveTest() {
  console.log("💬 饮食记录 AI 助手 - 交互式测试");
  console.log("输入 'help' 查看命令，输入 'exit' 退出\n");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const askQuestion = (question: string): Promise<string> => {
    return new Promise(resolve => {
      rl.question(question, resolve);
    });
  };

  const showHelp = () => {
    console.log(`
📋 可用命令:
  help     - 显示此帮助信息
  clear    - 清屏
  exit     - 退出程序
  
💡 使用示例:
  "我吃了一个苹果"
  "记录今天的早餐：牛奶和面包"
  "分析一下西红柿的营养价值"
  "推荐一些减肥食谱"
    `);
  };

  try {
    while (true) {
      const userInput = await askQuestion("👤 你: ");
      
      if (userInput.toLowerCase() === 'exit') {
        console.log("👋 再见！");
        break;
      }
      
      if (userInput.toLowerCase() === 'help') {
        showHelp();
        continue;
      }
      
      if (userInput.toLowerCase() === 'clear') {
        console.clear();
        console.log("💬 饮食记录 AI 助手 - 交互式测试\n");
        continue;
      }

      if (userInput.trim() === '') {
        continue;
      }

      console.log("🤖 AI 思考中...");
      
      try {
        const response = await dietAgent.generate([
          {
            role: "user",
            content: userInput
          }
        ], {
          maxSteps: 3
        });

        console.log(`🍎 AI 助手: ${response.text}\n`);
      } catch (error) {
        console.error(`❌ 处理出错: ${error}\n`);
      }
    }
  } catch (error) {
    console.error("💥 交互测试出错:", error);
  } finally {
    rl.close();
  }
}

startInteractiveTest().catch(console.error);