# 5-next-start

> next 学习

## 工具链

- redux-toolkit
  - 官网 https://redux-toolkit.js.org/usage/usage-with-typescript#type-safety-with-extrareducers
  - 教程 https://blog.csdn.net/yehuozhili/article/details/119674313
- next-redux-wrapper
  - 官网
  - 教程

## getStaticProps 和 getServerSideProps 和 getInitialProps 的区别？

- 使用的地方
  - 三个都只能用在 pages 中
- client 端还是 server 端
  - getStaticProps 始终在 server 段执行
  - ( getInitialProps ) 可以在 client 端执行，也可以在 server 端执行
- 运行时机
  - getServerSideProps 每次页面请求时都会运行，在构建时不运行
- 调用时机
  - 都是在浏览器渲染之前，也就是说不存在 window document 等对象

## getLayout

- 官网 https://nextjs.org/docs/basic-features/layouts
- 注意 需要设置两个地方，一个是 \_app.js，另一个是 pages 中的文件
