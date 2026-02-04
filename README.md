# 个人学术主页

> 黎梦金（Mengjin Li）的个人学术主页，展示学术成果和 AI 编程学习资源

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## 🌐 在线访问

- **Vercel 部署**: https://waytoagicstudyhomepage.vercel.app
- **GitHub 仓库**: https://github.com/lmj0209/WayToAgicStudyHomepage

## 👤 关于我

我是黎梦金（Mengjin Li），国防科技大学计算机学院博士研究生。主要研究方向包括：

- 计算机体系结构（Computer Architecture）
- 硬件预取技术（Hardware Prefetching）
- 机器人芯片（Robotics Chips）

## 📚 页面内容

### 首页 - AI 编程

AI 编程学习资源分享，包含：

- 🚀 **快速学习推荐** - 环境配置、实践使用、Skill 开发、MCP 协议、理论学习
- 📝 **学习笔记** - Claude、Next.js、MCP 等技术笔记
- 🛠️ **工具推荐** - 文献阅读、学术搜索工具

### 学术页面

学术成果展示，包含：

- 👋 **About Me** - 个人简介和研究方向
- 🔬 **Research Interests** - 研究兴趣标签
- 📄 **Publications** - 论文列表（按年份分组）
- 🎓 **Education** - 教育经历时间线

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel
- **字体**: Inter (英文), Noto Sans SC (中文)

## 📦 本地开发

### 环境要求

- Node.js 18.17 或更高版本
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看效果

### 构建生产版本

```bash
npm run build
npm start
```

## 📁 项目结构

```
├── app/                    # Next.js App Router
│   ├── academic/           # 学术页面
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 首页（AI 编程）
│   └── globals.css         # 全局样式
├── components/             # React 组件
│   ├── Header.tsx          # 顶部导航栏
│   ├── Sidebar.tsx         # 侧边栏
│   ├── AcademicPage.tsx    # 学术页面容器
│   ├── AICodingPage.tsx    # AI 编程页面容器
│   └── ...                 # 其他模块组件
├── prd/                    # 产品需求文档
├── public/                 # 静态资源（头像、CV等）
├── next.config.js          # Next.js 配置
├── tailwind.config.ts      # Tailwind 配置
└── tsconfig.json           # TypeScript 配置
```

## 🎨 设计特点

- **响应式设计** - 支持桌面端、平板、移动端
- **双语支持** - 中文/英文语言切换
- **侧边栏布局** - 左侧边栏 + 右侧内容区
- **模块化组件** - 易于维护和扩展

## 🌐 多语言

当前支持中文和英文切换，默认语言为中文。

---

## 📝 如何修改页面内容

### 1. 修改个人信息（侧边栏）

**文件**: `components/Sidebar.tsx`

```tsx
// 修改姓名
<h2 className="text-lg font-bold text-center text-text-primary mb-1">
  你的名字
</h2>
<p className="text-center text-text-secondary text-sm mb-6">中文名</p>

// 修改身份
<p className="text-sm font-medium text-text-primary">你的身份</p>

// 修改学校
<p className="text-sm font-medium text-text-primary">
  National University of Defense Technology
</p>

// 修改位置
<span>Changsha, China</span>

// 修改社交链接（搜索 href="mailto:" 或 href="https://"）
<SocialLink
  icon="📧"
  label="Email"
  href="mailto:你的邮箱@example.com"
/>
<SocialLink
  icon="🐙"
  label="GitHub"
  href="https://github.com/你的用户名"
/>
```

### 2. 修改学术页面内容

#### About Me 模块

**文件**: `components/AboutMe.tsx`

```tsx
<p className="text-sm text-text-secondary leading-relaxed mb-4">
  在这里修改你的个人简介...
</p>

// 修改导师链接
<a
  href="https://导师主页.com"
  className="text-primary font-medium hover:underline"
>
  Prof. 导师名字
</a>

// 修改研究方向关键词
<span className="font-bold text-primary">研究方向1</span>
```

#### Publications 模块（论文列表）

**文件**: `components/Publications.tsx`

```tsx
const publications: Record<string, Paper[]> = {
  "2024": [
    {
      title: "你的论文标题",
      authors: ["作者A", "作者B", "Mengjin Li", "作者C"],  // 保持你的名字加粗
      venue: "会议或期刊名称, 2024",
      links: {
        pdf: "https://你的论文.pdf链接",
        code: "https://你的代码仓库链接",
        slides: "https://你的幻灯片链接",
        bibtex: "https://你的bibtex链接",
      },
    },
  ],
  // 添加更多年份...
};
```

#### Education 模块（教育经历）

**文件**: `components/Education.tsx`

```tsx
const education = [
  {
    period: "2022 - Present",
    degree: "Ph.D.",
    school: "National University of Defense Technology",
    department: "College of Computer Science",
  },
  {
    period: "2018 - 2022",
    degree: "B.S.",
    school: "你的本科学校",
    department: "Department Name",
  },
];
```

### 3. 修改 AI 编程页面内容

#### AIAboutMe 模块

**文件**: `components/AIAboutMe.tsx`

```tsx
<p className="text-sm text-text-secondary leading-relaxed mb-4">
  在这里修改你的 AI 编程自我介绍...
</p>
```

#### QuickStart 模块（快速学习推荐）

**文件**: `components/QuickStart.tsx`

```tsx
const learningStages = [
  {
    id: 1,
    title: "环境配置篇",
    links: [
      { title: "链接标题", url: "https://你的链接" },
      { title: "另一个链接", url: "https://..." },
    ],
  },
  // 添加更多阶段...
];
```

#### LearningNotes 模块（学习笔记）

**文件**: `components/LearningNotes.tsx`

```tsx
const notesByCategory = {
  Claude: [
    {
      title: "笔记标题",
      url: "https://你的博客链接",
      date: "2024-01-15",
      tags: ["Claude", "PromptEngineering"],
    },
  ],
  // 添加更多分类...
};
```

#### ToolsRecommendations 模块（工具推荐）

**文件**: `components/ToolsRecommendations.tsx`

```tsx
const toolsByCategory = {
  "文献阅读": [
    {
      icon: "📚",
      name: "工具名称",
      description: "工具描述",
      url: "https://工具网站.com",
    },
  ],
  // 添加更多分类...
};
```

### 4. 修改导航栏

**文件**: `components/Header.tsx`

```tsx
// 修改 CV 链接（默认指向 /cv.pdf）
<a href="/cv.pdf" target="_blank">CV</a>

// CV 文件放在 public/ 目录下：public/cv.pdf
```

### 5. 添加头像图片

将头像图片放在 `public/` 目录下：

```
public/
├── avatar.jpg       # 你的头像图片
└── cv.pdf          # 你的简历文件
```

然后修改 `components/Sidebar.tsx`:

```tsx
// 将头像占位符替换为真实图片
<img
  src="/avatar.jpg"
  alt="Mengjin Li"
  className="w-24 h-24 rounded-full"
/>
```

### 6. 修改颜色和样式

**文件**: `tailwind.config.ts`

```tsx
colors: {
  primary: "#2563EB",      // 主题色（蓝色）
  "primary-dark": "#1D4ED8",
  // ... 其他颜色
}
```

---

## 📄 许可证

MIT License

## 📮 联系方式

- 📧 Email: [请填写您的邮箱]
- 🐙 GitHub: [https://github.com/lmj0209](https://github.com/lmj0209)
- 📚 Google Scholar: [请填写您的链接]
- 🔗 ORCID: [请填写您的链接]

## 🙏 致谢

感谢所有开源项目的贡献者！

---

*最后更新: 2026-02-04*
