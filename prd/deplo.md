# 部署指南：个人学术主页

## 1. 部署平台选择

### 推荐平台

| 平台 | 推荐度 | 优点 | 缺点 |
|------|--------|------|------|
| **Vercel** | ⭐⭐⭐⭐⭐ | Next.js 官方平台，零配置，自动 HTTPS，全球 CDN | - |
| **Netlify** | ⭐⭐⭐⭐ | 免费额度充足，支持 CI/CD | 需要额外配置 |
| **GitHub Pages** | ⭐⭐⭐ | 完全免费，与 GitHub 集成 | 仅支持静态站点，需配置 |

**推荐使用 Vercel**，因为本项目使用 Next.js 开发，Vercel 是 Next.js 的官方托管平台，提供最佳的部署体验。

---

## 2. 部署到 Vercel（推荐）

### 2.1 前置准备

1. **代码托管到 GitHub**
   ```bash
   # 初始化 git 仓库（如果还没有）
   git init

   # 添加所有文件
   git add .

   # 提交
   git commit -m "Initial commit: 学术主页 V1.0"

   # 创建 GitHub 仓库后，关联远程仓库
   git remote add origin https://github.com/你的用户名/仓库名.git

   # 推送到 GitHub
   git push -u origin main
   ```

2. **注册 Vercel 账号**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录（推荐）

### 2.2 部署步骤

#### 方法 A：通过 Vercel 网站部署（最简单）

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 **"Add New..."** → **"Project"**
3. 导入你的 GitHub 仓库
4. Vercel 会自动检测到这是一个 Next.js 项目
5. 配置项目：
   - **Project Name**: `academic-homepage`（可自定义）
   - **Framework Preset**: Next.js（自动检测）
   - **Root Directory**: `.`（根目录）
   - **Build Command**: `npm run build`（自动填充）
   - **Output Directory**: `.next`（自动填充）
6. 点击 **"Deploy"**
7. 等待约 1-2 分钟，部署完成！
8. 你会获得一个 `https://你的项目名.vercel.app` 的域名

#### 方法 B：通过 Vercel CLI 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署
vercel

# 生产环境部署
vercel --prod
```

### 2.3 配置自定义域名（可选）

1. 在 Vercel 项目中，进入 **Settings** → **Domains**
2. 添加你的域名（如 `mengjinli.com` 或 `www.mengjinli.com`）
3. 根据提示在域名提供商处配置 DNS 记录
4. 等待 DNS 生效（通常几分钟到几小时）

---

## 3. 部署到 Netlify

### 3.1 准备工作

由于 Next.js 需要 SSR（服务端渲染），Netlify 部署需要额外配置。

### 3.2 部署步骤

1. 登录 [Netlify](https://netlify.com)
2. 点击 **"Add new site"** → **"Import an existing project"**
3. 连接 GitHub 仓库
4. 配置构建设置：
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. 添加环境变量：
   - `NETLIFY_NEXT_PLUGIN_SKIP` = `true`
6. 点击 **"Deploy site"**

---

## 4. 部署到 GitHub Pages（需要额外配置）

### 4.1 配置 Next.js 输出静态文件

修改 `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // 添加这行
  images: {
    unoptimized: true,  // 添加这行
  },
  basePath: '/仓库名',  // 如果部署到 github.io/仓库名
}

module.exports = nextConfig
```

### 4.2 部署步骤

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择源为 `npm run build` 输出的 `out` 目录
4. 访问 `https://你的用户名.github.io/仓库名`

---

## 5. 部署前检查清单

### 5.1 代码检查

- [ ] 确认所有文件已保存
- [ ] 确认 `.gitignore` 文件正确配置
- [ ] 确认没有包含敏感信息（API 密钥、密码等）
- [ ] 确认所有链接有效（CV.pdf、社交链接等）

### 5.2 构建测试

```bash
# 本地测试构建
npm run build

# 如果构建成功，测试预览
npm start
```

### 5.3 内容准备

- [ ] 准备真实头像图片（`public/avatar.jpg`）
- [ ] 上传 CV 文件（`public/cv.pdf`）
- [ ] 更新真实的个人信息（联系方式、邮箱等）
- [ ] 更新真实的链接（GitHub、Google Scholar、ORCID 等）

---

## 6. 部署后维护

### 6.1 更新网站

```bash
# 修改代码后
git add .
git commit -m "更新内容描述"
git push

# Vercel 会自动检测到更新并重新部署
```

### 6.2 环境变量（如需要）

如果需要使用环境变量，在 Vercel 项目设置中添加：
- 进入 **Settings** → **Environment Variables**
- 添加变量（如 `NEXT_PUBLIC_API_KEY`）

### 6.3 自定义 404 页面（可选）

创建 `app/not-found.tsx`:

```tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg">页面未找到</p>
        <a href="/" className="text-primary hover:underline">返回首页</a>
      </div>
    </div>
  );
}
```

---

## 7. 域名配置（可选）

### 7.1 购买域名

推荐域名注册商：
- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com)
- [阿里云](https://wanwang.aliyun.com)
- [腾讯云](https://dnspod.cloud.tencent.com)

### 7.2 配置 DNS

以 Vercel 为例：

1. 在 Vercel 项目中添加域名
2. Vercel 会提供需要配置的 DNS 记录：
   - **A 记录**: `76.76.21.21`
   - **CNAME 记录**: `cname.vercel-dns.com`
3. 在域名注册商处添加这些 DNS 记录
4. 等待 DNS 生效

---

## 8. 常见问题

### Q1: 部署后样式丢失？
**A**: 检查 Tailwind CSS 配置，确保 `content` 字段包含所有正确的路径。

### Q2: 图片无法显示？
**A**: 将图片放在 `public/` 目录下，引用时使用 `/图片名.jpg`。

### Q3: 如何查看部署日志？
**A**:
- Vercel: 在项目的 **Deployments** 标签页点击具体部署记录
- Netlify: 在 **Deploys** 标签页查看

### Q4: 部署失败怎么办？
**A**:
1. 检查构建日志中的错误信息
2. 确保本地 `npm run build` 成功
3. 检查 Node.js 版本是否兼容

---

## 9. 快速部署命令总结

```bash
# 1. 提交代码到 Git
git add .
git commit -m "部署学术主页"
git push

# 2. Vercel 自动部署（无需额外操作）
# 访问 https://你的项目名.vercel.app

# 3. 使用 CLI 部署（可选）
npm i -g vercel
vercel --prod
```

---

*文档生成时间：2026-02-04*
*版本：V1.0*
