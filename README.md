#本地开发启动指令
npm run dev
#构建指令
npm run build

# 目录结构描述
├── build                   // 构建相关文件
├── config                  // 配置文件
│   ├── dev.config.js       // 开发环境配置
│   ├── pro.config.js       // 生产环境配置
│   ├── default.config.js   // 默认公共配置
├── logs                    // 日志输出
├── node_modules
├── public                  // 公共资源文件
├── src                     // 代码目录
│   ├── baseclass           // 公共类方法
│   ├── controller          // 控制器
│   ├── middlwares          // 中间件
│   ├── routes              // 路由访问入口
│   ├── service             // 数据库访问层 + 逻辑层
│   ├── server.ts           // 入口文件