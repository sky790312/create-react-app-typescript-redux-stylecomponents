import React, { useState } from 'react'
import { ArticleSchema } from 'store/articleSchema'

type Props = {
  add: (article: ArticleSchema | any) => void
}

export const ArticleAddForm: React.FC<Props> = ({ add }) => {
  const [article, setArticle] = useState<
    ArticleSchema | Record<string, unknown>
  >()

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault()
    add(article)
  }

  return (
    <form onSubmit={addNewArticle}>
      <input
        type='text'
        id='title'
        placeholder='Title'
        onChange={handleArticleData}
      />
      <input
        type='text'
        id='body'
        placeholder='Description'
        onChange={handleArticleData}
      />
      <button disabled={!article}>Add article</button>
    </form>
  )
}
