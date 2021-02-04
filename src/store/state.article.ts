import { ArticleSchema } from "store/articleSchema";

type ArticleState = {
  data: ArticleSchema[];
};

type ArticleAction = {
  type: string;
  article: ArticleSchema;
};

const initialState: ArticleState = {
  data: [
    {
      id: 1,
      title: "post 1",
      body: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi"
    },
    {
      id: 2,
      title: "post 2",
      body: "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint"
    }
  ]
};

const actionTypes = {
  ADD_ARTICLE: "ADD_ARTICLE",
  REMOVE_ARTICLE: "REMOVE_ARTICLE"
};

export const articleActions = {
  addArticle: (article: ArticleSchema): ArticleAction => {
    const action: ArticleAction = {
      type: actionTypes.ADD_ARTICLE,
      article
    };

    return action;
  },
  removeArticle: (article: ArticleSchema): ArticleAction => {
    const action: ArticleAction = {
      type: actionTypes.REMOVE_ARTICLE,
      article
    };
    return action;
  }
};

export const articleReducer = (state: ArticleState = initialState, action: ArticleAction): ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE: {
      const newArticle: ArticleSchema = {
        id: Math.random(), // not really unique
        title: action.article.title,
        body: action.article.body
      };
      return {
        ...state,
        data: [...state.data, newArticle]
      };
    }
    case actionTypes.REMOVE_ARTICLE: {
      const updatedArticles: ArticleSchema[] = state.data.filter(article => article.id !== action.article.id);
      return {
        ...state,
        data: updatedArticles
      };
    }
  }
  return state;
};
