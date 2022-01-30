<template>
  <article>
    <!-- フロントマターのtitle -->
    <h1>{{ article.title }}</h1>
    <ul>
      <li
        v-for="link of article.toc"
        :key="link.id"
        :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
      >
        <NuxtLink :to="`#${link.id}`">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
    <!-- markdown部分 -->
    <nuxt-content class="markdown-body" :document="article" />
  </article>
</template>

<script>
// import { Component, Vue, Prop } from 'nuxt-property-decorator'
export default {
  name: 'MdPage',
  async asyncData ({ $content }) {
    // content/index.mdを取得
    const article = await $content('index').fetch()
    return { article }
  }
}
</script>
