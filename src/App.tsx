import * as React from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import logo from 'logo.svg'
import { Article } from 'components/Article'
import { ArticleAddForm } from 'components/ArticleAddForm'
import { articleActions } from 'store/state.article'
import { Dispatch } from 'redux'
import { ArticleSchema } from 'store/articleSchema'
import { RootState } from 'store/index'
import styled from 'styled-components'
import { FlexCenterContainer } from 'GlobalStyles'

const App: React.FC = () => {
  const articles = useSelector((state: RootState) => {
    return state.articles.data
  }, shallowEqual)
  const { addArticle, removeArticle } = articleActions

  const dispatch: Dispatch<any> = useDispatch()

  const add = React.useCallback(
    (article: ArticleSchema) => dispatch(addArticle(article)),
    [addArticle, dispatch],
  )

  return (
    <FlexCenterContainer>
      <StyledLogo src={logo} alt='logo' />
      <ArticleAddForm add={add} />
      <ArticlesContainer>
        {articles.map((article: ArticleSchema) => (
          <Article
            key={article.id}
            article={article}
            removeArticle={removeArticle}
          />
        ))}
      </ArticlesContainer>
    </FlexCenterContainer>
  )
}

const StyledLogo = styled(props => <img {...props} />)`
  height: 40vmin;
  pointer-events: none;
  animation: App-logo-spin infinite 20s linear;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const ArticlesContainer = styled.div`
  padding: 40px;
`

export default App
