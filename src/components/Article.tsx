import * as React from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { ArticleSchema } from 'store/articleSchema'

type Props = {
  article: ArticleSchema
  removeArticle: (article: ArticleSchema) => void
}

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
  const dispatch = useDispatch()

  const deleteArticle = React.useCallback(
    (currentArticle: ArticleSchema) => dispatch(removeArticle(currentArticle)),
    [dispatch, removeArticle],
  )

  return (
    <div className='Article'>
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  )
}
