# Pyisland Website

Pyisland 官网前端项目，展示 Windows 灵动岛（Dynamic Island）控制中心的各项功能、分支版本与贡献者信息。

## 技术栈

- **框架**: Next.js 15（App Router）
- **语言**: TypeScript
- **UI 库**: React 19
- **3D 渲染**: Three.js + @react-three/fiber + @react-three/drei
- **样式**: Tailwind CSS + CSS Modules
- **图标**: lucide-react
- **工具库**: clsx + tailwind-merge

## 项目结构

```
├── app/                       # Next.js App Router 页面
│   ├── layout.tsx             # 根布局（DynamicIsland、Metadata）
│   ├── page.tsx               # 首页入口
│   ├── sitemap.ts             # 站点地图
│   └── robots.ts              # 爬虫配置
├── components/                # React 组件
│   ├── ScrollShowcase.tsx    # 主滚动容器，管理页面切换动画
│   ├── DynamicIsland.tsx      # 顶部动态岛导航栏
│   ├── HeroContent.tsx        # 首页 Hero 区域
│   ├── FeaturesContent.tsx    # 功能特性展示
│   ├── BranchesContent.tsx     # 分支版本总览
│   ├── DevelopContent.tsx      # 开发指南（终端界面）
│   ├── ContributorContent.tsx # 贡献者展示（macOS 风格）
│   ├── DownloadContent.tsx     # 下载页面
│   ├── DesktopIcons.tsx       # 左侧桌面图标
│   ├── ScrollIndicator.tsx     # 底部滚动指示器
│   └── ThreeScene.tsx          # Three.js 3D 场景封装
├── lib/
│   ├── utils.ts                # 工具函数（cn 合并类名）
│   └── three/                  # Three.js 核心模块
│       ├── sceneConfig.ts      # 场景配置常量
│       ├── createElements.ts   # 场景元素创建函数
│       ├── animate.ts          # 动画循环逻辑
│       ├── effects.ts          # 光效/色相计算函数
│       └── types.ts            # 类型定义
├── data/                       # 静态数据
│   ├── viewState.ts            # 视图状态类型
│   ├── phase.ts               # 过渡阶段类型
│   ├── contributorData.ts     # 贡献者数据
│   ├── developData.ts         # 开发分支数据
│   └── downloadData.ts        # 下载版本数据
└── styles/                     # CSS Modules
    ├── tokens.css              # 设计令牌（CSS 变量）
    ├── typography.module.css   # 排版样式
    ├── glass.module.css        # 毛玻璃效果
    ├── effect.module.css       # 动画视觉效果
    ├── button.module.css       # 按钮样式
    └── appIcons.module.css     # 桌面图标动画
```

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start
```
