# これはなに

- nuxt3+Tailwind+Firebase+Vercel のテンプレートです

# 環境構築

```
    $ git clone
    $ cd nuxt3-tailwind-firebase
    $ firebase projects:create
    # 作成したプロジェクトのコンソールに移動する
    # 作成したpjからマイアプリを作成し、configをenvに記録
    # プロジェクトの課金設定
    # .firebaseのプロジェクト名を変更する
    $ cd functions 
    $ npm install 
    $ npm run build

    $ firebse deploy

    vercel にてアプリを作成し、リポジトリと連携する
    command :  npm run build
    .vercel/output を公開する
```

```
    Vercel CLIをインストール
    $ npm install vercel -git
    $ vercel 
    Root Directory  /
    Output Directory .vercel/output

    // envファイルをアップロードする
    $ vercel env add

    # もしくは管理画面から環境変数を設定する
```

# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
