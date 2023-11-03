import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useGetArticles } from '../hooks/UseGetArticles';

export const Blog = () => {
    const [articles, loading] = useGetArticles();

  return (
    <BlogContainer>
        <Title>Blog</Title>
        {loading === true ?
            <p>Loading...</p>
        :
            <section>
                {articles.map((article) => {
                    return <Article key={article.id}>{article.title}</Article>

                })}
            </section>

        }
    </BlogContainer>
  )
}

const BlogContainer = styled.div `
    margin: 40px 0 20px 0;
`;

const Title = styled.h2 `
    margin-bottom: 10px;
`;

const Article = styled.p `
    padding: 10px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
`; 




