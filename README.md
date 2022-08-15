# 5-next-start

next 学习

### getStaticProps 和 getServerSideProps 的区别？

- 运行时机
  - getServerSideProps 每次页面请求时都会运行，在构建时不运行
- 调用时机
  - 都是在浏览器渲染之前，也就是说不存在 window document 等对象
